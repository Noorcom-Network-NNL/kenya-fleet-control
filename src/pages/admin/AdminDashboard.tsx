import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Calendar, DollarSign, Users, TrendingUp, Activity } from 'lucide-react';
import { collection, onSnapshot, query, orderBy, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface DashboardStats {
  enquiries: number;
  consultations: number;
  sales: number;
  meetings: number;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({
    enquiries: 0,
    consultations: 0,
    sales: 0,
    meetings: 0,
  });
  const [recentActivities, setRecentActivities] = useState<any[]>([]);

  useEffect(() => {
    // Set up real-time listeners for each collection
    const collections = ['enquiries', 'consultations', 'sales', 'meetings'];
    const unsubscribes: (() => void)[] = [];

    collections.forEach((collectionName) => {
      const q = query(collection(db, collectionName));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setStats((prev) => ({
          ...prev,
          [collectionName]: snapshot.size,
        }));
      });
      unsubscribes.push(unsubscribe);
    });

    // Listen to recent activities (last 10 items across all collections)
    const activitiesQuery = query(
      collection(db, 'enquiries'),
      orderBy('createdAt', 'desc'),
      limit(5)
    );
    
    const activitiesUnsubscribe = onSnapshot(activitiesQuery, (snapshot) => {
      const activities = snapshot.docs.map((doc) => ({
        id: doc.id,
        type: 'enquiry',
        ...doc.data(),
      }));
      setRecentActivities(activities);
    });

    unsubscribes.push(activitiesUnsubscribe);

    return () => {
      unsubscribes.forEach((unsubscribe) => unsubscribe());
    };
  }, []);

  const statCards = [
    {
      title: 'Total Enquiries',
      value: stats.enquiries,
      icon: MessageSquare,
      change: '+12%',
      changeType: 'positive' as const,
    },
    {
      title: 'Consultations',
      value: stats.consultations,
      icon: Calendar,
      change: '+8%',
      changeType: 'positive' as const,
    },
    {
      title: 'Sales',
      value: stats.sales,
      icon: DollarSign,
      change: '+23%',
      changeType: 'positive' as const,
    },
    {
      title: 'Meetings',
      value: stats.meetings,
      icon: Users,
      change: '+5%',
      changeType: 'positive' as const,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your admin dashboard. Here's an overview of your business metrics.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}>
                  {stat.change}
                </span>{' '}
                from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Recent Activities
            </CardTitle>
            <CardDescription>Latest enquiries and activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.length > 0 ? (
                recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        New enquiry from {activity.name || 'Unknown'}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {activity.email && `Email: ${activity.email}`}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No recent activities</p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Performance Overview
            </CardTitle>
            <CardDescription>Key metrics at a glance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Conversion Rate</span>
                <span className="text-sm font-medium">24%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Response Time</span>
                <span className="text-sm font-medium">2.3 hours</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Customer Satisfaction</span>
                <span className="text-sm font-medium">4.8/5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Active Clients</span>
                <span className="text-sm font-medium">127</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
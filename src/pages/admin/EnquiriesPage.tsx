import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { collection, onSnapshot, query, orderBy, updateDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Mail, Phone, MessageSquare, Eye, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  status: 'new' | 'contacted' | 'converted' | 'closed';
  createdAt: any;
  source: string;
}

const EnquiriesPage = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'enquiries'), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const enquiriesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Enquiry[];
      
      setEnquiries(enquiriesData);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const updateEnquiryStatus = async (enquiryId: string, status: Enquiry['status']) => {
    try {
      await updateDoc(doc(db, 'enquiries', enquiryId), { status });
      toast.success('Status updated successfully');
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500';
      case 'contacted': return 'bg-yellow-500';
      case 'converted': return 'bg-green-500';
      case 'closed': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Enquiries</h1>
          <p className="text-muted-foreground">
            Manage customer enquiries and follow-ups
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          Total: {enquiries.length}
        </div>
      </div>

      <div className="grid gap-4">
        {enquiries.length > 0 ? (
          enquiries.map((enquiry) => (
            <Card key={enquiry.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5" />
                      {enquiry.name}
                      <Badge className={getStatusColor(enquiry.status)}>
                        {enquiry.status}
                      </Badge>
                    </CardTitle>
                    <CardDescription>
                      {enquiry.createdAt?.toDate?.()?.toLocaleDateString() || 'Date not available'}
                      {enquiry.source && ` • Source: ${enquiry.source}`}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateEnquiryStatus(enquiry.id, 'contacted')}
                      disabled={enquiry.status === 'contacted'}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      Mark Contacted
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateEnquiryStatus(enquiry.id, 'converted')}
                      disabled={enquiry.status === 'converted'}
                    >
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Convert
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a 
                        href={`mailto:${enquiry.email}`}
                        className="text-blue-600 hover:underline"
                      >
                        {enquiry.email}
                      </a>
                    </div>
                    {enquiry.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <a 
                          href={`tel:${enquiry.phone}`}
                          className="text-blue-600 hover:underline"
                        >
                          {enquiry.phone}
                        </a>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Message:</h4>
                    <p className="text-sm text-muted-foreground bg-muted p-3 rounded">
                      {enquiry.message}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateEnquiryStatus(enquiry.id, 'closed')}
                    >
                      Close Enquiry
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="text-center py-8">
              <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-medium mb-2">No enquiries yet</h3>
              <p className="text-sm text-muted-foreground">
                Enquiries from your website will appear here.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default EnquiriesPage;
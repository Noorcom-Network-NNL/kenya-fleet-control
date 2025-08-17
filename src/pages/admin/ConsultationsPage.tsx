import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy, updateDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from 'sonner';
import { Calendar, Clock, User, Building, Phone, Mail, MessageSquare } from 'lucide-react';

interface Consultation {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  fleetSize?: string;
  consultationType?: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
  status: 'new' | 'scheduled' | 'completed' | 'cancelled';
  source: string;
  createdAt: any;
}

const ConsultationsPage: React.FC = () => {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'consultations'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const consultationsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Consultation));
      setConsultations(consultationsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const updateConsultationStatus = async (consultationId: string, status: Consultation['status']) => {
    try {
      await updateDoc(doc(db, 'consultations', consultationId), { status });
      toast.success('Consultation status updated successfully');
    } catch (error) {
      console.error('Error updating consultation status:', error);
      toast.error('Failed to update status');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'scheduled': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Consultations</h1>
        <p className="text-muted-foreground">Manage consultation requests and appointments</p>
      </div>

      {consultations.length === 0 ? (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-muted-foreground">No consultation requests yet.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {consultations.map((consultation) => (
            <Card key={consultation.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">
                  {consultation.name}
                </CardTitle>
                <Badge className={getStatusColor(consultation.status)}>
                  {consultation.status}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{consultation.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{consultation.phone}</span>
                  </div>
                  {consultation.company && (
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{consultation.company}</span>
                    </div>
                  )}
                  {consultation.fleetSize && (
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Fleet: {consultation.fleetSize}</span>
                    </div>
                  )}
                  {consultation.consultationType && (
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Type: {consultation.consultationType}</span>
                    </div>
                  )}
                  {consultation.preferredDate && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Date: {consultation.preferredDate}</span>
                    </div>
                  )}
                  {consultation.preferredTime && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Time: {consultation.preferredTime}</span>
                    </div>
                  )}
                </div>
                
                {consultation.message && (
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-1">Requirements:</p>
                    <p className="text-sm bg-muted p-2 rounded">{consultation.message}</p>
                  </div>
                )}

                <div className="flex gap-2 flex-wrap">
                  {consultation.status === 'new' && (
                    <>
                      <Button
                        size="sm"
                        onClick={() => updateConsultationStatus(consultation.id, 'scheduled')}
                      >
                        Mark as Scheduled
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateConsultationStatus(consultation.id, 'cancelled')}
                      >
                        Cancel
                      </Button>
                    </>
                  )}
                  {consultation.status === 'scheduled' && (
                    <>
                      <Button
                        size="sm"
                        onClick={() => updateConsultationStatus(consultation.id, 'completed')}
                      >
                        Mark as Completed
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateConsultationStatus(consultation.id, 'cancelled')}
                      >
                        Cancel
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ConsultationsPage;
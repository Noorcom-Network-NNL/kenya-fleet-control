import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy, updateDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from 'sonner';
import { DollarSign, Clock, User, Building, Phone, Mail, Package, Target } from 'lucide-react';

interface Sale {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  fleetSize?: string;
  requestType: string;
  productInterest?: string;
  planInterest?: string;
  budget?: string;
  timeframe?: string;
  message?: string;
  status: 'new' | 'contacted' | 'quoted' | 'negotiating' | 'closed-won' | 'closed-lost';
  source: string;
  createdAt: any;
}

const SalesPage: React.FC = () => {
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'sales'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const salesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Sale));
      setSales(salesData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const updateSaleStatus = async (saleId: string, status: Sale['status']) => {
    try {
      await updateDoc(doc(db, 'sales', saleId), { status });
      toast.success('Sale status updated successfully');
    } catch (error) {
      console.error('Error updating sale status:', error);
      toast.error('Failed to update status');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-purple-100 text-purple-800';
      case 'quoted': return 'bg-yellow-100 text-yellow-800';
      case 'negotiating': return 'bg-orange-100 text-orange-800';
      case 'closed-won': return 'bg-green-100 text-green-800';
      case 'closed-lost': return 'bg-red-100 text-red-800';
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
        <h1 className="text-3xl font-bold">Sales Leads</h1>
        <p className="text-muted-foreground">Manage sales enquiries and track opportunities</p>
      </div>

      {sales.length === 0 ? (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-muted-foreground">No sales leads yet.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {sales.map((sale) => (
            <Card key={sale.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">
                  {sale.name}
                  {sale.planInterest && (
                    <span className="text-sm font-normal text-muted-foreground ml-2">
                      - {sale.planInterest}
                    </span>
                  )}
                </CardTitle>
                <Badge className={getStatusColor(sale.status)}>
                  {sale.status}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{sale.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{sale.phone}</span>
                  </div>
                  {sale.company && (
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{sale.company}</span>
                    </div>
                  )}
                  {sale.fleetSize && (
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Fleet: {sale.fleetSize}</span>
                    </div>
                  )}
                  {sale.productInterest && (
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Product: {sale.productInterest}</span>
                    </div>
                  )}
                  {sale.budget && (
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Budget: {sale.budget}</span>
                    </div>
                  )}
                  {sale.timeframe && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Timeframe: {sale.timeframe}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Type: {sale.requestType}</span>
                  </div>
                </div>
                
                {sale.message && (
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-1">Requirements:</p>
                    <p className="text-sm bg-muted p-2 rounded">{sale.message}</p>
                  </div>
                )}

                <div className="flex gap-2 flex-wrap">
                  {sale.status === 'new' && (
                    <>
                      <Button
                        size="sm"
                        onClick={() => updateSaleStatus(sale.id, 'contacted')}
                      >
                        Mark as Contacted
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateSaleStatus(sale.id, 'closed-lost')}
                      >
                        Close as Lost
                      </Button>
                    </>
                  )}
                  {sale.status === 'contacted' && (
                    <>
                      <Button
                        size="sm"
                        onClick={() => updateSaleStatus(sale.id, 'quoted')}
                      >
                        Quote Sent
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateSaleStatus(sale.id, 'closed-lost')}
                      >
                        Close as Lost
                      </Button>
                    </>
                  )}
                  {sale.status === 'quoted' && (
                    <>
                      <Button
                        size="sm"
                        onClick={() => updateSaleStatus(sale.id, 'negotiating')}
                      >
                        In Negotiation
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateSaleStatus(sale.id, 'closed-lost')}
                      >
                        Close as Lost
                      </Button>
                    </>
                  )}
                  {sale.status === 'negotiating' && (
                    <>
                      <Button
                        size="sm"
                        onClick={() => updateSaleStatus(sale.id, 'closed-won')}
                      >
                        Close as Won
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateSaleStatus(sale.id, 'closed-lost')}
                      >
                        Close as Lost
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

export default SalesPage;
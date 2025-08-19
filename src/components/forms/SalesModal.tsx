import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

interface SalesModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
  productName?: string;
  planName?: string;
}

const SalesModal: React.FC<SalesModalProps> = ({ 
  isOpen, 
  onClose, 
  source = 'website',
  productName = '',
  planName = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    fleetSize: '',
    requestType: productName ? 'product-enquiry' : 'pricing-enquiry',
    productInterest: productName,
    planInterest: planName,
    budget: '',
    timeframe: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log('Submitting sales data:', formData);
      console.log('Source:', source);
      console.log('Product name:', productName);
      console.log('Plan name:', planName);
      
      const salesData = {
        ...formData,
        status: 'new',
        source,
        created_at: new Date().toISOString(),
      };
      
      console.log('Final sales data to submit:', salesData);
      
      // TODO: Connect to Supabase through native integration
      // const { error } = await supabase
      //   .from('sales')
      //   .insert([salesData]);
      // 
      // if (error) throw error;

      // Temporary: Just log the data until Supabase is connected
      console.log('Sales enquiry submitted (saved locally):', salesData);
      
      // Store temporarily in localStorage
      const existingData = JSON.parse(localStorage.getItem('sales') || '[]');
      existingData.push({ ...salesData, id: Date.now() });
      localStorage.setItem('sales', JSON.stringify(existingData));

      const message = formData.requestType === 'product-enquiry' 
        ? 'Product enquiry submitted successfully! Our sales team will contact you soon.'
        : 'Quote request submitted successfully! We will prepare a custom quote for you.';
      
      console.log('Sales request submitted successfully');
      toast.success(message);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        fleetSize: '',
        requestType: productName ? 'product-enquiry' : 'pricing-enquiry',
        productInterest: productName,
        planInterest: planName,
        budget: '',
        timeframe: '',
        message: ''
      });
      onClose();
    } catch (error) {
      console.error('Error submitting sales request:', error);
      console.error('Error details:', error.message);
      toast.error('Failed to submit request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getTitle = () => {
    if (productName) return `Enquire about ${productName}`;
    if (planName) return `Get Started with ${planName}`;
    return 'Request Quote';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{getTitle()}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fleetSize">Fleet Size</Label>
              <Select onValueChange={(value) => handleInputChange('fleetSize', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select fleet size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-5">1-5 vehicles</SelectItem>
                  <SelectItem value="6-20">6-20 vehicles</SelectItem>
                  <SelectItem value="21-50">21-50 vehicles</SelectItem>
                  <SelectItem value="51-100">51-100 vehicles</SelectItem>
                  <SelectItem value="100+">100+ vehicles</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="budget">Budget Range</Label>
              <Select onValueChange={(value) => handleInputChange('budget', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-50k">Under KES 50,000</SelectItem>
                  <SelectItem value="50k-100k">KES 50,000 - 100,000</SelectItem>
                  <SelectItem value="100k-500k">KES 100,000 - 500,000</SelectItem>
                  <SelectItem value="500k-1m">KES 500,000 - 1,000,000</SelectItem>
                  <SelectItem value="above-1m">Above KES 1,000,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="timeframe">Implementation Timeframe</Label>
            <Select onValueChange={(value) => handleInputChange('timeframe', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediate">Immediate (Within 1 week)</SelectItem>
                <SelectItem value="1-month">Within 1 month</SelectItem>
                <SelectItem value="3-months">Within 3 months</SelectItem>
                <SelectItem value="6-months">Within 6 months</SelectItem>
                <SelectItem value="planning">Just planning/researching</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Specific Requirements</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Tell us about your specific requirements, current challenges, or questions..."
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" disabled={loading} className="flex-1">
              {loading ? 'Submitting...' : 'Submit Request'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SalesModal;
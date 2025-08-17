import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose, source = 'website' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    fleetSize: '',
    consultationType: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log('Submitting consultation data:', formData);
      console.log('Source:', source);
      
      const consultationData = {
        ...formData,
        status: 'new',
        source,
        created_at: new Date().toISOString(),
      };
      
      console.log('Final consultation data to submit:', consultationData);
      
      const { error } = await supabase
        .from('consultations')
        .insert([consultationData]);
      
      if (error) throw error;

      console.log('Consultation submitted successfully');
      toast.success('Consultation request submitted successfully! We will contact you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        fleetSize: '',
        consultationType: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
      });
      onClose();
    } catch (error) {
      console.error('Error submitting consultation:', error);
      console.error('Error details:', error.message);
      toast.error('Failed to submit consultation request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Schedule a Consultation</DialogTitle>
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
              <Label htmlFor="consultationType">Consultation Type</Label>
              <Select onValueChange={(value) => handleInputChange('consultationType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="product-demo">Product Demo</SelectItem>
                  <SelectItem value="technical">Technical Consultation</SelectItem>
                  <SelectItem value="pricing">Pricing Discussion</SelectItem>
                  <SelectItem value="custom-solution">Custom Solution</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="preferredDate">Preferred Date</Label>
              <Input
                id="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={(e) => handleInputChange('preferredDate', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="preferredTime">Preferred Time</Label>
              <Select onValueChange={(value) => handleInputChange('preferredTime', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9:00-10:00">9:00 AM - 10:00 AM</SelectItem>
                  <SelectItem value="10:00-11:00">10:00 AM - 11:00 AM</SelectItem>
                  <SelectItem value="11:00-12:00">11:00 AM - 12:00 PM</SelectItem>
                  <SelectItem value="14:00-15:00">2:00 PM - 3:00 PM</SelectItem>
                  <SelectItem value="15:00-16:00">3:00 PM - 4:00 PM</SelectItem>
                  <SelectItem value="16:00-17:00">4:00 PM - 5:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="message">Additional Requirements</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Tell us about your specific requirements or questions..."
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" disabled={loading} className="flex-1">
              {loading ? 'Submitting...' : 'Schedule Consultation'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;
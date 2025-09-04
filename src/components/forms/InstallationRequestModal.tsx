import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface InstallationRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

const InstallationRequestModal = ({ isOpen, onClose, selectedPlan = "" }: InstallationRequestModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    vehicleType: '',
    numberOfVehicles: '',
    preferredPlan: selectedPlan,
    installationLocation: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission (in a real app, you'd send to your backend)
    try {
      // Create mailto link with form data
      const subject = `Installation Request - ${formData.preferredPlan || 'GPS Tracker'}`;
      const body = `
Installation Request Details:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Vehicle Type: ${formData.vehicleType}
Number of Vehicles: ${formData.numberOfVehicles}
Preferred Plan: ${formData.preferredPlan}
Installation Location: ${formData.installationLocation}

Additional Message:
${formData.message}

Please contact me to schedule the installation.
      `.trim();

      const mailtoLink = `mailto:sales@noorcomfleet.co.ke?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink, '_blank');

      toast({
        title: "Request Sent",
        description: "Your installation request has been prepared. Please send the email that opened in your email client.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        vehicleType: '',
        numberOfVehicles: '',
        preferredPlan: '',
        installationLocation: '',
        message: ''
      });
      
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to prepare your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  React.useEffect(() => {
    if (selectedPlan && selectedPlan !== formData.preferredPlan) {
      setFormData(prev => ({ ...prev, preferredPlan: selectedPlan }));
    }
  }, [selectedPlan]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Request Installation</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll contact you to schedule your GPS tracker installation.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company">Company (Optional)</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="vehicleType">Vehicle Type *</Label>
            <Select value={formData.vehicleType} onValueChange={(value) => handleInputChange('vehicleType', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select vehicle type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="personal-car">Personal Car</SelectItem>
                <SelectItem value="commercial-vehicle">Commercial Vehicle</SelectItem>
                <SelectItem value="truck">Truck</SelectItem>
                <SelectItem value="motorcycle">Motorcycle</SelectItem>
                <SelectItem value="heavy-machinery">Heavy Machinery</SelectItem>
                <SelectItem value="fleet">Fleet (Multiple Vehicles)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="numberOfVehicles">Number of Vehicles *</Label>
              <Input
                id="numberOfVehicles"
                type="number"
                min="1"
                value={formData.numberOfVehicles}
                onChange={(e) => handleInputChange('numberOfVehicles', e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="preferredPlan">Preferred Plan</Label>
              <Select value={formData.preferredPlan} onValueChange={(value) => handleInputChange('preferredPlan', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Renewable Plan (Without Airtime)">Renewable Plan (Without Airtime) - KES 8,500</SelectItem>
                  <SelectItem value="Renewable Plan (With Airtime)">Renewable Plan (With Airtime) - KES 10,000</SelectItem>
                  <SelectItem value="One-Off Plan (Lifetime)">One-Off Plan (Lifetime) - KES 13,500</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="installationLocation">Installation Location *</Label>
            <Input
              id="installationLocation"
              placeholder="e.g., Nairobi, Mombasa, Kisumu"
              value={formData.installationLocation}
              onChange={(e) => handleInputChange('installationLocation', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Requirements (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Any specific requirements or questions about the installation..."
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Sending..." : "Request Installation"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InstallationRequestModal;
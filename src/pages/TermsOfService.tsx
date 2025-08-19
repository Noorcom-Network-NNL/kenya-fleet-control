import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onRequestDemo={scrollToContact} />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          
          <p className="text-muted-foreground mb-6">
            <strong>Effective Date:</strong> 19 August 2025
          </p>

          <div className="space-y-8 text-foreground">
            <section>
              <p>
                Welcome to Noorcom Fleet Management Systems ("Noorcom Fleet," "we," "our," "us"). These Terms of Service ("Terms") 
                govern your use of our website, mobile applications, and fleet management services (collectively, the "Services").
              </p>
              <p>
                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, 
                please do not use our Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p>
                By registering for, accessing, or using our Services, you acknowledge that you have read, understood, and agree 
                to be bound by these Terms and our Privacy Policy. These Terms constitute a legally binding agreement between 
                you and Noorcom Fleet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>
              <p>
                Noorcom Fleet provides fleet management solutions including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>GPS vehicle tracking and monitoring</li>
                <li>Fleet performance analytics and reporting</li>
                <li>Driver behavior monitoring</li>
                <li>Fuel consumption tracking</li>
                <li>Maintenance scheduling and alerts</li>
                <li>Route optimization tools</li>
                <li>Mobile applications for fleet management</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. User Registration and Account</h2>
              <p>
                To access certain features of our Services, you must register for an account. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and update your account information</li>
                <li>Keep your login credentials secure and confidential</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Be responsible for all activities that occur under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
              <p>You agree not to use our Services to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any applicable laws, regulations, or third-party rights</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Interfere with or disrupt the Services or servers</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use the Services for any fraudulent or illegal activities</li>
                <li>Reverse engineer, modify, or create derivative works of our Services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
              <p>
                If you purchase our paid Services, you agree to pay all applicable fees as described in your service plan. 
                Payment terms include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fees are payable in advance according to your billing cycle</li>
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>We may suspend or terminate Services for non-payment</li>
                <li>Prices may change with 30 days' notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Data and Privacy</h2>
              <p>
                We collect and process your data as described in our Privacy Policy. You retain ownership of your data, 
                and we will not share it with third parties except as outlined in our Privacy Policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Service Availability</h2>
              <p>
                While we strive to provide reliable Services, we do not guarantee uninterrupted or error-free operation. 
                We may temporarily suspend Services for maintenance, updates, or other operational reasons.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
              <p>
                The Services and all related content, features, and functionality are owned by Noorcom Fleet and are 
                protected by intellectual property laws. You may not reproduce, distribute, or create derivative works 
                without our written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Noorcom Fleet shall not be liable for any indirect, incidental, 
                special, or consequential damages arising from your use of the Services, including but not limited to 
                loss of profits, data, or business opportunities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
              <p>
                Either party may terminate this agreement at any time. We may suspend or terminate your access to the 
                Services immediately if you violate these Terms. Upon termination, your right to use the Services will 
                cease immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
              <p>
                We may modify these Terms at any time by posting updated Terms on our website. Your continued use of 
                the Services after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
              <p>
                These Terms are governed by the laws of Kenya. Any disputes arising from these Terms or the Services 
                will be subject to the exclusive jurisdiction of the courts of Kenya.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <div className="bg-muted p-6 rounded-lg mt-4">
                <p><strong>Noorcom Fleet Management Systems</strong></p>
                <p>Chuka Elimu Plaza, 1st Floor, Loita Street, Nairobi, Kenya</p>
                <p>
                  Email:{' '}
                  <a href="mailto:info@noorcomfleet.co.ke" className="text-primary hover:underline">
                    info@noorcomfleet.co.ke
                  </a>
                </p>
                <p>
                  Phone:{' '}
                  <a href="tel:+254722723352" className="text-primary hover:underline">
                    +254 722 723 352
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
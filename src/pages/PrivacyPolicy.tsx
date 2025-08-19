import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onRequestDemo={scrollToContact} />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <p className="text-muted-foreground mb-6">
            <strong>Effective Date:</strong> 19 August 2025
          </p>

          <div className="space-y-8 text-foreground">
            <section>
              <p>
                Noorcom Fleet ("we," "our," "us") values your privacy and is committed to protecting your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
                website, mobile applications, and services (collectively, the "Services").
              </p>
              <p>
                By using Noorcom Fleet, you agree to the terms of this Privacy Policy. If you do not agree, please do not use our Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, phone number, email address, identification details, and company information provided during registration or use of our Services.</li>
                <li><strong>Fleet & Vehicle Data:</strong> GPS location, vehicle status, trip history, fuel consumption, and driver activity data.</li>
                <li><strong>Technical Data:</strong> Device information, IP address, browser type, operating system, and usage logs.</li>
                <li><strong>Payment Information:</strong> Billing details, mobile money transactions, or other payment-related information (processed securely through third-party providers).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p>We use the information collected to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our fleet management services.</li>
                <li>Track, monitor, and optimize fleet performance.</li>
                <li>Communicate with you regarding updates, security alerts, or customer support.</li>
                <li>Process payments and manage billing.</li>
                <li>Comply with legal and regulatory obligations.</li>
                <li>Detect and prevent fraud, misuse, or unauthorized access.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Sharing of Information</h2>
              <p>We do not sell or rent your personal data to third parties. However, we may share information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> Trusted vendors who help us operate and improve our Services (e.g., cloud hosting, payment processors).</li>
                <li><strong>Legal Compliance:</strong> Authorities or regulators when required by law or to protect legal rights.</li>
                <li><strong>Business Transfers:</strong> In case of a merger, acquisition, or asset transfer.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your data from unauthorized access, alteration, 
                disclosure, or destruction. However, no system is completely secure, and we cannot guarantee absolute protection.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
              <p>
                We retain your personal information only as long as necessary for the purposes stated in this Privacy Policy, 
                unless a longer retention period is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you.</li>
                <li>Request correction or deletion of your personal data.</li>
                <li>Object to or restrict certain processing activities.</li>
                <li>Withdraw consent where processing is based on consent.</li>
              </ul>
              <p>
                To exercise your rights, please contact us at{' '}
                <a href="mailto:info@noorcomfleet.co.ke" className="text-primary hover:underline">
                  info@noorcomfleet.co.ke
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Cookies and Tracking Technologies</h2>
              <p>
                Our website and applications may use cookies and similar technologies to improve user experience, 
                analyze traffic, and customize content. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Third-Party Links</h2>
              <p>
                Our Services may contain links to third-party websites. We are not responsible for the privacy practices 
                or content of such external sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Updates to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with a 
                revised "Effective Date." Continued use of our Services after updates indicates acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or our practices, please contact us:</p>
              <div className="bg-muted p-6 rounded-lg mt-4">
                <p><strong>Noorcom Fleet</strong></p>
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

export default PrivacyPolicy;
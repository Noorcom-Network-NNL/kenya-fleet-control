
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "James Mwangi",
      company: "Kenya Medical Supplies Authority",
      text: "NFMS has transformed our operations. We've reduced fuel costs by 23% and improved our delivery times significantly.",
      rating: 5
    },
    {
      name: "Sarah Kiprotich",
      company: "Isiolo Technical Training Institute",
      text: "The system is user-friendly and the support team is excellent. Our drivers love the mobile app interface.",
      rating: 5
    },
    {
      name: "Peter Kamau",
      company: "Metro Construction Ltd",
      text: "Best investment we've made. The maintenance alerts alone have saved us thousands in repair costs.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Kenyan Companies
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            See what our customers say about their experience with NFMS
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

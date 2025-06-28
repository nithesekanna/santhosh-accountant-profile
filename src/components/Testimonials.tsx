
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Senior Partner",
      company: "PKF Sridhar & Santhanam LLP",
      content: "Santhosh demonstrates exceptional attention to detail and professional maturity beyond his years. His analytical skills and commitment to excellence make him a valuable team member. He consistently delivers high-quality work and shows great promise in the field of auditing and taxation.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Prof. Meena Srinivasan",
      position: "Faculty Advisor",
      company: "SASTRA Deemed University",
      content: "Throughout his academic journey, Santhosh exhibited outstanding dedication and intellectual curiosity. His strong foundation in accounting principles and practical application of theoretical concepts set him apart. He was always proactive in seeking challenging assignments and mentoring fellow students.",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "Arjun Patel",
      position: "Managing Director",
      company: "TechStart Solutions Pvt. Ltd.",
      content: "As a startup, we needed someone who could understand our unique challenges and provide practical financial guidance. Santhosh's fresh perspective combined with solid technical knowledge helped us establish robust financial processes from the ground up. His responsiveness and clear communication are commendable.",
      rating: 5,
      avatar: "AP"
    },
    {
      name: "Mrs. Lakshmi Venkatesh",
      position: "Finance Manager",
      company: "Venkatesh Textiles",
      content: "Working with Santhosh during our GST compliance review was a pleasant experience. He demonstrated thorough understanding of GST regulations and helped us optimize our processes significantly. His professional approach and ability to explain complex concepts in simple terms impressed our entire team.",
      rating: 5,
      avatar: "LV"
    },
    {
      name: "CA Suresh Nair",
      position: "Senior Associate",
      company: "Financial Advisory Services",
      content: "I've had the opportunity to collaborate with Santhosh on several audit engagements. His methodical approach to work and keen eye for identifying potential issues demonstrate his strong audit acumen. He maintains excellent working relationships with clients and colleagues alike.",
      rating: 5,
      avatar: "SN"
    },
    {
      name: "Priya Sharma",
      position: "Entrepreneur",
      company: "Sharma Consulting",
      content: "As a woman entrepreneur, I appreciated Santhosh's patient and supportive approach to understanding my business needs. His insights on tax planning and financial structuring have been invaluable for my business growth. I highly recommend his services for any financial advisory requirements.",
      rating: 5,
      avatar: "PS"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building trust through exceptional service and professional excellence. 
            Here's what colleagues, mentors, and clients say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-blue-200 group-hover:text-blue-300 transition-colors" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Audit Engagements</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Tax Returns Filed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">GST Registrations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

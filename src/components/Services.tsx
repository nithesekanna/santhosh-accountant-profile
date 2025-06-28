
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FileCheck, 
  Calculator, 
  BookOpen, 
  Shield, 
  TrendingUp, 
  Users 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileCheck,
      title: "Audit & Assurance",
      description: "Comprehensive statutory audits, internal audits, and assurance services ensuring compliance with regulatory requirements and best practices.",
      features: ["Statutory Audits", "Internal Audits", "Compliance Reviews", "Risk Assessment"]
    },
    {
      icon: Calculator,
      title: "Tax Compliance & Planning",
      description: "Strategic tax planning and comprehensive compliance services to optimize tax efficiency while ensuring full regulatory adherence.",
      features: ["Income Tax Planning", "Tax Return Filing", "Tax Optimization", "Appeal Assistance"]
    },
    {
      icon: BookOpen,
      title: "Bookkeeping & Financial Reporting",
      description: "Accurate bookkeeping services and detailed financial reporting to provide clear insights into your business performance.",
      features: ["Monthly Bookkeeping", "Financial Statements", "Management Reports", "Cash Flow Analysis"]
    },
    {
      icon: Shield,
      title: "GST Consultation",
      description: "Expert GST advisory services including registration, compliance, return filing, and optimization strategies for businesses.",
      features: ["GST Registration", "Return Filing", "Compliance Audit", "Refund Processing"]
    },
    {
      icon: TrendingUp,
      title: "Business Advisory",
      description: "Strategic business advisory services to help startups and established businesses make informed financial decisions.",
      features: ["Business Planning", "Financial Analysis", "Growth Strategy", "Investment Advisory"]
    },
    {
      icon: Users,
      title: "Specialized Services",
      description: "Tailored financial services for specific client segments including startups, SMEs, and NRI clients.",
      features: ["Startup Advisory", "SME Solutions", "NRI Services", "Due Diligence"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial and accounting solutions tailored to meet your business needs 
            with precision, expertise, and unwavering commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help streamline your financial processes and 
              support your business growth with expert accounting and advisory services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Schedule a Consultation
              </Button>
              <Button variant="outline" size="lg">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

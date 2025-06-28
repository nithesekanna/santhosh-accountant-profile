
import { Button } from '@/components/ui/button';
import { FileText, Linkedin, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center gradient-bg text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Santhosh Chakkarapani
              </h1>
              <div className="text-xl md:text-2xl text-blue-100 mb-4">
                CA Finalist & Chartered Accountant
              </div>
              <p className="text-lg text-blue-50 mb-8 max-w-2xl">
                Specializing in auditing, taxation, compliance & financial advisory.
                Delivering precise financial solutions with integrity and expertise.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 flex items-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Schedule Consultation</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 flex items-center space-x-2"
              >
                <FileText className="h-5 w-5" />
                <span>Download CV</span>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">CA</div>
                <div className="text-blue-100 text-sm">Finalist</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">PKF</div>
                <div className="text-blue-100 text-sm">Trainee</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">B.Com</div>
                <div className="text-blue-100 text-sm">SASTRA</div>
              </div>
            </div>
          </div>

          {/* Professional Photo Placeholder */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-96 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-bold">SC</span>
                  </div>
                  <p className="text-sm opacity-80">Professional Photo</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Linkedin className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <FileText className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

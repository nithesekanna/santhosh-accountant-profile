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
                CA Finalist & B.Com Graduate
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
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2"
                asChild
              >
                <a href="/lovable-uploads/resume.pdf" download>
                  <FileText className="h-5 w-5" />
                  <span>Download CV</span>
                </a>
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
          <div className="animate-slide-in-right flex flex-col items-center justify-center">
            <img
              src="/lovable-uploads/professional-photo.png"
              alt="Professional Photo"
              className="w-72 rounded-2xl object-cover mb-4 border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105"
              style={{ height: '384px' }}
            />
            {/* Floating elements */}
            {/* <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <FileText className="h-6 w-6 text-white" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

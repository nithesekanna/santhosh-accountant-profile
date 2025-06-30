import { Separator } from '@/components/ui/separator';
import { FileText, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">Santhosh Chakkarapani</h3>
              <p className="text-gray-300 mb-4">CA Finalist & B.Com Graduate</p>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Delivering excellence in auditing, taxation, and financial advisory services 
                with integrity, precision, and unwavering commitment to client success.
              </p>
            </div>
            
            {/* Quick Contact */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>santhoshchakarapani@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Audit & Assurance</li>
              <li>Tax Compliance</li>
              <li>GST Consultation</li>
              <li>Financial Reporting</li>
              <li>Business Advisory</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Santhosh Chakkarapani. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="/lovable-uploads/resume.pdf"
              download
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <FileText className="h-4 w-4" />
              <span className="text-sm">Download CV</span>
            </a>
            <a
              href="https://www.linkedin.com/in/santhosh-chakkarapani-a616071b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Professional Disclaimer */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-xs text-gray-500 text-center">
            Professional services are subject to applicable regulations and compliance requirements. 
            Please consult for specific terms and conditions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

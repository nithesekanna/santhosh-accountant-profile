import { useState } from 'react';
import { Menu, X, FileText, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-blue-900">
              Santhosh Chakkarapani
            </h1>
            <p className="text-xs text-gray-600">CA Finalist</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center space-x-2"
              asChild
            >
              <a href="/lovable-uploads/resume.pdf" download>
                <FileText className="h-4 w-4" />
                <span>Download CV</span>
              </a>
            </Button>
            <Button
              size="sm"
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
              asChild
            >
              <a href="https://www.linkedin.com/in/santhosh-chakkarapani-a616071b3/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Contact
              </button>
              <div className="flex space-x-2 px-3 py-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <FileText className="h-4 w-4 mr-2" />
                  CV
                </Button>
                <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="https://www.linkedin.com/in/santhosh-chakkarapani-a616071b3/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Linkedin, 
  Send,
  Clock,
  Award
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "santhoshchakarapani@gmail.com",
      action: "mailto:santhoshchakarapani@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 98765 43210",
      action: "tel:+919876543210"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Chennai, Tamil Nadu, India",
      action: null
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      content: "Connect with me",
      action: "https://www.linkedin.com/in/santhosh-chakkarapani-a616071b3/"
    }
  ];

  const services = [
    "Audit & Assurance",
    "Tax Planning & Compliance",
    "GST Consultation",
    "Bookkeeping Services",
    "Business Advisory",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you need expert advice on tax planning, audit, compliance, or business strategy, I'm here to help. Reach out to discuss your requirements or schedule a consultation.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="w-full max-w-lg">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-white" />
                  <a href="mailto:santhoshchakarapani@gmail.com" className="text-lg font-medium hover:underline">santhoshchakarapani@gmail.com</a>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-white" />
                  <a href="tel:+919876543210" className="text-lg font-medium hover:underline">+91 98765 43210</a>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="h-6 w-6 text-white" />
                  <a href="https://www.linkedin.com/in/santhosh-chakkarapani-a616071b3/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:underline">LinkedIn Profile</a>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-white" />
                  <span className="text-lg font-medium">Chennai, Tamil Nadu, India</span>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:santhoshchakarapani@gmail.com" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center transition-colors">
                  <Mail className="h-5 w-5 mr-2" /> Email Me
                </a>
                <a href="https://www.linkedin.com/in/santhosh-chakkarapani-a616071b3/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border border-white text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center hover:bg-white hover:text-blue-700 transition-colors">
                  <Linkedin className="h-5 w-5 mr-2" /> Connect on LinkedIn
                </a>
              </div>
              <div className="mt-6 text-blue-100 text-center text-sm opacity-80">
                <Clock className="inline-block h-4 w-4 mr-1 align-text-bottom" />
                Typically responds within 24 hours on business days
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

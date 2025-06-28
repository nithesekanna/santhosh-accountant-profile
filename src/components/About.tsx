
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Building, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about delivering excellence in financial services with a commitment 
            to integrity, precision, and client satisfaction.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              My Journey in Accounting & Finance
            </h3>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                As a CA Finalist with a strong academic foundation from SASTRA Deemed University, 
                I bring a unique blend of theoretical knowledge and practical experience to every 
                client engagement. My passion for accounting stems from its power to drive business 
                decisions and create lasting value.
              </p>
              <p className="text-gray-700 mb-4">
                Currently serving as an Article Trainee at PKF Sridhar & Santhanam LLP, one of 
                India's leading audit firms, I've gained invaluable exposure to complex audit 
                engagements, regulatory compliance, and strategic financial advisory across 
                diverse industries.
              </p>
              <p className="text-gray-700 mb-6">
                My approach centers on understanding each client's unique challenges and delivering 
                tailored solutions that not only meet compliance requirements but also contribute 
                to their long-term success. I believe in building relationships based on trust, 
                transparency, and exceptional service quality.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Precision</h4>
                  <p className="text-sm text-gray-600">Meticulous attention to detail in every engagement</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Award className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Integrity</h4>
                  <p className="text-sm text-gray-600">Unwavering commitment to ethical practices</p>
                </div>
              </div>
            </div>
          </div>

          {/* Qualifications & Experience */}
          <div className="animate-slide-in-right">
            <div className="space-y-6">
              {/* Education */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                      <div className="space-y-2">
                        <div>
                          <p className="font-medium text-gray-800">CA Finalist</p>
                          <p className="text-sm text-gray-600">Institute of Chartered Accountants of India</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Bachelor of Commerce</p>
                          <p className="text-sm text-gray-600">SASTRA Deemed University</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Current Role */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Building className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">Current Position</h4>
                      <div>
                        <p className="font-medium text-gray-800">Article Trainee</p>
                        <p className="text-sm text-gray-600">PKF Sridhar & Santhanam LLP</p>
                        <p className="text-sm text-gray-500 mt-2">
                          Engaged in statutory audits, tax compliance, and financial advisory 
                          services for diverse clientele including corporates and SMEs.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills Summary */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Core Competencies</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">Statutory Auditing</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">Tax Planning</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">GST Compliance</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">Financial Reporting</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">Risk Assessment</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">Client Advisory</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

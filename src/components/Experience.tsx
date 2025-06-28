
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Article Trainee",
      company: "PKF Sridhar & Santhanam LLP",
      location: "Chennai, India",
      period: "2023 - Present",
      type: "Full-time",
      description: "Gaining comprehensive experience in statutory audits, tax compliance, and financial advisory services at one of India's leading chartered accountancy firms.",
      achievements: [
        "Participated in statutory audits for 25+ companies across manufacturing, IT, and service industries",
        "Assisted in preparation of consolidated financial statements for multinational clients",
        "Conducted GST compliance reviews and assisted clients with return filing processes",
        "Supported senior partners in client relationship management and business development",
        "Gained expertise in various audit software and financial reporting tools"
      ],
      skills: ["Statutory Auditing", "GST Compliance", "Financial Reporting", "Client Coordination", "Risk Assessment"]
    },
    {
      title: "Finance Intern",
      company: "Regional Accounting Firm",
      location: "Tamil Nadu, India",
      period: "2022 - 2023",
      type: "Internship",
      description: "Completed practical training in bookkeeping, tax preparation, and client advisory services for small and medium enterprises.",
      achievements: [
        "Managed bookkeeping for 15+ SME clients with accuracy and timeliness",
        "Assisted in preparation of income tax returns for individuals and businesses",
        "Gained hands-on experience in tally accounting software and GST portal operations",
        "Supported month-end closing processes and financial statement preparation",
        "Developed strong client communication and problem-solving skills"
      ],
      skills: ["Bookkeeping", "Tax Preparation", "Tally Software", "Client Service", "Financial Analysis"]
    }
  ];

  const education = [
    {
      degree: "Chartered Accountancy (CA Finalist)",
      institution: "Institute of Chartered Accountants of India (ICAI)",
      period: "2021 - Present",
      description: "Currently in final stage of CA qualification with strong performance in intermediate examinations."
    },
    {
      degree: "Bachelor of Commerce (B.Com)",
      institution: "SASTRA Deemed University",
      period: "2018 - 2021",
      description: "Graduated with distinction, specializing in accounting, finance, and taxation with consistent academic excellence."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building expertise through hands-on experience in auditing, taxation, and financial advisory 
            services across diverse industries and client segments.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
            <Building className="h-6 w-6 text-blue-600 mr-3" />
            Professional Experience
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{exp.title}</h4>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-2">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="mb-4">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Skills Developed:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
            <Calendar className="h-6 w-6 text-blue-600 mr-3" />
            Education & Qualifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{edu.degree}</h4>
                  <p className="text-blue-600 font-medium mb-2">{edu.institution}</p>
                  <p className="text-gray-600 text-sm mb-3">{edu.period}</p>
                  <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

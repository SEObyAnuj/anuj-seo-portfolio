import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, FileText, Globe, Users, BarChart2, Sliders, Activity, Star, Target, Layers, Database } from 'lucide-react';
import { Award } from 'lucide-react';
import LayoutComponent from '@/components/Layout';

const Skills = () => {
  useEffect(() => {
    document.title = 'Anuj - SEO Specialist | Skills & Tools';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Explore Anuj\'s SEO skills and the professional tools he uses to deliver exceptional search engine optimization results for his clients.');
    }
  }, []);

  // Skills data with icons and descriptions
  const skills = [
    {
      name: "Technical SEO",
      icon: <Database size={40} className="text-seo-accent mb-3" />,
      description: "Site architecture, crawlability, indexation, site speed optimization, schema markup, core web vitals, and mobile optimization."
    },
    {
      name: "Keyword Research",
      icon: <Search size={40} className="text-seo-accent mb-3" />,
      description: "Comprehensive keyword discovery, search intent analysis, competitive gap analysis, and opportunity identification."
    },
    {
      name: "On-Page SEO",
      icon: <FileText size={40} className="text-seo-accent mb-3" />,
      description: "Content optimization, meta tags, internal linking, semantic SEO, content structure, and HTML improvements."
    },
    {
      name: "Off-Page SEO",
      icon: <Globe size={40} className="text-seo-accent mb-3" />,
      description: "Quality link building, digital PR, brand mentions, guest posting, and social signals."
    },
    {
      name: "Local SEO",
      icon: <Target size={40} className="text-seo-accent mb-3" />,
      description: "Google Business Profile optimization, local citations, NAP consistency, local link building, and local content strategy."
    },
    {
      name: "E-commerce SEO",
      icon: <Layers size={40} className="text-seo-accent mb-3" />,
      description: "Product page optimization, category structure, product schema, faceted navigation, and shopping feed optimization."
    },
    {
      name: "Content Strategy",
      icon: <FileText size={40} className="text-seo-accent mb-3" />,
      description: "Content gap analysis, topic clusters, content calendars, SEO copywriting, and content optimization."
    },
    {
      name: "Competitive Analysis",
      icon: <Users size={40} className="text-seo-accent mb-3" />,
      description: "Identifying competitor strengths and weaknesses, content gap analysis, and opportunity spotting."
    },
    {
      name: "Analytics & Reporting",
      icon: <BarChart2 size={40} className="text-seo-accent mb-3" />,
      description: "Setting up tracking, data analysis, ROI calculation, custom reporting, and insights generation."
    },
    {
      name: "SEO Auditing",
      icon: <Sliders size={40} className="text-seo-accent mb-3" />,
      description: "Comprehensive site audits, identifying issues and opportunities, and prioritizing recommendations."
    },
    {
      name: "Core Web Vitals",
      icon: <Activity size={40} className="text-seo-accent mb-3" />,
      description: "LCP, FID, and CLS optimization, page speed improvements, and user experience enhancements."
    },
    {
      name: "Strategy Development",
      icon: <Star size={40} className="text-seo-accent mb-3" />,
      description: "Developing customized SEO roadmaps aligned with business goals and market opportunities."
    }
  ];

  // Tools data
  const tools = [
    {
      name: "Google Search Console",
      description: "For monitoring indexation, search performance, and identifying technical issues."
    },
    {
      name: "Google Analytics 4",
      description: "For tracking user behavior, conversion tracking, and measuring SEO performance."
    },
    {
      name: "Ahrefs",
      description: "For comprehensive backlink analysis, keyword research, and competitor insights."
    },
    {
      name: "SEMrush",
      description: "For keyword tracking, site audits, and position monitoring."
    },
    {
      name: "Screaming Frog SEO Spider",
      description: "For technical site audits, identifying errors, and analyzing site structure."
    },
    {
      name: "SurferSEO",
      description: "For on-page optimization, content scoring, and SERP analysis."
    },
    {
      name: "PageSpeed Insights",
      description: "For analyzing and optimizing site speed and core web vitals."
    },
    {
      name: "Schema App",
      description: "For implementing structured data markup across websites."
    },
    {
      name: "Moz Pro",
      description: "For keyword research, link building, and site audits."
    },
    {
      name: "BrightLocal",
      description: "For local SEO citation building, rank tracking, and audit reports."
    }
  ];

  return (
    <LayoutComponent>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Skills & Tools</h1>
            <p className="text-xl text-gray-600">
              My comprehensive SEO toolkit and expertise that drives results for clients
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My SEO Skills</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The specialized skills I bring to every SEO project
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex justify-center">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">SEO Tools I Use</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional tools I leverage to deliver exceptional SEO results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex items-start hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mr-4 p-3 bg-blue-50 rounded-full">
                  <Search size={24} className="text-seo-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{tool.name}</h3>
                  <p className="text-gray-600">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Process Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My SEO Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The systematic approach I follow for every SEO project
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                number: "01",
                title: "Discovery & Audit",
                description: "I start by understanding your business goals and conducting a comprehensive audit of your website's current SEO performance to identify opportunities and issues."
              },
              {
                number: "02",
                title: "Strategy Development",
                description: "Based on the audit findings, I develop a tailored SEO strategy aligned with your business objectives, focusing on the areas with the highest potential impact."
              },
              {
                number: "03",
                title: "Implementation",
                description: "I execute the strategy by implementing technical fixes, optimizing content, building quality backlinks, and enhancing the overall search presence."
              },
              {
                number: "04",
                title: "Monitoring & Reporting",
                description: "I continuously track performance using analytics tools, provide regular reports, and make data-driven adjustments to improve results."
              },
              {
                number: "05",
                title: "Optimization & Growth",
                description: "SEO is ongoing. I continuously refine the strategy, identify new opportunities, and adapt to search engine algorithm updates to ensure sustainable growth."
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="flex mb-10 last:mb-0 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mr-6 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-seo-accent flex items-center justify-center text-white text-xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Level Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Expertise Levels</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Areas where I excel and continue to develop my skills
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { skill: "Technical SEO", level: 90 },
              { skill: "On-Page Optimization", level: 95 },
              { skill: "Keyword Research", level: 90 },
              { skill: "Content Strategy", level: 85 },
              { skill: "Local SEO", level: 90 },
              { skill: "Link Building", level: 80 }
            ].map((item, index) => (
              <div 
                key={index} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-seo-accent font-medium">{item.level}%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-seo-accent rounded-full"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional qualifications that validate my SEO expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Google Analytics Individual Qualification",
                organization: "Google",
                date: "2023"
              },
              {
                name: "Google Search Console Fundamentals",
                organization: "Semrush Academy",
                date: "2023"
              },
              {
                name: "Technical SEO Certification",
                organization: "Moz Academy",
                date: "2022"
              },
              {
                name: "Content Marketing Certification",
                organization: "HubSpot Academy",
                date: "2022"
              }
            ].map((cert, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 bg-blue-50 rounded-full inline-block mb-4">
                  <Award size={24} className="text-seo-accent" />
                </div>
                <h3 className="text-xl font-bold mb-1">{cert.name}</h3>
                <p className="text-gray-600">{cert.organization} • {cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-seo-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Put My Skills to Work for Your Business
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Ready to leverage my expertise and tools to improve your online presence? Let's start the conversation.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </LayoutComponent>
  );
};

export default Skills;

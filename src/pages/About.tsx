
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Target, Book, Calendar } from 'lucide-react';
import Layout from '@/components/Layout';

const About = () => {
  useEffect(() => {
    document.title = 'Anuj - SEO Specialist | About';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Learn about Anuj\'s journey, expertise, and approach to SEO. Skilled in technical, on-page, and off-page optimization with a focus on delivering measurable results.');
    }
  }, []);

  // Experience data
  const experience = [
    {
      title: "SEO Specialist",
      company: "Digital Marketing Agency",
      period: "Jan 2023 - Present",
      description: [
        "Managed SEO campaigns for 10+ clients across various industries",
        "Conducted comprehensive SEO audits and implemented optimization strategies",
        "Increased organic traffic by an average of 85% for client websites",
        "Developed and executed content strategies aligned with SEO goals"
      ]
    },
    {
      title: "SEO Intern",
      company: "Tech Startup",
      period: "Jun 2022 - Dec 2022",
      description: [
        "Assisted in keyword research and competitive analysis",
        "Learned technical SEO fundamentals and best practices",
        "Helped optimize on-page elements for improved search visibility",
        "Analyzed website performance using Google Analytics and Search Console"
      ]
    }
  ];

  // Skills and specialties
  const specialties = [
    "Technical SEO & Site Structure Optimization",
    "Local SEO & Google Business Profile Optimization",
    "E-commerce SEO Strategy",
    "Comprehensive SEO Audits",
    "Keyword Research & Content Strategy",
    "Link Building & Digital PR",
    "Analytics Implementation & Analysis",
    "Mobile Optimization & Core Web Vitals"
  ];

  // Tools
  const tools = [
    "Google Search Console (GSC)",
    "Google Analytics 4 (GA4)",
    "Ahrefs",
    "SEMrush",
    "Screaming Frog SEO Spider",
    "SurferSEO",
    "Moz Pro",
    "PageSpeed Insights",
    "Schema Markup Generator",
    "Google Keyword Planner"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-gray-600">
              A passionate SEO specialist on a mission to help businesses grow their online presence through data-driven strategies.
            </p>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-2/5 animate-fade-in">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Anuj - SEO Specialist" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5 animate-fade-in animate-delay-200">
              <h2 className="text-3xl font-bold mb-6">My SEO Journey</h2>
              <p className="text-gray-700 mb-4">
                Hi, I'm Anuj, a 25-year-old SEO specialist based in India with over a year of professional experience in the digital marketing industry. My journey in SEO began with a curiosity about how search engines work and why some websites rank higher than others.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a hobby quickly evolved into a passion as I delved deeper into the fascinating world of search engine optimization. I've since dedicated myself to mastering all aspects of SEO, from technical optimization to content strategy and link building.
              </p>
              <p className="text-gray-700 mb-6">
                I believe that effective SEO is not just about following a set of rules but understanding the unique needs of each business and tailoring strategies accordingly. My approach combines technical expertise with creativity to develop sustainable SEO solutions that drive real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary flex items-center justify-center">
                  Get in Touch
                </Link>
                <Link to="/case-studies" className="btn-outline flex items-center justify-center">
                  View My Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Experience</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My professional journey in the world of SEO
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {experience.map((job, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row mb-12 last:mb-0 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-seo-dark">{job.title}</h3>
                    <p className="text-seo-accent font-medium">{job.company}</p>
                    <div className="flex items-center mt-2 text-gray-500">
                      <Calendar size={16} className="mr-2" />
                      <span>{job.period}</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3 md:pl-8">
                  <ul className="space-y-3">
                    {job.description.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle size={20} className="text-seo-accent mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My SEO Specialties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Areas where I can help you excel in search engine optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {specialties.map((specialty, index) => (
              <div 
                key={index}
                className="bg-white p-5 rounded-lg shadow-md flex items-center hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mr-4 flex-shrink-0">
                  <Award size={24} className="text-seo-accent" />
                </div>
                <p className="font-medium">{specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tools I Use</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The SEO tools and software I'm proficient with
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Target size={24} className="text-seo-accent mx-auto mb-2" />
                <p className="font-medium text-sm">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border-l-4 border-seo-accent animate-fade-in">
            <div className="flex items-start">
              <div className="mr-6 flex-shrink-0">
                <Book size={40} className="text-seo-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">My SEO Philosophy</h2>
                <p className="text-gray-700 mb-3">
                  I believe in taking a holistic approach to SEO that focuses on long-term, sustainable results rather than quick fixes. My strategies are built on three core principles:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-seo-accent mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><span className="font-medium">Data-Driven Decision Making:</span> I rely on analytics and hard data to guide strategy development and measure results.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-seo-accent mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><span className="font-medium">User-First Approach:</span> I prioritize the user experience, knowing that what's good for users is ultimately good for SEO.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-seo-accent mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><span className="font-medium">Continuous Learning:</span> I stay updated with the latest algorithm changes and industry trends to keep your strategy ahead of the curve.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-seo-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Ready to improve your website's search performance? Let's discuss how I can help you achieve your SEO goals.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

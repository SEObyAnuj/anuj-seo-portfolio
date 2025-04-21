import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowRight, Download, Search, BarChart, FileText, Users, Code, Globe, Database, LayoutIcon } from 'lucide-react';
import Layout from '@/components/Layout';

const Index = () => {
  useEffect(() => {
    document.title = 'Anuj & Rajat | SEO & Web Development Experts';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Anuj and Rajat are experienced SEO and Web Development specialists based in India, helping businesses improve their online presence with proven strategies.');
    }
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Web + SEO Experts Who <span className="text-seo-accent">Build</span> and <span className="text-seo-accent">Rank</span> Your Online Presence
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We combine technical expertise with SEO knowledge to create websites that look great, function perfectly, and rank high on search engines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Anuj's Profile */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-6 animate-fade-in animate-delay-200">
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 mb-6">
                  <img
                    src="/lovable-uploads/624e90e1-83ad-47e1-90a5-12db9a20acdb.png"
                    alt="Anuj - SEO Specialist"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2">Anuj</h2>
                <p className="text-seo-accent font-semibold mb-4">SEO Specialist</p>
                <p className="text-center text-gray-600 mb-6">
                  A seasoned SEO expert with expertise in technical SEO, content strategy, and improving search visibility.
                </p>
                <Link to="/about#anuj" className="btn-primary w-full flex items-center justify-center">
                  Learn More
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Rajat's Profile */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-6 animate-fade-in animate-delay-400">
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                    alt="Rajat Gupta - Web Developer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2">Rajat Gupta</h2>
                <p className="text-seo-accent font-semibold mb-4">Web Developer</p>
                <p className="text-center text-gray-600 mb-6">
                  A skilled web developer specialized in creating responsive, feature-rich websites with both frontend and backend expertise.
                </p>
                <Link to="/about#rajat" className="btn-primary w-full flex items-center justify-center">
                  Learn More
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="btn-primary inline-flex items-center px-8 py-4 text-lg">
              Work With Us
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive web development and SEO solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code className="h-10 w-10 text-seo-accent" />,
                title: "Web Development",
                description: "Custom responsive websites, e-commerce solutions, and web applications built using modern technologies."
              },
              {
                icon: <Search className="h-10 w-10 text-seo-accent" />,
                title: "SEO Services",
                description: "Technical SEO audits, on-page optimization, content strategy, and off-page SEO to boost your rankings."
              },
              {
                icon: <LayoutIcon className="h-10 w-10 text-seo-accent" />,
                title: "Custom Dashboards",
                description: "User-friendly admin panels and dashboards built with AdminLTE to efficiently manage your business."
              },
              {
                icon: <Database className="h-10 w-10 text-seo-accent" />,
                title: "API Development",
                description: "Robust REST APIs for seamless integration with third-party services and improved functionality."
              }
            ].map((service, index) => (
              <div 
                key={service.title}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a look at our recent work and success stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
                title: "E-commerce Traffic Growth",
                description: "Increased organic traffic by 230% in 6 months for an e-commerce business through SEO optimization.",
                tags: ["SEO", "Content Strategy"],
                link: "/case-studies/ecommerce"
              },
              {
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
                title: "Apartment Booking Website",
                description: "Developed a complete booking system with payment integration for a real estate company.",
                tags: ["PHP", "Laravel", "MySQL"],
                link: "/projects/apartment-booking"
              },
              {
                image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
                title: "Clothing Store Platform",
                description: "E-commerce website with product management, secure checkout, and inventory tracking.",
                tags: ["JavaScript", "PHP", "Razorpay"],
                link: "/projects/clothing-store"
              }
            ].map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={project.link}
                    className="inline-flex items-center text-seo-accent font-medium hover:underline"
                  >
                    View Project
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="btn-outline">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Tools</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our combined expertise covers both technical development and strategic marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Anuj's Skills */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-6 text-center">SEO Expertise</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {[
                  { name: "On-page SEO", icon: <FileText className="h-8 w-8 text-seo-accent mb-2" /> },
                  { name: "Technical SEO", icon: <Search className="h-8 w-8 text-seo-accent mb-2" /> },
                  { name: "Content Strategy", icon: <FileText className="h-8 w-8 text-seo-accent mb-2" /> },
                  { name: "Keyword Research", icon: <Search className="h-8 w-8 text-seo-accent mb-2" /> },
                  { name: "Link Building", icon: <Globe className="h-8 w-8 text-seo-accent mb-2" /> },
                  { name: "Analytics", icon: <BarChart className="h-8 w-8 text-seo-accent mb-2" /> },
                ].map((skill) => (
                  <div key={skill.name} className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                    {skill.icon}
                    <h4 className="font-medium">{skill.name}</h4>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4">SEO Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Ahrefs", "SEMrush", "Google Search Console", "GA4", "Screaming Frog", "SurferSEO"].map((tool) => (
                  <span key={tool} className="bg-secondary px-3 py-1 rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Rajat's Skills */}
            <div className="animate-fade-in animate-delay-200">
              <h3 className="text-2xl font-bold mb-6 text-center">Web Development</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {[
                  { name: "HTML/CSS", icon: <Code className="h-8 w-8 text-seo-accent mb-2" /> },
                  { name: "JavaScript", icon: <Code className="h-8 w-8 text-seo-accent mb-2" /> },
                  { name: "PHP", icon: <Code className="h-8 w-8 text-seo-accent mb-2" /> },
                  { name: "MySQL", icon: <Database className="h-8 w-8 text-seo-accent mb-2" /> },
                  { name: "Laravel", icon: <Code className="h-8 w-8 text-seo-accent mb-2" /> },
                  { name: "Bootstrap", icon: <LayoutIcon className="h-8 w-8 text-seo-accent mb-2" /> },
                ].map((skill) => (
                  <div key={skill.name} className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                    {skill.icon}
                    <h4 className="font-medium">{skill.name}</h4>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4">Development Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["GitHub", "VS Code", "AdminLTE", "Razorpay", "Instamojo", "REST APIs"].map((tool) => (
                  <span key={tool} className="bg-secondary px-3 py-1 rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/skills" className="btn-outline">
              Explore Our Skills
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest articles on SEO and web development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
                title: "How to Fix Crawling Issues in WordPress",
                excerpt: "Discover practical solutions to common WordPress crawling problems that may be affecting your site's SEO performance.",
                author: "Anuj",
                date: "April 15, 2024",
                link: "/blog/fix-crawling-issues-wordpress"
              },
              {
                image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
                title: "Integrate Razorpay in PHP Projects",
                excerpt: "A step-by-step guide to implementing Razorpay payment gateway in your PHP web applications.",
                author: "Rajat Gupta",
                date: "April 5, 2024",
                link: "/blog/razorpay-integration-php"
              },
              {
                image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
                title: "Building Admin Panels with AdminLTE",
                excerpt: "Learn how to quickly create powerful admin dashboards using the AdminLTE template framework.",
                author: "Rajat Gupta",
                date: "March 22, 2024",
                link: "/blog/adminlte-dashboard-tutorial"
              }
            ].map((post, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link 
                    to={post.link}
                    className="inline-flex items-center text-seo-accent font-medium hover:underline"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog" className="btn-outline">
              Browse All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-seo-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Grow Your Online Presence?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let's work together to improve your website's design, functionality, and search rankings.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline border-white text-white hover:bg-white hover:text-seo-dark"
              >
                Book a Free 15-min Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

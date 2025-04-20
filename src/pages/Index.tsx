
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowRight, Download, Archive, Search, BarChart, FileText, Users } from 'lucide-react';
import LayoutComponent from '@/components/Layout';

const Index = () => {
  useEffect(() => {
    document.title = 'Anuj - SEO Specialist | Home';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Anuj is an experienced SEO specialist based in India, helping businesses improve their online visibility and organic traffic with proven strategies.');
    }
  }, []);

  return (
    <LayoutComponent>
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Elevating Your <span className="text-seo-accent">SEO</span> Strategy
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
                Hi, I'm Anuj - an SEO Specialist based in India with expertise in technical, on-page, and off-page SEO strategies that drive real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/anuj-resume.pdf" className="btn-primary flex items-center justify-center">
                  <Download size={18} className="mr-2" />
                  Download Resume
                </a>
                <Link to="/contact" className="btn-outline flex items-center justify-center">
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 animate-fade-in animate-delay-200">
              <div className="relative">
                <div className="aspect-square rounded-full bg-gradient-to-br from-blue-400 to-seo-accent p-1 max-w-md mx-auto">
                  <div className="h-full w-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src="/lovable-uploads/624e90e1-83ad-47e1-90a5-12db9a20acdb.png"
                      alt="Anuj - SEO Specialist"
                      className="object-cover w-full h-full opacity-80"
                    />
                    <div className="absolute inset-0 rounded-full flex items-center justify-center">
                      <div className="text-center bg-white/90 p-6 rounded-xl shadow-lg">
                        <h2 className="font-bold text-2xl mb-1">Anuj</h2>
                        <p className="text-seo-accent font-medium">SEO Specialist</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">SEO Services I Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive SEO solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Search className="h-10 w-10 text-seo-accent" />,
                title: "Technical SEO",
                description: "Site structure optimization, fixing crawling issues, core web vitals improvements, and technical audits."
              },
              {
                icon: <FileText className="h-10 w-10 text-seo-accent" />,
                title: "On-Page SEO",
                description: "Content optimization, keyword strategy, meta tags enhancement, and semantic markup implementation."
              },
              {
                icon: <Users className="h-10 w-10 text-seo-accent" />,
                title: "Off-Page SEO",
                description: "Quality link building, brand mentions, digital PR, and third-party platforms optimization."
              },
              {
                icon: <BarChart className="h-10 w-10 text-seo-accent" />,
                title: "Analytics & Tracking",
                description: "Setting up GA4, GSC, data analysis, performance tracking, and ROI measurement."
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
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Case Studies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a look at how I've helped businesses grow their organic traffic and improve their search rankings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
                title: "E-commerce Traffic Growth Strategy",
                description: "Increased organic traffic by 230% in 6 months for an e-commerce business by implementing a comprehensive SEO strategy.",
                link: "/case-studies/ecommerce"
              },
              {
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
                title: "Local SEO for Medical Practice",
                description: "Boosted local search visibility and doubled appointment bookings through targeted local SEO optimization.",
                link: "/case-studies/local-medical"
              }
            ].map((study, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <Link 
                    to={study.link}
                    className="inline-flex items-center text-seo-accent font-medium hover:underline"
                  >
                    View Case Study
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/case-studies" className="btn-outline">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest SEO Insights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends and strategies in the world of SEO
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
                title: "How to Fix Crawling Issues in WordPress",
                excerpt: "Discover practical solutions to common WordPress crawling problems that may be affecting your site's SEO performance.",
                date: "April 15, 2024",
                link: "/blog/fix-crawling-issues-wordpress"
              },
              {
                image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
                title: "Local SEO Checklist 2024",
                excerpt: "A comprehensive guide to optimizing your local business presence in 2024 with proven strategies and tactics.",
                date: "April 5, 2024",
                link: "/blog/local-seo-checklist-2024"
              },
              {
                image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
                title: "What Google's March 2024 Update Means",
                excerpt: "Analysis of Google's latest algorithm update and practical tips to maintain or improve your rankings.",
                date: "March 22, 2024",
                link: "/blog/google-march-2024-update"
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
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Boost Your Search Rankings?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let's work together to improve your online visibility and drive more organic traffic to your website.
            </p>
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </LayoutComponent>
  );
};

export default Index;

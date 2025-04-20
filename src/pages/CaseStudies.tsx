
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Search, ShieldCheck, Globe } from 'lucide-react';
import Layout from '@/components/Layout';

const CaseStudies = () => {
  useEffect(() => {
    document.title = 'Anuj - SEO Specialist | Case Studies';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Explore Anuj\'s SEO case studies showcasing real client success stories with measurable results in organic traffic growth, keyword rankings, and technical optimizations.');
    }
  }, []);
  
  const caseStudies = [
    {
      id: "ecommerce",
      title: "E-commerce Traffic Growth Strategy",
      subtitle: "Fashion E-commerce Store",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      challenge: "A fashion e-commerce store was struggling with low organic traffic, poor keyword rankings, and technical SEO issues affecting their product pages.",
      approach: [
        "Conducted a comprehensive technical SEO audit",
        "Optimized product category structure and URL hierarchy",
        "Implemented structured data for products and reviews",
        "Created an internal linking strategy focused on key product categories",
        "Developed a content strategy targeting high-intent keywords"
      ],
      tools: ["Ahrefs", "Screaming Frog", "Google Search Console", "Google Analytics 4"],
      results: [
        "230% increase in organic traffic within 6 months",
        "First page rankings for 65+ commercial keywords",
        "38% increase in organic conversions",
        "Fixed 100+ technical SEO issues"
      ],
      chartData: {
        before: 12000,
        after: 39600
      }
    },
    {
      id: "local-medical",
      title: "Local SEO for Medical Practice",
      subtitle: "Multispecialty Clinic",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      challenge: "A multispecialty medical clinic needed to improve their local search visibility to attract more patients in their service area.",
      approach: [
        "Optimized Google Business Profile with accurate NAP information",
        "Created location-specific landing pages for each service",
        "Built local citations across healthcare directories",
        "Implemented review generation strategy",
        "Fixed mobile usability issues affecting local search"
      ],
      tools: ["Google Business Profile", "SEMrush", "BrightLocal", "Google Analytics 4", "PageSpeed Insights"],
      results: [
        "95% increase in 'near me' search visibility",
        "Doubled appointment bookings from organic search",
        "Improved from position #12 to #2 for primary target keywords",
        "Increased review count from 23 to 87 with 4.7 average rating"
      ],
      chartData: {
        before: 42,
        after: 87
      }
    },
    {
      id: "tech-blog",
      title: "Content Strategy for Tech Blog",
      subtitle: "Technology News Website",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      challenge: "A technology news website was producing quality content but struggling to gain organic visibility and competing with established publishers.",
      approach: [
        "Performed content gap analysis against competitors",
        "Developed a topic cluster strategy around core technology themes",
        "Optimized existing content based on search intent",
        "Implemented advanced schema markup for articles",
        "Built a strategic internal linking structure"
      ],
      tools: ["SurferSEO", "Ahrefs", "Google Search Console", "ContentKing"],
      results: [
        "176% increase in organic traffic over 9 months",
        "Improved average session duration by 42%",
        "3.5x increase in featured snippet placements",
        "Grew email subscriber base through organic traffic by 210%"
      ],
      chartData: {
        before: 25000,
        after: 69000
      }
    },
    {
      id: "saas-website",
      title: "Technical SEO for SaaS Website",
      subtitle: "Project Management Software",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      challenge: "A SaaS company specializing in project management software was experiencing indexing issues, slow load times, and poor core web vitals metrics.",
      approach: [
        "Performed comprehensive technical audit and fixed critical issues",
        "Optimized JavaScript rendering for search engines",
        "Improved site architecture and internal linking",
        "Enhanced core web vitals through code and image optimization",
        "Implemented proper canonical tags and hreflang for international pages"
      ],
      tools: ["Screaming Frog", "PageSpeed Insights", "Google Search Console", "WebPageTest"],
      results: [
        "Improved mobile page speed score from 48 to 89",
        "Increased indexed pages by 134%",
        "Reduced bounce rate by 28%",
        "Improved keyword rankings by an average of 14 positions"
      ],
      chartData: {
        before: 48,
        after: 89
      }
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-gray-600">
              Real-world examples of how my SEO strategies have helped businesses improve their online visibility and drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-5/12 flex-shrink-0">
                      <div className="h-full">
                        <img 
                          src={study.image} 
                          alt={study.title} 
                          className="w-full h-full object-cover aspect-video lg:aspect-auto"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-7/12 p-6 lg:p-8">
                      <div className="mb-1 text-seo-accent font-medium">{study.subtitle}</div>
                      <h2 className="text-2xl lg:text-3xl font-bold mb-4">{study.title}</h2>
                      
                      <div className="mb-6">
                        <h3 className="font-semibold text-lg mb-2 flex items-center">
                          <ShieldCheck size={18} className="mr-2 text-seo-accent" />
                          The Challenge
                        </h3>
                        <p className="text-gray-700">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="font-semibold text-lg mb-2 flex items-center">
                          <Search size={18} className="mr-2 text-seo-accent" />
                          My Approach
                        </h3>
                        <ul className="space-y-1 text-gray-700">
                          {study.approach.slice(0, 3).map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-seo-accent mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="font-semibold text-lg mb-2 flex items-center">
                          <TrendingUp size={18} className="mr-2 text-seo-accent" />
                          Key Results
                        </h3>
                        <ul className="space-y-1 text-gray-700">
                          {study.results.slice(0, 2).map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-seo-accent mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link 
                        to={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-seo-accent font-medium hover:underline"
                      >
                        View Full Case Study
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Me for Your SEO?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My approach to SEO is based on proven methodologies and tailored to your specific business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Globe size={32} className="text-seo-accent" />,
                title: "Data-Driven Approach",
                description: "I base all my strategies on thorough analysis and hard data to ensure measurable results and ROI for your business."
              },
              {
                icon: <Users size={32} className="text-seo-accent" />,
                title: "Transparent Reporting",
                description: "Regular detailed reports that clearly show the impact of SEO efforts on your business metrics and bottom line."
              },
              {
                icon: <TrendingUp size={32} className="text-seo-accent" />,
                title: "Continuous Optimization",
                description: "SEO is an ongoing process. I continuously monitor, test, and refine strategies to maintain and improve results."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
              Ready to Achieve Similar Results for Your Business?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let's discuss how my proven SEO strategies can help you grow your online presence and drive more organic traffic.
            </p>
            <Link to="/contact" className="btn-primary">
              Let's Talk About Your Project
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;

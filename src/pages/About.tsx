
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import AboutHero from './components/About/AboutHero';
import JourneySection from './components/About/JourneySection';
import ToolsSection from './components/About/ToolsSection';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    document.title = 'About Anuj - SEO Specialist';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Learn about Anuj\'s journey into SEO, his expertise in technical SEO, on-page optimization, content strategy, and the professional tools he uses to drive results.');
    }
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <AboutHero />
      
      {/* Journey Section */}
      <JourneySection />
      
      {/* Tools Section */}
      <ToolsSection />
      
      {/* Specialization Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My SEO Specialties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I offer specialized SEO services tailored to specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Local SEO</h3>
              <p className="text-gray-700 mb-4">
                I help businesses improve their local search visibility to connect with customers in their area. This includes Google Business Profile optimization, local citation building, and geo-targeted keyword strategies.
              </p>
              <Link to="/services#local-seo" className="text-seo-accent font-medium hover:underline">
                Learn more about Local SEO services
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">E-commerce SEO</h3>
              <p className="text-gray-700 mb-4">
                I specialize in optimizing online stores for better visibility and higher conversion rates. This includes product page optimization, category structure improvements, and strategic keyword targeting.
              </p>
              <Link to="/services#ecommerce-seo" className="text-seo-accent font-medium hover:underline">
                Learn more about E-commerce SEO services
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">SEO Audits</h3>
              <p className="text-gray-700 mb-4">
                My comprehensive SEO audits identify opportunities and issues impacting your website's search performance, providing actionable recommendations to improve rankings.
              </p>
              <Link to="/services#seo-audits" className="text-seo-accent font-medium hover:underline">
                Learn more about SEO Audit services
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Content Strategy</h3>
              <p className="text-gray-700 mb-4">
                I develop content strategies that align with search intent and business goals, helping you create valuable content that ranks well and engages your target audience.
              </p>
              <Link to="/services#content-strategy" className="text-seo-accent font-medium hover:underline">
                Learn more about Content Strategy services
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-seo-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Improve Your Search Rankings?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let's work together to boost your website's visibility and drive more organic traffic to your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link to="/case-studies" className="btn-outline border-white text-white hover:bg-white hover:text-seo-dark">
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

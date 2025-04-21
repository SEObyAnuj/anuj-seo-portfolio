
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => (
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
);

export default HeroSection;

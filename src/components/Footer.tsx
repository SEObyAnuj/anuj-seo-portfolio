
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Calendar, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-seo-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link to="/" className="text-2xl font-bold flex items-center">
              <span className="text-seo-accent">A</span>nuj
              <span className="text-sm font-normal ml-2 text-gray-300">SEO Specialist</span>
            </Link>
            <p className="mt-4 text-gray-300 max-w-md">
              Experienced SEO specialist helping businesses improve their online visibility and organic traffic through data-driven strategies.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="mailto:anuj@example.com" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/anuj-seo" 
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-300 hover:text-white transition-colors">Skills & Tools</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-seo-accent" />
                <span className="text-gray-300">Based in India</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 mt-1 text-seo-accent" />
                <a href="mailto:anuj@example.com" className="text-gray-300 hover:text-white transition-colors">
                  anuj@example.com
                </a>
              </li>
              <li className="flex items-start">
                <Calendar size={20} className="mr-3 mt-1 text-seo-accent" />
                <span className="text-gray-300">Available for freelance projects</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Anuj - SEO Specialist. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

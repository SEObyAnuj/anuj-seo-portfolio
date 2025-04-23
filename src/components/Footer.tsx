
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-seo-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Anuj</h3>
            <p className="text-gray-300 mb-4">
              SEO Specialist focusing on driving organic growth and improving search performance 
              for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/anujseo" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Github size={20} />
              </a>
              <a href="https://twitter.com/anujseo" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com/in/anuj-seo" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="mailto:anuj@example.com" className="text-gray-300 hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services#technical-seo" className="text-gray-300 hover:text-white">Technical SEO</Link></li>
              <li><Link to="/services#local-seo" className="text-gray-300 hover:text-white">Local SEO</Link></li>
              <li><Link to="/services#ecommerce-seo" className="text-gray-300 hover:text-white">E-commerce SEO</Link></li>
              <li><Link to="/services#content-optimization" className="text-gray-300 hover:text-white">Content Optimization</Link></li>
              <li><Link to="/services#seo-audits" className="text-gray-300 hover:text-white">SEO Audits</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {currentYear} Anuj - SEO Specialist. All rights reserved.</p>
          <p className="text-gray-400 flex items-center mt-4 md:mt-0">
            Made with <Heart size={16} className="mx-1 text-red-500" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

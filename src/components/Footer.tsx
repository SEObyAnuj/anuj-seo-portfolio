
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Calendar, MapPin, GitHub, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-seo-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="text-2xl font-bold flex items-center">
              <span className="text-seo-accent">A</span>R Team
            </Link>
            <p className="mt-4 text-gray-300 max-w-md">
              A two-person team of web development and SEO experts, helping businesses improve their online presence through custom websites and effective SEO strategies.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="mailto:team@arteam.com" 
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
              <a 
                href="https://github.com/rajat-gupta" 
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHub size={20} />
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
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link>
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
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#web-development" className="text-gray-300 hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services#seo-services" className="text-gray-300 hover:text-white transition-colors">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link to="/services#custom-dashboards" className="text-gray-300 hover:text-white transition-colors">
                  Custom Dashboards
                </Link>
              </li>
              <li>
                <Link to="/services#e-commerce" className="text-gray-300 hover:text-white transition-colors">
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link to="/services#content-strategy" className="text-gray-300 hover:text-white transition-colors">
                  Content Strategy
                </Link>
              </li>
              <li>
                <Link to="/services#packages" className="text-gray-300 hover:text-white transition-colors">
                  Website + SEO Packages
                </Link>
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
                <a href="mailto:team@arteam.com" className="text-gray-300 hover:text-white transition-colors">
                  team@arteam.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="mr-3 mt-1 text-seo-accent" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start">
                <Calendar size={20} className="mr-3 mt-1 text-seo-accent" />
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Book a 15-min discovery call
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} AR Team - Web & SEO Experts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

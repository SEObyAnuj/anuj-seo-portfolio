
import { useEffect } from 'react';
import { CheckCircle, Code, Search, BarChart, Layout, Globe, FileText, Database, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const Services = () => {
  useEffect(() => {
    document.title = 'Our Services | AR Team - Web & SEO Experts';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Comprehensive web development and SEO services offered by Anuj and Rajat to help your business establish a strong online presence.');
    }
  }, []);

  const webDevelopmentServices = [
    {
      icon: <Code className="h-12 w-12 text-seo-accent" />,
      title: 'Frontend Development',
      description: 'Modern, responsive interfaces built with HTML, CSS, JavaScript, and Bootstrap that work flawlessly across all devices.',
      features: [
        'Responsive web design',
        'Cross-browser compatibility',
        'Interactive UI elements',
        'Performance optimization'
      ]
    },
    {
      icon: <Database className="h-12 w-12 text-seo-accent" />,
      title: 'Backend Development',
      description: 'Robust server-side solutions using PHP, MySQL, and Laravel to power your web applications with secure and scalable functionality.',
      features: [
        'Custom database design',
        'API development',
        'User authentication',
        'Payment gateway integration'
      ]
    },
    {
      icon: <Layout className="h-12 w-12 text-seo-accent" />,
      title: 'Custom Dashboards',
      description: 'User-friendly admin panels and dashboards built with AdminLTE to help you manage your business operations efficiently.',
      features: [
        'Intuitive user interface',
        'Data visualization',
        'Role-based access control',
        'Customizable reports'
      ]
    },
    {
      icon: <Globe className="h-12 w-12 text-seo-accent" />,
      title: 'E-commerce Solutions',
      description: 'Complete online store development with product management, shopping cart, secure checkout, and payment processing.',
      features: [
        'Product catalog management',
        'Secure payment processing',
        'Inventory management',
        'Order tracking system'
      ]
    }
  ];

  const seoServices = [
    {
      icon: <Search className="h-12 w-12 text-seo-accent" />,
      title: 'Technical SEO',
      description: 'Comprehensive technical audits and optimization to ensure your website is properly indexed and ranked by search engines.',
      features: [
        'Site structure optimization',
        'Crawlability improvements',
        'Core Web Vitals enhancement',
        'Schema markup implementation'
      ]
    },
    {
      icon: <FileText className="h-12 w-12 text-seo-accent" />,
      title: 'On-page SEO',
      description: 'Strategic optimization of your website content and structure to improve visibility for your target keywords.',
      features: [
        'Keyword research and mapping',
        'Content optimization',
        'Meta tags enhancement',
        'Internal linking strategy'
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-seo-accent" />,
      title: 'Off-page SEO',
      description: 'Building your site's authority through quality link building, brand mentions, and digital PR strategies.',
      features: [
        'Link building campaigns',
        'Brand mention acquisition',
        'Digital PR strategies',
        'Local citation building'
      ]
    },
    {
      icon: <BarChart className="h-12 w-12 text-seo-accent" />,
      title: 'Analytics & Tracking',
      description: 'Setup and analysis of performance data to measure success, identify opportunities, and guide strategy.',
      features: [
        'GA4 implementation',
        'Search Console setup',
        'Conversion tracking',
        'Performance reporting'
      ]
    }
  ];

  const packages = [
    {
      title: 'Starter Package',
      price: '$999',
      description: 'Perfect for small businesses just getting started with their online presence.',
      includes: [
        '5-page responsive website',
        'Basic SEO setup',
        'Google Business Profile optimization',
        'Mobile-friendly design',
        '1 month of support'
      ]
    },
    {
      title: 'Growth Package',
      price: '$2,499',
      description: 'Ideal for established businesses looking to expand their online reach.',
      includes: [
        'Up to 10-page responsive website',
        'E-commerce functionality',
        'Comprehensive SEO implementation',
        'Content strategy for 3 months',
        'Analytics setup and reporting',
        '3 months of support and monitoring'
      ],
      featured: true
    },
    {
      title: 'Premium Package',
      price: '$4,999',
      description: 'Complete solution for businesses seeking maximum online growth and conversions.',
      includes: [
        'Custom website with unlimited pages',
        'Advanced e-commerce features',
        'Full technical SEO implementation',
        'Content creation (10 articles)',
        'Link building campaign',
        'Custom dashboard for business metrics',
        '6 months of support and optimization'
      ]
    }
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-gray-600">
              Comprehensive web development and SEO solutions to help your business establish a strong online presence.
            </p>
          </div>
        </div>
      </section>

      {/* Web Development Services */}
      <section id="web-development" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Web Development Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Custom websites and web applications built with cutting-edge technologies to meet your specific business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webDevelopmentServices.map((service) => (
              <div key={service.title} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-seo-accent mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Services */}
      <section id="seo-services" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">SEO Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Data-driven strategies to improve your website's visibility, attract targeted traffic, and increase conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seoServices.map((service) => (
              <div key={service.title} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-seo-accent mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Website + SEO Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Combined solutions for businesses that want both a great website and effective SEO strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div 
                key={pkg.title} 
                className={`bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:transform hover:scale-105 ${pkg.featured ? 'border-2 border-seo-accent ring-2 ring-seo-accent/20' : ''}`}
              >
                {pkg.featured && (
                  <div className="bg-seo-accent text-white text-center py-2 font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                  <div className="text-3xl font-bold text-seo-accent mb-4">{pkg.price}</div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.includes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-seo-accent mr-2 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`w-full block text-center py-3 rounded-md font-medium transition-colors ${
                      pkg.featured 
                        ? 'bg-seo-accent text-white hover:bg-opacity-90' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need a custom solution? We can create a tailored package that meets your specific requirements.
            </p>
            <Link to="/contact" className="btn-outline">
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to deliver the best results for your website and SEO needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Discovery',
                description: 'We start by understanding your business, goals, target audience, and competition.'
              },
              {
                number: '02',
                title: 'Strategy',
                description: 'Based on our research, we develop a customized plan to achieve your specific objectives.'
              },
              {
                number: '03',
                title: 'Implementation',
                description: 'Our team executes the strategy, building your website and implementing SEO tactics.'
              },
              {
                number: '04',
                title: 'Optimization',
                description: 'We continuously monitor performance and make data-driven improvements.'
              }
            ].map((step) => (
              <div key={step.number} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-seo-accent mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
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
              Ready to Take Your Online Presence to the Next Level?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Contact us today to discuss how our web development and SEO services can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline border-white text-white hover:bg-white hover:text-seo-dark"
              >
                Schedule a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

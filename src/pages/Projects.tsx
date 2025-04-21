
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const Projects = () => {
  useEffect(() => {
    document.title = 'Our Projects | AR Team - Web & SEO Experts';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Explore our portfolio of web development projects and SEO campaigns that have helped businesses improve their online presence.');
    }
  }, []);

  const webProjects = [
    {
      id: 'apartment-booking',
      title: 'Apartment Booking Site',
      client: 'Luxury Living Properties',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      description: 'A comprehensive apartment booking platform with user authentication, property listings, booking system, and payment integration using Razorpay.',
      technologies: ['PHP', 'MySQL', 'Laravel', 'JavaScript', 'Bootstrap', 'Razorpay API'],
      features: [
        'User authentication and profile management',
        'Property search with multiple filters',
        'Booking management with calendar integration',
        'Secure payment processing using Razorpay',
        'Admin dashboard for property management'
      ],
      link: 'https://example.com/apartment-booking'
    },
    {
      id: 'clothing-store',
      title: 'Clothing E-commerce Platform',
      client: 'Fashion Forward',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      description: 'A fully-featured e-commerce platform for a clothing brand with product management, shopping cart, and order processing.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Instamojo API'],
      features: [
        'Product catalog with categories and filters',
        'Shopping cart and wishlist functionality',
        'Secure checkout with Instamojo integration',
        'Inventory management system',
        'Order tracking for customers'
      ],
      link: 'https://example.com/clothing-store'
    },
    {
      id: 'courses-platform',
      title: 'Spiritual Courses Website',
      client: 'Mindful Path Academy',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      description: 'An educational platform for spiritual courses with user enrollment, course management, and content delivery system.',
      technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
      features: [
        'Course catalog and enrollment system',
        'Video lesson delivery with progress tracking',
        'Quiz and assessment functionality',
        'Certificate generation for completed courses',
        'Subscription management system'
      ],
      link: 'https://example.com/spiritual-courses'
    },
    {
      id: 'qa-forum',
      title: 'Q&A Community Forum',
      client: 'Knowledge Exchange',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      description: 'A community-driven Q&A platform allowing users to ask questions, provide answers, and engage with content through voting and comments.',
      technologies: ['PHP', 'MySQL', 'Laravel', 'JavaScript', 'Bootstrap'],
      features: [
        'User authentication and reputation system',
        'Question posting with tags and categories',
        'Answer submission with upvoting/downvoting',
        'Comment threading and notifications',
        'Search functionality with advanced filters'
      ],
      link: 'https://example.com/qa-forum'
    }
  ];

  const seoProjects = [
    {
      id: 'ecommerce-seo',
      title: 'E-commerce SEO Campaign',
      client: 'Home Essentials Store',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      description: 'A comprehensive SEO campaign for an e-commerce store that increased organic traffic by 230% and improved conversions by 40% over 6 months.',
      strategies: [
        'Technical SEO audit and implementation',
        'Product page optimization',
        'Category structure improvement',
        'Content strategy for blog section',
        'Link building with industry partners'
      ],
      results: [
        '230% increase in organic traffic',
        '40% improvement in conversion rate',
        '58% increase in organic revenue',
        'First page rankings for 75+ target keywords'
      ]
    },
    {
      id: 'local-medical',
      title: 'Local SEO for Medical Practice',
      client: 'City Health Clinic',
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843',
      description: 'A local SEO campaign for a medical practice that doubled their appointment bookings and established their presence in local search results.',
      strategies: [
        'Google Business Profile optimization',
        'Local citation building and cleanup',
        'On-page optimization for service pages',
        'Review management strategy',
        'Local link building campaign'
      ],
      results: [
        '200% increase in appointment bookings',
        'Top 3 position in local pack for all target keywords',
        '145% increase in website traffic',
        '85% improvement in click-through-rate'
      ]
    }
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-lg text-gray-600">
              Take a look at our portfolio of web development projects and SEO campaigns that have helped businesses improve their online presence.
            </p>
          </div>
        </div>
      </section>

      {/* Web Development Projects */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Web Development Projects</h2>
          
          <div className="space-y-16">
            {webProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-seo-accent font-medium mb-4">Client: {project.client}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center"
                  >
                    View Project
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* SEO Case Studies */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">SEO Case Studies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {seoProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-seo-accent font-medium mb-4">Client: {project.client}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Strategies Implemented:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {project.strategies.map((strategy, i) => (
                        <li key={i}>{strategy}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Results:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {project.results.map((result, i) => (
                        <li key={i} className="font-medium">{result}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to={`/case-studies/${project.id}`}
                    className="btn-outline inline-flex items-center"
                  >
                    View Full Case Study
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let's discuss how we can help bring your vision to life with our web development and SEO expertise.
            </p>
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;

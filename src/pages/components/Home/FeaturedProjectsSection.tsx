
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
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
];

const FeaturedProjectsSection = () => (
  <section className="section-padding bg-gray-50">
    <div className="container-custom">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Take a look at our recent work and success stories
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
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
);

export default FeaturedProjectsSection;

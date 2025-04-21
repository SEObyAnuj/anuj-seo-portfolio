
import { Link } from "react-router-dom";
import { Code, Search, LayoutIcon, Database } from "lucide-react";

const ServicesSection = () => (
  <section className="section-padding">
    <div className="container-custom">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comprehensive web development and SEO solutions tailored to your business needs
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <Code className="h-10 w-10 text-seo-accent" />,
            title: "Web Development",
            description: "Custom responsive websites, e-commerce solutions, and web applications built using modern technologies."
          },
          {
            icon: <Search className="h-10 w-10 text-seo-accent" />,
            title: "SEO Services",
            description: "Technical SEO audits, on-page optimization, content strategy, and off-page SEO to boost your rankings."
          },
          {
            icon: <LayoutIcon className="h-10 w-10 text-seo-accent" />,
            title: "Custom Dashboards",
            description: "User-friendly admin panels and dashboards built with AdminLTE to efficiently manage your business."
          },
          {
            icon: <Database className="h-10 w-10 text-seo-accent" />,
            title: "API Development",
            description: "Robust REST APIs for seamless integration with third-party services and improved functionality."
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
      <div className="text-center mt-12">
        <Link to="/services" className="btn-outline">
          View All Services
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesSection;

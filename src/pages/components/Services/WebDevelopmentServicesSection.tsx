
import { CheckCircle, Code, Database, LayoutIcon, Globe } from "lucide-react";

const webDevelopmentServices = [
  {
    icon: <Code className="h-12 w-12 text-seo-accent" />,
    title: "Frontend Development",
    description: "Modern, responsive interfaces built with HTML, CSS, JavaScript, and Bootstrap that work flawlessly across all devices.",
    features: [
      "Responsive web design",
      "Cross-browser compatibility",
      "Interactive UI elements",
      "Performance optimization",
    ],
  },
  {
    icon: <Database className="h-12 w-12 text-seo-accent" />,
    title: "Backend Development",
    description: "Robust server-side solutions using PHP, MySQL, and Laravel to power your web applications with secure and scalable functionality.",
    features: [
      "Custom database design",
      "API development",
      "User authentication",
      "Payment gateway integration",
    ],
  },
  {
    icon: <LayoutIcon className="h-12 w-12 text-seo-accent" />,
    title: "Custom Dashboards",
    description: "User-friendly admin panels and dashboards built with AdminLTE to help you manage your business operations efficiently.",
    features: [
      "Intuitive user interface",
      "Data visualization",
      "Role-based access control",
      "Customizable reports",
    ],
  },
  {
    icon: <Globe className="h-12 w-12 text-seo-accent" />,
    title: "E-commerce Solutions",
    description: "Complete online store development with product management, shopping cart, secure checkout, and payment processing.",
    features: [
      "Product catalog management",
      "Secure payment processing",
      "Inventory management",
      "Order tracking system",
    ],
  },
];

const WebDevelopmentServicesSection = () => (
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
);

export default WebDevelopmentServicesSection;

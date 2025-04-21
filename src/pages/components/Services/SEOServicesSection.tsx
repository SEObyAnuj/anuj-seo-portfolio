
import { CheckCircle, Search, FileText, Users, BarChart } from "lucide-react";

const seoServices = [
  {
    icon: <Search className="h-12 w-12 text-seo-accent" />,
    title: "Technical SEO",
    description: "Comprehensive technical audits and optimization to ensure your website is properly indexed and ranked by search engines.",
    features: [
      "Site structure optimization",
      "Crawlability improvements",
      "Core Web Vitals enhancement",
      "Schema markup implementation",
    ],
  },
  {
    icon: <FileText className="h-12 w-12 text-seo-accent" />,
    title: "On-page SEO",
    description: "Strategic optimization of your website content and structure to improve visibility for your target keywords.",
    features: [
      "Keyword research and mapping",
      "Content optimization",
      "Meta tags enhancement",
      "Internal linking strategy",
    ],
  },
  {
    icon: <Users className="h-12 w-12 text-seo-accent" />,
    title: "Off-page SEO",
    description:
      "Building your site's authority through quality link building, brand mentions, and digital PR strategies.",
    features: [
      "Link building campaigns",
      "Brand mention acquisition",
      "Digital PR strategies",
      "Local citation building",
    ],
  },
  {
    icon: <BarChart className="h-12 w-12 text-seo-accent" />,
    title: "Analytics & Tracking",
    description: "Setup and analysis of performance data to measure success, identify opportunities, and guide strategy.",
    features: [
      "GA4 implementation",
      "Search Console setup",
      "Conversion tracking",
      "Performance reporting",
    ],
  },
];

const SEOServicesSection = () => (
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
);

export default SEOServicesSection;


import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    title: "Starter Package",
    price: "$999",
    description: "Perfect for small businesses just getting started with their online presence.",
    includes: [
      "5-page responsive website",
      "Basic SEO setup",
      "Google Business Profile optimization",
      "Mobile-friendly design",
      "1 month of support",
    ],
  },
  {
    title: "Growth Package",
    price: "$2,499",
    description: "Ideal for established businesses looking to expand their online reach.",
    includes: [
      "Up to 10-page responsive website",
      "E-commerce functionality",
      "Comprehensive SEO implementation",
      "Content strategy for 3 months",
      "Analytics setup and reporting",
      "3 months of support and monitoring",
    ],
    featured: true,
  },
  {
    title: "Premium Package",
    price: "$4,999",
    description: "Complete solution for businesses seeking maximum online growth and conversions.",
    includes: [
      "Custom website with unlimited pages",
      "Advanced e-commerce features",
      "Full technical SEO implementation",
      "Content creation (10 articles)",
      "Link building campaign",
      "Custom dashboard for business metrics",
      "6 months of support and optimization",
    ],
  },
];

const PackagesSection = () => (
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
);

export default PackagesSection;

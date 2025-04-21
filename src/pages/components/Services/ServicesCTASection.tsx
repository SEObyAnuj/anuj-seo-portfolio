
import { Link } from "react-router-dom";

const ServicesCTASection = () => (
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
);

export default ServicesCTASection;

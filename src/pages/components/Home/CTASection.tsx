
const CTASection = () => (
  <section className="py-16 bg-seo-dark">
    <div className="container-custom">
      <div className="max-w-3xl mx-auto text-center animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Grow Your Online Presence?
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          Let's work together to improve your website's design, functionality, and search rankings.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline border-white text-white hover:bg-white hover:text-seo-dark"
          >
            Book a Free 15-min Call
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;

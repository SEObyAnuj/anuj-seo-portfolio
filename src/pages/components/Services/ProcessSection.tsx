
const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your business, goals, target audience, and competition.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Based on our research, we develop a customized plan to achieve your specific objectives.",
  },
  {
    number: "03",
    title: "Implementation",
    description: "Our team executes the strategy, building your website and implementing SEO tactics.",
  },
  {
    number: "04",
    title: "Optimization",
    description: "We continuously monitor performance and make data-driven improvements.",
  },
];

const ProcessSection = () => (
  <section className="section-padding bg-gray-50">
    <div className="container-custom">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Process</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We follow a structured approach to deliver the best results for your website and SEO needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div key={step.number} className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-seo-accent mb-4">{step.number}</div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;

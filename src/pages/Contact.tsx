
import { useEffect } from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import Layout from '@/components/Layout';
import ContactForm from './components/Contact/ContactForm';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Anuj - SEO Specialist';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Get in touch with Anuj for SEO consultation, projects, or inquiries. Let\'s boost your rankings and drive more organic traffic to your website.');
    }
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Boost Your Rankings!</h1>
            <p className="text-xl text-gray-600">
              Have a question or want to work together? Reach out to me!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="w-full lg:w-1/3 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="p-3 bg-blue-50 rounded-full mr-4 flex-shrink-0">
                    <Mail size={24} className="text-seo-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a 
                      href="mailto:anuj@example.com" 
                      className="text-gray-700 hover:text-seo-accent transition-colors"
                    >
                      anuj@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-blue-50 rounded-full mr-4 flex-shrink-0">
                    <Phone size={24} className="text-seo-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-700">Available upon request</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-blue-50 rounded-full mr-4 flex-shrink-0">
                    <Linkedin size={24} className="text-seo-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com/in/anuj-seo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-seo-accent transition-colors"
                    >
                      linkedin.com/in/anuj-seo
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-blue-50 rounded-full mr-4 flex-shrink-0">
                    <MapPin size={24} className="text-seo-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-gray-700">Based in India</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-bold mb-4">Let's Boost Your Rankings!</h3>
                <p className="text-gray-600 mb-4">
                  Ready to improve your website's search visibility and drive more organic traffic? Fill out the form and I'll get back to you as soon as possible to discuss your SEO needs.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-2/3 animate-fade-in animate-delay-200">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common questions about my SEO services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What SEO services do you offer?",
                answer: "I offer comprehensive SEO services including technical SEO audits, on-page optimization, content strategy, keyword research, local SEO, e-commerce SEO, link building, and performance analytics."
              },
              {
                question: "How quickly can I expect to see results from SEO?",
                answer: "SEO is a long-term strategy that typically takes 3-6 months to show significant results. However, some improvements can be seen sooner, especially with technical fixes and on-page optimizations."
              },
              {
                question: "Do you offer one-time SEO audits or only ongoing services?",
                answer: "I offer both one-time SEO audits with recommendations and ongoing SEO services. The approach depends on your specific needs and goals."
              },
              {
                question: "How do you report on SEO progress?",
                answer: "I provide detailed monthly reports that include key metrics such as organic traffic, keyword rankings, backlink profile, and conversion data. Each report includes analysis and recommendations for ongoing strategy."
              },
              {
                question: "Can you help with both local and international SEO?",
                answer: "Yes, I have experience with both local SEO strategies for businesses targeting specific geographical areas and international SEO for companies looking to expand their reach globally."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="mb-6 last:mb-0 bg-white p-6 rounded-lg shadow-md animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

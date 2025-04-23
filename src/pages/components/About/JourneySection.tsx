
import { CheckCircle } from "lucide-react";

const JourneySection = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">My SEO Journey</h2>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">How It All Started</h3>
              <p className="text-gray-700">
                My passion for SEO began when I was creating my first blog and noticed how certain websites consistently appeared at the top of search results. This sparked my curiosity about search algorithms and what makes content rank well.
              </p>
              <p className="text-gray-700 mt-3">
                I started experimenting with basic SEO principles on my own projects, learning through trial and error. As I saw positive results, I became increasingly fascinated by the technical and creative balance that effective SEO requires.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Professional Development</h3>
              <p className="text-gray-700">
                What began as a hobby quickly evolved into a career path. I immersed myself in learning everything I could about SEO, from technical optimization to content strategy, constantly staying updated with industry changes and algorithm updates.
              </p>
              <p className="text-gray-700 mt-3">
                I've since developed expertise in conducting comprehensive SEO audits, optimizing content for search intent, implementing technical SEO improvements, and developing effective link building strategies. Today, I specialize in:
              </p>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-seo-accent mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Local SEO</h4>
                    <p className="text-gray-600 text-sm">Helping businesses improve their visibility in local search results</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-seo-accent mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">E-commerce SEO</h4>
                    <p className="text-gray-600 text-sm">Optimizing product pages and category structures for better rankings</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-seo-accent mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Technical SEO</h4>
                    <p className="text-gray-600 text-sm">Identifying and fixing technical issues that impact search performance</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-seo-accent mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Content Strategy</h4>
                    <p className="text-gray-600 text-sm">Developing SEO-optimized content that serves user intent</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">My SEO Philosophy</h3>
              <p className="text-gray-700">
                I believe that effective SEO isn't just about following technical guidelines—it's about creating value for users. My approach focuses on understanding the unique needs of each business and their target audience, then developing strategies that align with both business goals and search engine requirements.
              </p>
              <p className="text-gray-700 mt-3">
                Instead of chasing algorithms, I focus on sustainable practices that build long-term search visibility. This means prioritizing user experience, creating genuinely helpful content, and implementing technical best practices that help both users and search engines access and understand your website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;

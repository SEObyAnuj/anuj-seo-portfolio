
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ToolsSection = () => {
  const seoTools = [
    {
      name: "Screaming Frog",
      description: "I use Screaming Frog for conducting in-depth technical SEO audits and identifying issues like broken links, duplicate content, and site structure improvements.",
      link: "https://www.screamingfrog.co.uk/seo-spider/"
    },
    {
      name: "SEMrush",
      description: "SEMrush helps me perform competitive analysis, keyword research, backlink analysis, and track organic search performance for my clients.",
      link: "https://www.semrush.com/"
    },
    {
      name: "Google Search Console",
      description: "I rely on GSC to track site health, monitor crawl issues, and optimize content for search by analyzing performance data directly from Google.",
      link: "https://search.google.com/search-console"
    },
    {
      name: "Google Analytics",
      description: "I use Analytics to track and analyze website traffic, user behavior patterns, and conversion data to inform SEO strategy decisions.",
      link: "https://analytics.google.com/"
    },
    {
      name: "Grammarly & QuillBot",
      description: "These AI-assisted writing tools help me improve content quality, grammar, and ensure keyword optimization across articles and blog posts.",
      link: "https://www.grammarly.com/"
    },
    {
      name: "Canva",
      description: "I create visual content for parasite SEO and other content marketing strategies using Canva's user-friendly design platform.",
      link: "https://www.canva.com/"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My SEO Toolkit</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I leverage industry-leading tools to deliver comprehensive SEO solutions for my clients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seoTools.map((tool, index) => (
            <Card 
              key={tool.name}
              className="transition-shadow hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-2">
                <CardTitle>{tool.name}</CardTitle>
                <CardDescription>
                  <a 
                    href={tool.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs text-seo-accent hover:underline"
                  >
                    Visit Website
                    <ExternalLink size={12} className="ml-1" />
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{tool.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;

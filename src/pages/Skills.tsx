
import { useEffect } from 'react';
import { 
  Search, FileText, BarChart, Globe, Users, CheckCircle,
  LineChart, ExternalLink, AlertTriangle, BookOpen, Code
} from 'lucide-react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  useEffect(() => {
    document.title = 'Anuj - SEO Skills & Tools';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Explore Anuj\'s comprehensive SEO skills and tools including technical SEO, on-page optimization, content strategy, and more.');
    }
  }, []);

  const seoSkills = [
    {
      title: 'Technical SEO',
      icon: <Code className="h-8 w-8 text-seo-accent mb-2" />,
      description: 'Site structure optimization, improving crawlability, resolving indexation issues, and enhancing Core Web Vitals.',
      items: ['Site Audits', 'Core Web Vitals', 'Schema Markup', 'Mobile Optimization']
    },
    {
      title: 'On-Page SEO',
      icon: <FileText className="h-8 w-8 text-seo-accent mb-2" />,
      description: 'Content optimization, meta tag enhancement, internal linking strategy and content structure improvement.',
      items: ['Content Optimization', 'Meta Tags', 'Header Structure', 'Internal Linking']
    },
    {
      title: 'Local SEO',
      icon: <Globe className="h-8 w-8 text-seo-accent mb-2" />,
      description: 'Google Business Profile optimization, local citation building, and geo-targeted keyword optimization.',
      items: ['GBP Optimization', 'Local Citations', 'Geo-Targeting', 'Local Link Building']
    },
    {
      title: 'Keyword Research',
      icon: <Search className="h-8 w-8 text-seo-accent mb-2" />,
      description: 'Identifying valuable search terms with commercial intent, analyzing search volumes, and competition.',
      items: ['Search Intent Analysis', 'Competitor Keywords', 'Long-Tail Keywords', 'Keyword Mapping']
    },
    {
      title: 'Link Building',
      icon: <ExternalLink className="h-8 w-8 text-seo-accent mb-2" />,
      description: 'Building high-quality backlinks through outreach, guest posting, and digital PR strategies.',
      items: ['Outreach Campaigns', 'Guest Posting', 'Digital PR', 'Brand Mentions']
    },
    {
      title: 'Content Strategy',
      icon: <BookOpen className="h-8 w-8 text-seo-accent mb-2" />,
      description: 'Developing comprehensive content plans that align with SEO goals and user needs.',
      items: ['Content Calendars', 'SEO Writing', 'Topic Clusters', 'Content Gaps']
    },
    {
      title: 'Analytics & Reporting',
      icon: <BarChart className="h-8 w-8 text-seo-accent mb-2" />,
      description: 'Setting up tracking, analyzing performance data, and creating actionable reports.',
      items: ['Traffic Analysis', 'Conversion Tracking', 'SEO Reporting', 'ROI Measurement']
    },
    {
      title: 'Competitor Analysis',
      icon: <Users className="h-8 w-8 text-seo-accent mb-2" />,
      description: 'Researching competitor strategies, identifying opportunities, and competitive gap analysis.',
      items: ['SERP Analysis', 'Backlink Gap', 'Content Benchmarking', 'Strategy Insights']
    },
    {
      title: 'E-commerce SEO',
      icon: <LineChart className="h-8 w-8 text-seo-accent mb-2" />,
      description: 'Optimizing product pages, enhancing category structure, and improving conversion rates.',
      items: ['Product Page SEO', 'Category Optimization', 'Reviews Strategy', 'Shopping Feed']
    },
    {
      title: 'SEO Audits',
      icon: <AlertTriangle className="h-8 w-8 text-seo-accent mb-2" />,
      description: 'Comprehensive website evaluation to identify technical issues and optimization opportunities.',
      items: ['Technical Audit', 'Content Audit', 'Backlink Audit', 'User Experience']
    }
  ];

  const seoTools = [
    {
      name: "Screaming Frog",
      description: "For conducting in-depth technical SEO audits and identifying issues like broken links, duplicate content, and site structure improvements.",
      expertise: "Advanced"
    },
    {
      name: "SEMrush",
      description: "For competitive analysis, keyword research, backlink analysis, and tracking organic search performance.",
      expertise: "Advanced"
    },
    {
      name: "Google Search Console",
      description: "To track site health, monitor crawl issues, and optimize content for search.",
      expertise: "Advanced"
    },
    {
      name: "Google Analytics",
      description: "For analyzing website traffic, user behavior, and conversion tracking.",
      expertise: "Advanced"
    },
    {
      name: "Ahrefs",
      description: "For backlink analysis, keyword research, and competitive research.",
      expertise: "Intermediate"
    },
    {
      name: "Grammarly & QuillBot",
      description: "For improving content quality, grammar, and ensuring keyword optimization across articles and blog posts.",
      expertise: "Advanced"
    },
    {
      name: "Canva",
      description: "For creating visual content, especially for parasite SEO and other content marketing strategies.",
      expertise: "Intermediate"
    },
    {
      name: "Moz Pro",
      description: "For site audits, rank tracking, and backlink analysis.",
      expertise: "Intermediate"
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My SEO Skills & Tools</h1>
            <p className="text-xl text-gray-600">
              A comprehensive overview of my SEO expertise and the professional tools I use to achieve results
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">SEO Skills</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My comprehensive SEO skillset covers all aspects of search engine optimization, ensuring a holistic approach to improving your website's visibility
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoSkills.map((skill, index) => (
              <div 
                key={skill.title}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                <p className="text-gray-600 mb-4">{skill.description}</p>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle size={16} className="text-seo-accent mr-2 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">SEO Tools Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I leverage industry-leading tools to analyze, optimize, and track SEO performance for maximum results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seoTools.map((tool, index) => (
              <Card 
                key={tool.name} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle>{tool.name}</CardTitle>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      tool.expertise === "Advanced" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {tool.expertise}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Boost Your Website's SEO Performance?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Let me put my skills and tools to work for your business. I'll create a customized SEO strategy designed to increase your visibility, drive more traffic, and improve your search rankings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="btn-primary flex items-center justify-center"
                >
                  Get in Touch
                </a>
                <a 
                  href="/case-studies" 
                  className="btn-outline flex items-center justify-center"
                >
                  See My Case Studies
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;

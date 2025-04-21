
import { Link } from "react-router-dom";
import { FileText, Search, Globe, BarChart, Code, Database, LayoutIcon } from "lucide-react";

const SkillsToolsSection = () => (
  <section className="section-padding">
    <div className="container-custom">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Tools</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our combined expertise covers both technical development and strategic marketing
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Anuj's Skills */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold mb-6 text-center">SEO Expertise</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {[
              { name: "On-page SEO", icon: <FileText className="h-8 w-8 text-seo-accent mb-2" /> },
              { name: "Technical SEO", icon: <Search className="h-8 w-8 text-seo-accent mb-2" /> },
              { name: "Content Strategy", icon: <FileText className="h-8 w-8 text-seo-accent mb-2" /> },
              { name: "Keyword Research", icon: <Search className="h-8 w-8 text-seo-accent mb-2" /> },
              { name: "Link Building", icon: <Globe className="h-8 w-8 text-seo-accent mb-2" /> },
              { name: "Analytics", icon: <BarChart className="h-8 w-8 text-seo-accent mb-2" /> },
            ].map(skill => (
              <div key={skill.name} className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                {skill.icon}
                <h4 className="font-medium">{skill.name}</h4>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4">SEO Tools</h3>
          <div className="flex flex-wrap gap-2">
            {["Ahrefs", "SEMrush", "Google Search Console", "GA4", "Screaming Frog", "SurferSEO"].map((tool) => (
              <span key={tool} className="bg-secondary px-3 py-1 rounded-full text-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>
        {/* Rajat's Skills */}
        <div className="animate-fade-in animate-delay-200">
          <h3 className="text-2xl font-bold mb-6 text-center">Web Development</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {[
              { name: "HTML/CSS", icon: <Code className="h-8 w-8 text-seo-accent mb-2" /> },
              { name: "JavaScript", icon: <Code className="h-8 w-8 text-seo-accent mb-2" /> },
              { name: "PHP", icon: <Code className="h-8 w-8 text-seo-accent mb-2" /> },
              { name: "MySQL", icon: <Database className="h-8 w-8 text-seo-accent mb-2" /> },
              { name: "Laravel", icon: <Code className="h-8 w-8 text-seo-accent mb-2" /> },
              { name: "Bootstrap", icon: <LayoutIcon className="h-8 w-8 text-seo-accent mb-2" /> },
            ].map(skill => (
              <div key={skill.name} className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                {skill.icon}
                <h4 className="font-medium">{skill.name}</h4>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4">Development Tools</h3>
          <div className="flex flex-wrap gap-2">
            {["GitHub", "VS Code", "AdminLTE", "Razorpay", "Instamojo", "REST APIs"].map((tool) => (
              <span key={tool} className="bg-secondary px-3 py-1 rounded-full text-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <Link to="/skills" className="btn-outline">
          Explore Our Skills
        </Link>
      </div>
    </div>
  </section>
);

export default SkillsToolsSection;

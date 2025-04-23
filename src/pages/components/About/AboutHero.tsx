
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutHero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="w-full md:w-2/5">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/624e90e1-83ad-47e1-90a5-12db9a20acdb.png"
                alt="Anuj - SEO Specialist" 
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-gray-600 mb-6">
              Hello! I'm Anuj, a passionate SEO specialist with a knack for solving search visibility challenges and driving organic growth.
            </p>
            <p className="text-gray-700 mb-6">
              At 25, I've already accumulated over a year of professional experience helping businesses of all sizes improve their online presence. My approach combines technical expertise with creative strategies to deliver measurable results.
            </p>
            <Button asChild className="bg-seo-accent hover:bg-opacity-90 text-white">
              <a href="/assets/anuj-seo-resume.pdf" download className="inline-flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Download My Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

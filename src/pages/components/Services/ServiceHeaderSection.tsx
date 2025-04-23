
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";

const ServiceHeaderSection = () => (
  <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
    <div className="container-custom">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Anuj - SEO Specialist Driving Organic Growth & Performance
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          I help businesses improve their online visibility, increase organic traffic, and achieve better search rankings through strategic SEO solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-seo-accent hover:bg-opacity-90 text-white">
            <a href="/assets/anuj-seo-resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <Button asChild variant="outline" className="border-seo-accent text-seo-accent hover:bg-seo-accent hover:text-white">
            <Link to="/contact">
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default ServiceHeaderSection;

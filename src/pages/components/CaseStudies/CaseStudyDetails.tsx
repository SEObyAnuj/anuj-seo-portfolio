
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CaseStudyDetailsProps {
  caseStudy: {
    id: string;
    title: string;
    client: string;
    website: string;
    image: string;
    challenge: string;
    strategy: string;
    tools: string[];
    results: string[];
    testimonial?: {
      text: string;
      author: string;
      position: string;
    };
  };
}

const CaseStudyDetails = ({ caseStudy }: CaseStudyDetailsProps) => {
  return (
    <div className="space-y-8">
      <Link 
        to="/case-studies" 
        className="inline-flex items-center text-seo-accent hover:underline"
      >
        <ArrowLeft size={16} className="mr-2" />
        Back to All Case Studies
      </Link>
      
      <div className="aspect-video w-full overflow-hidden rounded-xl">
        <img 
          src={caseStudy.image} 
          alt={`${caseStudy.client} - ${caseStudy.title}`} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">{caseStudy.client}</h1>
          <p className="text-xl text-gray-600">{caseStudy.title}</p>
        </div>
        {caseStudy.website && (
          <Button asChild variant="outline">
            <a href={caseStudy.website} target="_blank" rel="noopener noreferrer" className="flex items-center">
              Visit Website
              <ExternalLink size={16} className="ml-2" />
            </a>
          </Button>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4">Challenge</h2>
            <p className="text-gray-700">{caseStudy.challenge}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4">Strategy</h2>
            <p className="text-gray-700">{caseStudy.strategy}</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-xl font-bold mb-4">Tools Used</h2>
          <div className="flex flex-wrap gap-2">
            {caseStudy.tools.map((tool) => (
              <span key={tool} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                {tool}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-xl font-bold mb-4">Results</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {caseStudy.results.map((result, idx) => (
              <li key={idx}>{result}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      {caseStudy.testimonial && (
        <Card className="bg-gray-50 border-none">
          <CardContent className="pt-6">
            <blockquote className="border-l-4 border-seo-accent pl-4 italic text-gray-700">
              "{caseStudy.testimonial.text}"
              <footer className="mt-2 text-gray-600 not-italic">
                <strong>{caseStudy.testimonial.author}</strong>, {caseStudy.testimonial.position}
              </footer>
            </blockquote>
          </CardContent>
        </Card>
      )}
      
      <div className="text-center">
        <p className="text-gray-600 mb-4">Ready to achieve similar results for your website?</p>
        <Button asChild className="bg-seo-accent hover:bg-opacity-90 text-white">
          <Link to="/contact">Get in Touch</Link>
        </Button>
      </div>
    </div>
  );
};

export default CaseStudyDetails;


import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface CaseStudyCardProps {
  id: string;
  title: string;
  client: string;
  image: string;
  challenge: string;
  results: string[];
  tools: string[];
  delay?: number;
}

const CaseStudyCard = ({ id, title, client, image, challenge, results, tools, delay = 0 }: CaseStudyCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={`${client} - ${title} project`} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardHeader>
        <CardTitle>{client}</CardTitle>
        <CardDescription>{title}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-500 mb-1">Challenge:</h4>
          <p className="text-gray-700">{challenge}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-500 mb-1">Results:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {results.map((result, idx) => (
              <li key={idx}>{result}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-500 mb-2">Tools Used:</h4>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span key={tool} className="bg-gray-100 text-gray-800 text-xs px-2.5 py-0.5 rounded">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link 
          to={`/case-studies/${id}`}
          className="inline-flex items-center text-seo-accent font-medium hover:underline"
        >
          View Case Study
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CaseStudyCard;

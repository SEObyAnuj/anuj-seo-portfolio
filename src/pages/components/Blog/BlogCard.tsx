
import { Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
  delay?: number;
}

const BlogCard = ({ id, title, excerpt, image, date, author, readTime, delay = 0 }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">
          <Link to={`/blog/${id}`} className="hover:text-seo-accent transition-colors">
            {title}
          </Link>
        </CardTitle>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{author}</span>
          </div>
          <div>{readTime} read</div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter>
        <Link 
          to={`/blog/${id}`}
          className="text-seo-accent hover:underline font-medium"
        >
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;

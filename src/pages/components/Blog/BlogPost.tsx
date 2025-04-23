
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPostProps {
  post: {
    id: string;
    title: string;
    content: React.ReactNode;
    image: string;
    date: string;
    author: string;
    readTime: string;
    tags: string[];
  };
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <article className="max-w-4xl mx-auto">
      <Link 
        to="/blog" 
        className="inline-flex items-center text-seo-accent hover:underline mb-6 block"
      >
        <ArrowLeft size={16} className="mr-2" />
        Back to All Articles
      </Link>
      
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
      
      <div className="flex items-center text-gray-500 mb-6 flex-wrap gap-4">
        <div className="flex items-center">
          <Calendar size={16} className="mr-1" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center">
          <User size={16} className="mr-1" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center">
          <Clock size={16} className="mr-1" />
          <span>{post.readTime} read</span>
        </div>
      </div>
      
      <div className="rounded-lg overflow-hidden mb-8">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-auto"
        />
      </div>
      
      <div className="prose prose-lg max-w-none">
        {post.content}
      </div>
      
      <div className="mt-8 pt-6 border-t">
        <h3 className="text-lg font-semibold mb-2">Tags:</h3>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link 
              key={tag} 
              to={`/blog/tag/${tag.toLowerCase().replace(' ', '-')}`}
              className="bg-gray-100 hover:bg-gray-200 transition-colors text-gray-800 px-3 py-1 rounded-full"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
      
      <div className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Want to improve your website's SEO?</h3>
        <p className="text-gray-700 mb-6">
          I can help you optimize your website to increase organic traffic and improve search rankings.
        </p>
        <Link 
          to="/contact"
          className="btn-primary inline-flex"
        >
          Get in Touch
        </Link>
      </div>
    </article>
  );
};

export default BlogPost;

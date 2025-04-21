
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    title: "How to Fix Crawling Issues in WordPress",
    excerpt: "Discover practical solutions to common WordPress crawling problems that may be affecting your site's SEO performance.",
    author: "Anuj",
    date: "April 15, 2024",
    link: "/blog/fix-crawling-issues-wordpress"
  },
  {
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    title: "Integrate Razorpay in PHP Projects",
    excerpt: "A step-by-step guide to implementing Razorpay payment gateway in your PHP web applications.",
    author: "Rajat Gupta",
    date: "April 5, 2024",
    link: "/blog/razorpay-integration-php"
  },
  {
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    title: "Building Admin Panels with AdminLTE",
    excerpt: "Learn how to quickly create powerful admin dashboards using the AdminLTE template framework.",
    author: "Rajat Gupta",
    date: "March 22, 2024",
    link: "/blog/adminlte-dashboard-tutorial"
  }
];

const RecentBlogPostsSection = () => (
  <section className="section-padding bg-gray-50">
    <div className="container-custom">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay updated with our latest articles on SEO and web development
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link 
                to={post.link}
                className="inline-flex items-center text-seo-accent font-medium hover:underline"
              >
                Read More
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/blog" className="btn-outline">
          Browse All Articles
        </Link>
      </div>
    </div>
  </section>
);

export default RecentBlogPostsSection;

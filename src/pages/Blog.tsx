
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import Layout from '@/components/Layout';

const Blog = () => {
  useEffect(() => {
    document.title = 'Anuj - SEO Specialist | Blog';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Read Anuj\'s latest SEO insights, tips, strategies and case studies. Stay updated with the evolving world of search engine optimization.');
    }
  }, []);

  // Blog posts data
  const blogPosts = [
    {
      id: "fix-crawling-issues-wordpress",
      title: "How to Fix Crawling Issues in WordPress",
      excerpt: "Discover practical solutions to common WordPress crawling problems that may be affecting your site's SEO performance. Learn how to identify and resolve crawlability issues that prevent search engines from properly indexing your content.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      date: "April 15, 2024",
      author: "Anuj",
      tags: ["Technical SEO", "WordPress", "Crawling"],
      readTime: "8 min read"
    },
    {
      id: "local-seo-checklist-2024",
      title: "Local SEO Checklist 2024",
      excerpt: "A comprehensive guide to optimizing your local business presence in 2024 with proven strategies and tactics. This checklist covers everything from Google Business Profile optimization to local link building strategies.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      date: "April 5, 2024",
      author: "Anuj",
      tags: ["Local SEO", "Google Business Profile", "Citations"],
      readTime: "12 min read"
    },
    {
      id: "google-march-2024-update",
      title: "What Google's March 2024 Update Means",
      excerpt: "Analysis of Google's latest algorithm update and practical tips to maintain or improve your rankings. Learn about the key changes in this update and how they might impact your website's visibility in search results.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      date: "March 22, 2024",
      author: "Anuj",
      tags: ["Google Updates", "Algorithm", "Rankings"],
      readTime: "10 min read"
    },
    {
      id: "core-web-vitals-optimization",
      title: "Mastering Core Web Vitals for Better Rankings",
      excerpt: "Learn how to optimize your website's Core Web Vitals to improve user experience and boost your search engine rankings. This guide covers LCP, FID, CLS and practical techniques to enhance your scores.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      date: "March 10, 2024",
      author: "Anuj",
      tags: ["Core Web Vitals", "Page Speed", "User Experience"],
      readTime: "15 min read"
    },
    {
      id: "content-clusters-seo",
      title: "How Content Clusters Boost Your SEO Strategy",
      excerpt: "Understand how implementing a content cluster strategy can significantly improve your topical authority and search rankings. This article explains the pillar-cluster model and provides a step-by-step implementation guide.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      date: "February 28, 2024",
      author: "Anuj",
      tags: ["Content Strategy", "Topical Authority", "Site Structure"],
      readTime: "11 min read"
    },
    {
      id: "seo-competitor-analysis",
      title: "Advanced SEO Competitor Analysis Techniques",
      excerpt: "Discover advanced methods for analyzing your competitors' SEO strategies and identifying opportunities to outrank them. Learn how to extract actionable insights from competitor data to enhance your own SEO efforts.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      date: "February 15, 2024",
      author: "Anuj",
      tags: ["Competitor Analysis", "SEO Strategy", "Research"],
      readTime: "14 min read"
    }
  ];

  // Tags for filter
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">SEO Blog</h1>
            <p className="text-xl text-gray-600">
              Insights, tips, and strategies from my experience in the SEO industry
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-1 gap-10">
                {blogPosts.map((post, index) => (
                  <div 
                    key={post.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col sm:flex-row">
                      <div className="w-full sm:w-1/3 flex-shrink-0">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover aspect-video sm:aspect-square"
                        />
                      </div>
                      <div className="w-full sm:w-2/3 p-6">
                        <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3 gap-4">
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <User size={14} className="mr-1" />
                            <span>{post.author}</span>
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold mb-3">
                          <Link 
                            to={`/blog/${post.id}`}
                            className="hover:text-seo-accent transition-colors"
                          >
                            {post.title}
                          </Link>
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map(tag => (
                            <span 
                              key={tag} 
                              className="text-xs bg-blue-50 text-seo-accent px-3 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Link 
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center text-seo-accent font-medium hover:underline"
                        >
                          Read Full Article
                          <ArrowRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full md:w-1/3">
              <div className="sticky top-24">
                {/* Search Box */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-6 animate-fade-in animate-delay-200">
                  <h3 className="text-xl font-bold mb-4">Search</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seo-accent"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-6 animate-fade-in animate-delay-400">
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map(tag => (
                      <button
                        key={tag}
                        className="text-sm bg-gray-100 hover:bg-seo-accent hover:text-white px-3 py-1 rounded-full transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in animate-delay-600">
                  <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map(post => (
                      <div key={post.id} className="flex gap-3">
                        <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm hover:text-seo-accent transition-colors">
                            <Link to={`/blog/${post.id}`}>{post.title}</Link>
                          </h4>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Subscribe to My Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Stay updated with the latest SEO tips, trends, and strategies directly in your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-seo-accent"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              I respect your privacy. No spam, just quality SEO content.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

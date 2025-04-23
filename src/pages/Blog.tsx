
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import BlogCard from './components/Blog/BlogCard';
import BlogPost from './components/Blog/BlogPost';

const Blog = () => {
  const { id } = useParams<{ id: string }>();
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 'fix-crawling-issues-wordpress',
      title: 'How to Fix Common Crawling Issues in WordPress',
      excerpt: 'Discover practical solutions to common WordPress crawling problems that may be affecting your site\'s SEO performance. Learn how to identify and solve crawl issues.',
      content: (
        <>
          <p>WordPress powers over 40% of all websites on the internet, making it one of the most popular content management systems worldwide. However, its popularity doesn't make it immune to SEO challenges, particularly when it comes to crawling issues.</p>
          
          <h2>Common WordPress Crawling Problems</h2>
          <p>Crawling issues occur when search engines like Google have trouble accessing, processing, or navigating through your WordPress site. Here are some of the most common crawling problems WordPress sites face:</p>
          
          <ul>
            <li><strong>Robots.txt blocking important content</strong> - Improperly configured robots.txt files can prevent search engines from crawling important pages.</li>
            <li><strong>Excessive HTTP redirects</strong> - Too many redirects slow down crawling and can cause search engines to abandon crawling.</li>
            <li><strong>Poor site performance</strong> - Slow-loading pages negatively impact crawl efficiency.</li>
            <li><strong>Broken internal links</strong> - These create dead ends for search engine crawlers.</li>
            <li><strong>Duplicate content issues</strong> - Multiple URLs serving identical content confuse search engines.</li>
          </ul>
          
          <h2>Solutions to Fix WordPress Crawling Issues</h2>
          
          <h3>1. Optimize Your Robots.txt File</h3>
          <p>Your robots.txt file serves as instructions for search engine crawlers. Review it to ensure you're not accidentally blocking important content or directories. A basic WordPress robots.txt file should look something like this:</p>
          <pre>
{`User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php
Disallow: /wp-includes/
Allow: /wp-content/uploads/
Sitemap: https://yourdomain.com/sitemap.xml`}
          </pre>
          
          <h3>2. Fix Redirect Chains</h3>
          <p>Use tools like Screaming Frog or Google Search Console to identify redirect chains. Simplify these by updating links to point directly to final destination URLs rather than through multiple redirects.</p>
          
          <h3>3. Improve Site Performance</h3>
          <p>Optimize your WordPress site speed by:</p>
          <ul>
            <li>Using a quality hosting provider</li>
            <li>Implementing browser caching</li>
            <li>Optimizing images</li>
            <li>Minifying CSS and JavaScript files</li>
            <li>Using a content delivery network (CDN)</li>
          </ul>
          
          <h3>4. Implement XML Sitemaps</h3>
          <p>WordPress plugins like Yoast SEO or Rank Math automatically generate XML sitemaps. Submit these to Google Search Console to help search engines discover and prioritize your content.</p>
          
          <h3>5. Fix Broken Links</h3>
          <p>Regularly audit your site for broken internal links using tools like Screaming Frog. Set up proper 301 redirects for changed URLs or update links to point to relevant existing pages.</p>
          
          <h3>6. Address Duplicate Content</h3>
          <p>Use canonical tags to indicate the preferred version of similar or duplicate pages. This helps search engines understand which version to index and rank.</p>
          
          <h2>Monitoring Your Progress</h2>
          <p>After implementing these fixes, monitor your site's crawling health through Google Search Console. Pay attention to the Coverage and Crawl Stats reports to ensure improvements are recognized by search engines.</p>
          
          <h2>Conclusion</h2>
          <p>Fixing WordPress crawling issues requires a systematic approach to identifying and resolving technical SEO problems. By implementing these solutions, you can ensure search engines efficiently crawl and index your content, improving your site's overall SEO performance.</p>
        </>
      ),
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      date: 'April 15, 2024',
      author: 'Anuj',
      readTime: '8 min',
      tags: ['WordPress', 'Technical SEO', 'Crawling', 'Site Speed']
    },
    {
      id: 'local-seo-checklist-2024',
      title: 'Local SEO Checklist 2024: Everything You Need to Know',
      excerpt: 'A comprehensive checklist for optimizing your local business presence in search engines in 2024, including Google Business Profile optimization, citation building, and more.',
      content: (
        <>
          <p>Local SEO continues to evolve in 2024, with Google placing greater emphasis on proximity, relevance, and prominence for local search rankings. If you're a business with a physical location or serving specific geographic areas, optimizing for local search is essential for connecting with nearby customers.</p>
          
          <h2>Why Local SEO Matters in 2024</h2>
          <p>According to recent studies, 46% of all Google searches have local intent, and 88% of consumers who conduct a local search on their smartphone visit a related store within 24 hours. With these statistics in mind, here's a comprehensive local SEO checklist for 2024:</p>
          
          <h2>Google Business Profile Optimization</h2>
          <ul>
            <li><strong>Claim and verify</strong> your Google Business Profile</li>
            <li><strong>Complete every section</strong> of your profile with accurate information</li>
            <li><strong>Choose the correct primary category</strong> and relevant secondary categories</li>
            <li><strong>Add high-quality photos</strong> (interior, exterior, team, products)</li>
            <li><strong>Add business hours</strong> including special hours for holidays</li>
            <li><strong>Write a compelling business description</strong> with relevant keywords</li>
            <li><strong>Add products/services</strong> with descriptions and prices</li>
            <li><strong>Enable messaging</strong> and respond promptly</li>
            <li><strong>Collect and respond to reviews</strong> (aim for at least 4.2+ rating)</li>
            <li><strong>Use Google Posts</strong> to share updates, offers, and events</li>
          </ul>
          
          <h2>Website Optimization for Local Search</h2>
          <ul>
            <li><strong>Implement local business schema markup</strong> on your website</li>
            <li><strong>Create location-specific pages</strong> if serving multiple areas</li>
            <li><strong>Include NAP (Name, Address, Phone) information</strong> on every page</li>
            <li><strong>Embed Google Map</strong> on contact and location pages</li>
            <li><strong>Optimize title tags and meta descriptions</strong> with location keywords</li>
            <li><strong>Create local content</strong> relevant to your service areas</li>
            <li><strong>Optimize for mobile users</strong> with responsive design</li>
            <li><strong>Improve page load speed</strong> (critical for local SEO)</li>
          </ul>
          
          <h2>Citation Building and Management</h2>
          <ul>
            <li><strong>Ensure NAP consistency</strong> across all platforms</li>
            <li><strong>Create and optimize listings</strong> on primary citation sources:
              <ul>
                <li>Yelp</li>
                <li>Facebook</li>
                <li>Apple Maps</li>
                <li>Bing Places</li>
                <li>Better Business Bureau</li>
              </ul>
            </li>
            <li><strong>Target industry-specific directories</strong> relevant to your business</li>
            <li><strong>Regularly audit citations</strong> for accuracy and completeness</li>
          </ul>
          
          <h2>Review Management Strategy</h2>
          <ul>
            <li><strong>Implement a review generation system</strong> for consistent feedback</li>
            <li><strong>Respond to all reviews</strong> (positive and negative) promptly</li>
            <li><strong>Address negative feedback</strong> constructively and professionally</li>
            <li><strong>Track review sentiment</strong> across platforms</li>
            <li><strong>Incorporate customer feedback</strong> into business operations</li>
          </ul>
          
          <h2>Local Link Building</h2>
          <ul>
            <li><strong>Partner with local complementary businesses</strong> for cross-promotion</li>
            <li><strong>Join local business associations</strong> and chambers of commerce</li>
            <li><strong>Sponsor local events or teams</strong> to earn links and mentions</li>
            <li><strong>Create location-based resource content</strong> that attracts local links</li>
            <li><strong>Get featured in local news outlets</strong> and publications</li>
          </ul>
          
          <h2>Social Media for Local Engagement</h2>
          <ul>
            <li><strong>Maintain active profiles</strong> on platforms your customers use</li>
            <li><strong>Share local-focused content</strong> and engage with community</li>
            <li><strong>Use local hashtags</strong> to increase visibility</li>
            <li><strong>Participate in local social media groups</strong> and discussions</li>
            <li><strong>Cross-promote with other local businesses</strong> on social platforms</li>
          </ul>
          
          <h2>Monitoring and Analytics</h2>
          <ul>
            <li><strong>Track local keyword rankings</strong> for your business</li>
            <li><strong>Monitor Google Business Profile insights</strong> regularly</li>
            <li><strong>Set up local search tracking</strong> in Google Analytics</li>
            <li><strong>Track phone calls and direction requests</strong> from local searches</li>
            <li><strong>Monitor competitor local presence</strong> and strategies</li>
          </ul>
          
          <h2>2024 Local SEO Trends to Implement</h2>
          <ul>
            <li><strong>Focus on review quality and authenticity</strong> as Google's review filters get stricter</li>
            <li><strong>Optimize for voice search</strong> with conversational, location-based keywords</li>
            <li><strong>Leverage Google's local inventory ads</strong> if you're a retailer</li>
            <li><strong>Create video content for your business</strong> to boost engagement</li>
            <li><strong>Implement AI chatbot on website</strong> to improve user experience</li>
          </ul>
          
          <h2>Conclusion</h2>
          <p>Local SEO is increasingly competitive but implementing this checklist will help your business stand out in local search results in 2024. Remember that local SEO is an ongoing process that requires consistent effort and adaptation to changing algorithms and consumer behaviors.</p>
        </>
      ),
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df',
      date: 'March 28, 2024',
      author: 'Anuj',
      readTime: '10 min',
      tags: ['Local SEO', 'Google Business Profile', 'Citations', 'Reviews']
    },
    {
      id: 'google-march-2024-update',
      title: 'What Google\'s March 2024 Core Update Means For Your Website',
      excerpt: 'An analysis of Google\'s latest March 2024 core algorithm update, its impact on websites, and strategies to adapt to these changes.',
      content: (
        <>
          <p>On March 5, 2024, Google began rolling out its first core update of the year, officially completing the rollout on March 19. This update has caused significant ranking fluctuations across many industries, with some websites experiencing dramatic shifts in visibility. Let's break down what this update means and how you should respond.</p>
          
          <h2>Key Observations from the March 2024 Core Update</h2>
          
          <h3>1. E-E-A-T Is More Important Than Ever</h3>
          <p>Google continues to prioritize Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) in its evaluations. Websites that demonstrate clear expertise and authority in their field are seeing positive movements, while those lacking credible content are suffering.</p>
          
          <p>What this means for you:</p>
          <ul>
            <li>Ensure content creators have verifiable expertise in the subject matter</li>
            <li>Include author bios with credentials for important content</li>
            <li>Cite reliable sources and back claims with evidence</li>
            <li>Update outdated content with current information</li>
          </ul>
          
          <h3>2. Content Quality Over Quantity</h3>
          <p>This update appears to further penalize low-quality, AI-generated content that lacks depth and original insights. Google is getting better at identifying content created primarily for ranking rather than helping users.</p>
          
          <p>What this means for you:</p>
          <ul>
            <li>Focus on creating comprehensive, well-researched content</li>
            <li>Add unique perspectives and insights not found elsewhere</li>
            <li>Use AI tools only as assistants, not primary content creators</li>
            <li>Consider consolidating thin content into more substantial resources</li>
          </ul>
          
          <h3>3. User Experience Signals Are Amplified</h3>
          <p>Websites with poor user experience metrics are seeing more significant drops than in previous updates. This includes sites with aggressive ads, intrusive interstitials, and poor Core Web Vitals performance.</p>
          
          <p>What this means for you:</p>
          <ul>
            <li>Ensure ads don't interfere with the main content</li>
            <li>Improve page load times and interactivity</li>
            <li>Optimize for mobile experience</li>
            <li>Reduce layout shifts and improve visual stability</li>
          </ul>
          
          <h3>4. YMYL Content Under Greater Scrutiny</h3>
          <p>"Your Money or Your Life" (YMYL) content that could impact financial stability, health, or safety is being evaluated with extremely high standards. Many health and finance sites have seen dramatic shifts in this update.</p>
          
          <p>What this means for you:</p>
          <ul>
            <li>Include credentials of medical/financial professionals</li>
            <li>Cite peer-reviewed studies and authoritative sources</li>
            <li>Be transparent about who reviews your content</li>
            <li>Update content regularly to reflect current best practices</li>
          </ul>
          
          <h3>5. Enhanced Local Intent Recognition</h3>
          <p>Google seems to be improving its ability to identify and serve local intent queries, with many local businesses seeing changes in visibility for relevant terms.</p>
          
          <p>What this means for you:</p>
          <ul>
            <li>Ensure your Google Business Profile is fully optimized</li>
            <li>Create location-specific content where relevant</li>
            <li>Build local citations and links</li>
            <li>Encourage authentic customer reviews</li>
          </ul>
          
          <h2>How to Respond to the March 2024 Update</h2>
          
          <h3>If Your Site Lost Visibility:</h3>
          <ol>
            <li><strong>Don't panic or make radical changes</strong> immediately</li>
            <li><strong>Analyze the specific pages</strong> that lost rankings</li>
            <li><strong>Evaluate your E-E-A-T signals</strong> compared to competitors now ranking above you</li>
            <li><strong>Audit your content quality</strong>, focusing on depth and uniqueness</li>
            <li><strong>Check Core Web Vitals</strong> and user experience metrics</li>
            <li><strong>Review Google's helpful content guidance</strong> and quality rater guidelines</li>
          </ol>
          
          <h3>If Your Site Gained Visibility:</h3>
          <ol>
            <li><strong>Document what you're doing well</strong> to maintain these practices</li>
            <li><strong>Don't become complacent</strong> – continue improving your content and experience</li>
            <li><strong>Analyze which specific pages improved</strong> and why</li>
            <li><strong>Look for opportunities</strong> to apply successful strategies to other content</li>
          </ol>
          
          <h2>Looking Forward: What's Next for SEO?</h2>
          <p>The March 2024 update reinforces Google's long-term direction: rewarding websites that prioritize valuable user experiences and authentic expertise while penalizing those trying to game the system with manipulative tactics or low-quality content.</p>
          
          <p>As AI content becomes more prevalent, Google will continue refining its ability to identify and reward content that demonstrates genuine human expertise, insight, and care. The bar for "quality content" continues to rise, making it essential to focus on creating truly valuable resources rather than merely meeting minimum requirements for rankings.</p>
          
          <h2>Conclusion</h2>
          <p>Google's March 2024 core update emphasizes the company's ongoing commitment to surfacing high-quality, trustworthy content from demonstrably authoritative sources. By focusing on creating genuinely helpful content, building real expertise, and providing excellent user experiences, you'll not only weather this update but position yourself for long-term success in Google's evolving search landscape.</p>
        </>
      ),
      image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd',
      date: 'March 21, 2024',
      author: 'Anuj',
      readTime: '9 min',
      tags: ['Google Update', 'Algorithm', 'SEO Strategy', 'E-E-A-T']
    }
  ];

  useEffect(() => {
    if (id) {
      const blogPost = blogPosts.find(post => post.id === id);
      document.title = blogPost 
        ? `${blogPost.title} | Anuj - SEO Specialist Blog`
        : 'Blog Post Not Found | Anuj - SEO Specialist';
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && blogPost) {
        metaDesc.setAttribute('content', blogPost.excerpt);
      }
    } else {
      document.title = 'SEO Blog & Insights | Anuj - SEO Specialist';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Read the latest insights on SEO strategies, best practices, and updates from Anuj, SEO specialist. Regular articles to help improve your website\'s search performance.');
      }
    }
  }, [id]);

  // Find the blog post if an ID is provided
  const selectedPost = id ? blogPosts.find(post => post.id === id) : null;
  
  // Filter posts based on search query
  const filteredPosts = searchQuery 
    ? blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : blogPosts;

  return (
    <Layout>
      {selectedPost ? (
        <section className="pt-32 pb-20">
          <div className="container-custom">
            <BlogPost post={selectedPost} />
          </div>
        </section>
      ) : (
        <>
          {/* Header Section */}
          <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
            <div className="container-custom">
              <div className="text-center max-w-3xl mx-auto animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">SEO Insights & Strategies</h1>
                <p className="text-xl text-gray-600">
                  Latest articles, tips, and updates on all things SEO from my professional experience
                </p>
                
                {/* Search */}
                <div className="mt-8 max-w-lg mx-auto">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-seo-accent focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Blog Grid */}
          <section className="py-16">
            <div className="container-custom">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <h2 className="text-2xl font-semibold mb-2">No articles found</h2>
                  <p className="text-gray-600">
                    Try adjusting your search terms or browse all articles by clearing the search.
                  </p>
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="mt-4 btn-outline"
                  >
                    View All Articles
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, index) => (
                    <BlogCard
                      key={post.id}
                      id={post.id}
                      title={post.title}
                      excerpt={post.excerpt}
                      image={post.image}
                      date={post.date}
                      author={post.author}
                      readTime={post.readTime}
                      delay={index * 100}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Subscribe Section */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with SEO Insights</h2>
                <p className="text-gray-600 mb-6">
                  Subscribe to receive the latest SEO tips, strategies, and industry updates directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-seo-accent focus:border-transparent"
                  />
                  <button type="button" className="btn-primary whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  I respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </section>
        </>
      )}
    </Layout>
  );
};

export default Blog;


import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import CaseStudyCard from './components/CaseStudies/CaseStudyCard';
import CaseStudyDetails from './components/CaseStudies/CaseStudyDetails';

const CaseStudies = () => {
  const { id } = useParams<{ id: string }>();
  
  const caseStudiesData = [
    {
      id: 'xgrepair',
      title: 'Local SEO Success',
      client: 'xgrepair.com',
      website: 'https://xgrepair.com',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      challenge: 'Improve online visibility and drive traffic for a local cell phone repair service.',
      strategy: 'Focused on local SEO, optimizing the Google My Business listing, targeting geo-specific keywords for "cell phone repair in Katy" and "repair services near me."',
      tools: ['Google My Business', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'Grammarly'],
      results: [
        'Increased local search visibility by 40%',
        'Improved Google Maps ranking from position #8 to #3',
        'Boosted organic traffic by 35% in 3 months',
        'Increased phone calls through GMB by 28%'
      ]
    },
    {
      id: 'oneticktechnologies',
      title: 'Course Visibility Enhancement',
      client: 'oneticktechnologies.com',
      website: 'https://oneticktechnologies.com',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      challenge: 'Attract more traffic to the course offering website and improve rankings for digital marketing course-related keywords.',
      strategy: 'Performed on-page SEO, optimized course content with relevant keywords, and focused on backlink building to improve domain authority.',
      tools: ['SEMrush', 'Google Search Console', 'Grammarly', 'Canva'],
      results: [
        'Boosted organic traffic by 45%',
        'Improved keyword rankings for 22 target terms',
        'Increased course inquiries by 30%',
        'Reduced bounce rate by 15%'
      ]
    },
    {
      id: 'onetickcdc',
      title: 'Technical SEO Improvements',
      client: 'onetickcdc.com',
      website: 'https://onetickcdc.com',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      challenge: 'Increase the online presence of a course provider offering digital marketing and other educational courses.',
      strategy: 'Focused on technical SEO improvements, ensuring the site was mobile-friendly, fixing crawl issues, and optimizing page speed. Implemented on-page SEO for course-related keywords.',
      tools: ['SEMrush', 'Google Search Console', 'Screaming Frog', 'Canva'],
      results: [
        'Improved website performance score from 65 to 92',
        'Boosted organic traffic by 35%',
        'Reduced page load time by 40%',
        'Fixed 87 technical SEO issues'
      ]
    },
    {
      id: 'weldarcindia',
      title: 'Industrial Keyword Optimization',
      client: 'weldarcindia.com',
      website: 'https://weldarcindia.com',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
      challenge: 'Increase visibility for a specialized manufacturer of fiber laser cutting machines.',
      strategy: 'Implemented on-page SEO for industrial and manufacturing keywords, optimized content for product categories, and conducted competitor analysis to identify backlink opportunities.',
      tools: ['Ahrefs', 'SEMrush', 'Screaming Frog', 'QuillBot'],
      results: [
        'Improved rankings for key industrial keywords',
        'Increased organic traffic by 30%',
        'Generated 15 high-quality backlinks',
        'Improved bounce rate from 65% to 48%'
      ]
    },
    {
      id: 'serviceapartments',
      title: 'Location-Based SEO',
      client: 'serviceapartmentsindelhi.com',
      website: 'https://serviceapartmentsindelhi.com',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
      challenge: 'Improve the online presence of service apartments in Delhi and target the right customers searching for rental properties.',
      strategy: 'Focused on local SEO, optimized the website for location-based keywords such as "service apartments in Delhi" and created content to target potential clients.',
      tools: ['Google My Business', 'Ahrefs', 'Google Search Console', 'Canva'],
      results: [
        'Increased local search rankings',
        'Higher number of bookings through organic search',
        'Improved visibility for 15+ location-specific keywords',
        '35% increase in website inquiries'
      ]
    },
    {
      id: 'techspirals',
      title: 'Course SEO Strategy',
      client: 'techspirals.com',
      website: 'https://techspirals.com',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
      challenge: 'Attract more students to an SAP training institute and improve rankings for course-related keywords.',
      strategy: 'Implemented on-page SEO for course-specific keywords, enhanced content with internal linking, and optimized meta tags and descriptions for better search visibility.',
      tools: ['SEMrush', 'Google Analytics', 'Screaming Frog', 'Grammarly'],
      results: [
        'Increased course-related search traffic',
        'Improved rankings for SAP-related terms',
        '40% increase in course enrollments',
        '25% reduction in PPC spend due to organic growth'
      ]
    },
    {
      id: 'taxmother',
      title: 'Tax Service Visibility Boost',
      client: 'taxmother.com',
      website: 'https://taxmother.com',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f',
      challenge: 'Low organic traffic and visibility for a tax consultancy website.',
      strategy: 'Performed on-page SEO optimization for tax-related keywords, improved content strategy, and conducted backlink building to increase domain authority.',
      tools: ['SEMrush', 'Google Search Console', 'QuillBot'],
      results: [
        'Improved keyword rankings for tax services',
        'Increased organic traffic by 40%',
        '22% growth in client inquiries',
        'Domain authority improvement from 15 to 28'
      ]
    },
    {
      id: 'arawebtechnologies',
      title: 'IT Services SEO',
      client: 'arawebtechnologies.com',
      website: 'https://arawebtechnologies.com',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      challenge: 'Poor online presence for a web development and IT services company.',
      strategy: 'Focused on on-page SEO and backlinking, optimizing technical aspects such as meta tags, descriptions, and keywords, as well as improving internal linking.',
      tools: ['SEMrush', 'Screaming Frog', 'Grammarly'],
      results: [
        'Improved organic traffic by 25%',
        'Achieved better rankings for technology-related terms',
        'Reduced bounce rate from 70% to 55%',
        'Increased page session duration by 28%'
      ]
    },
    {
      id: 'parentlifecoach',
      title: 'Coaching Service Optimization',
      client: 'theparentlifecoach.com',
      website: 'https://theparentlifecoach.com',
      image: 'https://images.unsplash.com/photo-1591951425300-149d37a3ed52',
      challenge: 'Attract more clients to a parenting coaching business and increase visibility in search.',
      strategy: 'Focused on content optimization for parenting-related keywords, optimized blog posts, and improved meta tags and headings.',
      tools: ['Google Analytics', 'Ahrefs', 'Grammarly'],
      results: [
        'Increased organic traffic to blog posts',
        'Generated new leads for the coaching service',
        'Improved keyword rankings for 12 target keywords',
        'Achieved 35% more newsletter signups'
      ]
    },
    {
      id: 'mistersustainable',
      title: 'Eco-Friendly Brand Growth',
      client: 'mistersustainable.com',
      website: 'https://mistersustainable.com',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
      challenge: 'Low online presence for an eco-friendly lifestyle brand.',
      strategy: 'Implemented content optimization for eco-friendly keywords, improved website structure, and built backlinks from related green lifestyle websites.',
      tools: ['SEMrush', 'Ahrefs', 'Google Search Console', 'Canva'],
      results: [
        'Increased search rankings for eco-friendly keywords',
        'Boosted traffic to the website by 32%',
        'Improved average time on page by 40%',
        'Generated 18 quality backlinks from relevant sites'
      ]
    }
  ];

  useEffect(() => {
    if (id) {
      const caseStudy = caseStudiesData.find(cs => cs.id === id);
      document.title = caseStudy 
        ? `${caseStudy.client} - ${caseStudy.title} | Anuj SEO Case Study`
        : 'Case Study Not Found | Anuj SEO';
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && caseStudy) {
        metaDesc.setAttribute('content', `See how I helped ${caseStudy.client} ${caseStudy.challenge.toLowerCase()} Learn about the strategy, tools, and results achieved.`);
      }
    } else {
      document.title = 'SEO Case Studies | Anuj - SEO Specialist';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Explore Anuj\'s SEO case studies showcasing real results for clients across various industries. See how strategic SEO can improve visibility and drive growth.');
      }
    }
  }, [id]);

  // Find the case study if an ID is provided
  const selectedCaseStudy = id ? caseStudiesData.find(cs => cs.id === id) : null;

  return (
    <Layout>
      {selectedCaseStudy ? (
        <section className="pt-32 pb-20">
          <div className="container-custom">
            <CaseStudyDetails caseStudy={selectedCaseStudy} />
          </div>
        </section>
      ) : (
        <>
          {/* Header Section */}
          <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
            <div className="container-custom">
              <div className="text-center max-w-3xl mx-auto animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">SEO Case Studies</h1>
                <p className="text-xl text-gray-600">
                  Real results for real clients - explore how my SEO strategies helped businesses improve their online visibility
                </p>
              </div>
            </div>
          </section>

          {/* Case Studies Grid */}
          <section className="py-16">
            <div className="container-custom">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudiesData.map((caseStudy, index) => (
                  <CaseStudyCard
                    key={caseStudy.id}
                    id={caseStudy.id}
                    title={caseStudy.title}
                    client={caseStudy.client}
                    image={caseStudy.image}
                    challenge={caseStudy.challenge}
                    results={caseStudy.results.slice(0, 2)}
                    tools={caseStudy.tools}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Be My Next Success Story?</h2>
                <p className="text-gray-600 mb-8">
                  Let's work together to improve your website's search visibility and drive more organic traffic to your business.
                </p>
                <Link 
                  to="/contact" 
                  className="btn-primary inline-flex items-center"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </section>
        </>
      )}
    </Layout>
  );
};

export default CaseStudies;

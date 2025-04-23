
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import HeroSection from './components/Home/HeroSection';
import SkillsToolsSection from './components/Home/SkillsToolsSection';
import FeaturedProjectsSection from './components/Home/FeaturedProjectsSection';
import RecentBlogPostsSection from './components/Home/RecentBlogPostsSection';
import CTASection from './components/Home/CTASection';

const Index = () => {
  useEffect(() => {
    document.title = 'Anuj - SEO Specialist Driving Organic Growth & Performance';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Anuj is a 25-year-old SEO specialist from India with expertise in technical SEO, on-page optimization, content strategy, and improving search visibility for businesses.');
    }
  }, []);

  return (
    <Layout>
      <HeroSection />
      <SkillsToolsSection />
      <FeaturedProjectsSection />
      <RecentBlogPostsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;

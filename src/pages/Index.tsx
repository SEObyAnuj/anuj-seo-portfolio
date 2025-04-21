
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import HeroSection from './components/Home/HeroSection';
import ServicesSection from './components/Home/ServicesSection';
import FeaturedProjectsSection from './components/Home/FeaturedProjectsSection';
import SkillsToolsSection from './components/Home/SkillsToolsSection';
import RecentBlogPostsSection from './components/Home/RecentBlogPostsSection';
import CTASection from './components/Home/CTASection';

const Index = () => {
  useEffect(() => {
    document.title = 'Anuj & Rajat | SEO & Web Development Experts';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Anuj and Rajat are experienced SEO and Web Development specialists based in India, helping businesses improve their online presence with proven strategies.');
    }
  }, []);

  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <SkillsToolsSection />
      <RecentBlogPostsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;

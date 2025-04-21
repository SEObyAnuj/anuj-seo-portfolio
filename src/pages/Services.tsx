
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import ServiceHeaderSection from './components/Services/ServiceHeaderSection';
import WebDevelopmentServicesSection from './components/Services/WebDevelopmentServicesSection';
import SEOServicesSection from './components/Services/SEOServicesSection';
import PackagesSection from './components/Services/PackagesSection';
import ProcessSection from './components/Services/ProcessSection';
import ServicesCTASection from './components/Services/ServicesCTASection';

const Services = () => {
  useEffect(() => {
    document.title = 'Our Services | AR Team - Web & SEO Experts';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Comprehensive web development and SEO services offered by Anuj and Rajat to help your business establish a strong online presence.');
    }
  }, []);

  return (
    <Layout>
      <ServiceHeaderSection />
      <WebDevelopmentServicesSection />
      <SEOServicesSection />
      <PackagesSection />
      <ProcessSection />
      <ServicesCTASection />
    </Layout>
  );
};

export default Services;

import Hero from '@/components/Hero';
import ServicePillars from '@/components/ServicePillars';
import WhyPentaArch from '@/components/WhyPentaArch';
import ClientReviews from '@/components/ClientReviews';
import CtaStrip from '@/components/CtaStrip';
import PortfolioHighlight from '@/components/PortfolioHighlight';
import BlogHighlight from '@/components/BlogHighlight';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicePillars />
      <WhyPentaArch />
      <PortfolioHighlight />
      <ClientReviews />
      <BlogHighlight />
      <CtaStrip />
    </>
  );
}

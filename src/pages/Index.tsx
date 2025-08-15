import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import WorkspaceOptions from '@/components/WorkspaceOptions';
import Amenities from '@/components/Amenities';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';

const Index = () => {
  return (
    <>
      <main className="relative">
        <Hero />
        <WhyChooseUs />
        <WorkspaceOptions />
        <Amenities />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
};

export default Index;
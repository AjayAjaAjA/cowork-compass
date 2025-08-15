import Header from '@/components/Header';
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
      <Header />
      <main className="relative">
        <Hero />
        <div id="about">
          <WhyChooseUs />
        </div>
        <div id="workspaces">
          <WorkspaceOptions />
        </div>
        <Amenities />
        <div id="pricing">
          <Pricing />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
};

export default Index;
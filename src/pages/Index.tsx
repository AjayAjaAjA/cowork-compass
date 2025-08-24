import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
// import WorkspaceOptions from '@/components/WorkspaceOptions';
import Amenities from '@/components/Amenities';
import Gallery from '@/components/Gallery';
import VideoSection from '@/components/VideoSection';
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
        <Amenities />
        <div id="gallery">
          <Gallery />
        </div>
        <VideoSection />
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
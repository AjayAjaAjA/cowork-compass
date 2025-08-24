import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRef, useEffect } from 'react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Attempt to play the video once on mount (muted autoplay should work in most browsers)
    const v = videoRef.current;
    if (v) {
      // try/catch because some browsers may block play even if muted
      v.play().catch(() => {
        /* ignore play errors */
      });
    }
  }, []);

  return (
    // Cropped hero: use a shorter fixed viewport height so the video is cropped
    <section className="relative h-[70vh] lg:h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/src/assets/home-hero.mp4"
          poster="/src/assets/hero-bg.jpg"
          muted
          playsInline
          autoPlay
          preload="metadata"
          // no loop so it plays only once
          onEnded={(e) => {
            const t = e.currentTarget as HTMLVideoElement;
            t.pause();
            // keep last frame visible; do not reset currentTime so it remains at end
          }}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center text-white container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="heading-xl text-balance mb-6">
            Your True North for{' '}
            <span className="bg-gradient-to-r from-accent to-gold-400 bg-clip-text text-transparent">
              Productivity
            </span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Work. Connect. Grow.
          </motion.p>
          
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-outline-gold px-8 py-6 text-lg font-semibold min-w-[180px]"
            >
              View Pricing
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
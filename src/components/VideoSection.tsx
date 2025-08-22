import { motion } from 'framer-motion';
import { useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section className="section-padding bg-muted/20">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-foreground mb-6">
            Experience True North <span className="text-accent">Coworking</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what makes our workspace special through the eyes of our community
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for video - you can replace this with actual video */}
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="rounded-full w-20 h-20 bg-accent hover:bg-accent/90 shadow-2xl"
                      onClick={handlePlayPause}
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8 text-accent-foreground" />
                      ) : (
                        <Play className="w-8 h-8 text-accent-foreground ml-1" />
                      )}
                    </Button>
                  </motion.div>
                  <p className="text-foreground mt-4 font-medium">
                    Watch Our Workspace Tour
                  </p>
                </div>
              </div>

              {/* Video Controls Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute bottom-4 right-4 flex gap-2"
              >
                <Button
                  variant="secondary"
                  size="sm"
                  className="rounded-full bg-black/50 hover:bg-black/70 text-white"
                  onClick={handleMuteToggle}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </Button>
              </motion.div>
            </div>

            {/* Floating elements for visual interest */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                A Community That Inspires
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover how our thoughtfully designed spaces foster creativity, 
                collaboration, and productivity. From quiet focus areas to vibrant 
                social zones, every corner is crafted to support your success.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { number: "500+", label: "Happy Members" },
                { number: "50+", label: "Companies" },
                { number: "24/7", label: "Access" },
                { number: "99%", label: "Satisfaction" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-xl bg-card border border-border/50"
                >
                  <div className="text-2xl font-bold text-accent">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Schedule Your Visit
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
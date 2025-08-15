import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, Star } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Prime Location',
    description: 'Located in the heart of the business district with easy access to transportation, restaurants, and amenities.'
  },
  {
    icon: Clock,
    title: 'Flexible Plans',
    description: 'Choose from daily, weekly, or monthly memberships that adapt to your changing business needs.'
  },
  {
    icon: Star,
    title: 'Premium Amenities',
    description: 'High-speed internet, modern furniture, meeting rooms, and complimentary coffee to fuel your productivity.'
  }
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-primary mb-4">Why Choose True North?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need to succeed in a professional, inspiring environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="heading-md text-primary mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
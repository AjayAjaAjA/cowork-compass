import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wifi, Clock, Users, Coffee, Calendar, Printer } from 'lucide-react';

const amenities = [
  { icon: Wifi, label: 'High-Speed WiFi' },
  { icon: Clock, label: '24/7 Access' },
  { icon: Users, label: 'Meeting Rooms' },
  { icon: Coffee, label: 'Premium Coffee' },
  { icon: Calendar, label: 'Networking Events' },
  { icon: Printer, label: 'Printing Services' }
];

const Amenities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-navy-50" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-primary mb-4">Premium Amenities</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to work productively and comfortably, all included in your membership.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="text-center group cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-2xl mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                <amenity.icon className="w-10 h-10 text-accent" />
              </div>
              <p className="font-medium text-primary group-hover:text-accent transition-colors duration-300">
                {amenity.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
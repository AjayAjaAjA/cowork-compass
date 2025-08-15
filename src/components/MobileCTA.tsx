import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const MobileCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="mobile-cta"
    >
      <Button className="btn-gold w-full shadow-lg" size="lg">
        <Phone className="w-5 h-5 mr-2" />
        Book a Tour
      </Button>
    </motion.div>
  );
};

export default MobileCTA;
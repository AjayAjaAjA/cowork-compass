import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Lite',
    description: 'Perfect for occasional use',
    popular: false,
    pricing: {
      daily: '$25',
      weekly: '$120',
      monthly: '$399'
    },
    features: [
      'Hot desk access',
      'High-speed WiFi',
      'Coffee & tea',
      'Basic printing',
      'Community events'
    ]
  },
  {
    name: 'Pro',
    description: 'Best for regular professionals',
    popular: true,
    pricing: {
      daily: '$35',
      weekly: '$180',
      monthly: '$599'
    },
    features: [
      'Dedicated desk',
      'High-speed WiFi',
      'Meeting room credits',
      'Premium coffee',
      '24/7 access',
      'Phone booth access',
      'Networking events'
    ]
  },
  {
    name: 'Team',
    description: 'Ideal for growing teams',
    popular: false,
    pricing: {
      daily: '$50',
      weekly: '$280',
      monthly: '$999'
    },
    features: [
      'Private office',
      'Team collaboration space',
      'Unlimited meeting rooms',
      'Admin support',
      '24/7 access',
      'Priority booking',
      'Custom branding'
    ]
  }
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-primary mb-4">Flexible Pricing Plans</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your schedule and budget. No long-term commitments required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`card-elegant p-8 relative ${
                plan.popular ? 'ring-2 ring-accent transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                  Most Popular
                </Badge>
              )}
              
              <div className="text-center mb-8">
                <h3 className="heading-md text-primary mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">
                    {plan.pricing.monthly}
                    <span className="text-lg font-normal text-muted-foreground">/month</span>
                  </div>
                  <div className="text-sm text-muted-foreground space-x-4">
                    <span>{plan.pricing.weekly}/week</span>
                    <span>{plan.pricing.daily}/day</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${plan.popular ? 'btn-gold' : 'btn-navy'}`}
                size="lg"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
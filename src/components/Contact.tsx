import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
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
          <h2 className="heading-lg text-primary mb-4">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to join our community? Contact us today or schedule a tour to see our spaces firsthand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-elegant p-8"
          >
            <h3 className="heading-md text-primary mb-6">Send us a message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="Enter your first name"
                    className="bg-background border-border focus:ring-accent"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Enter your last name"
                    className="bg-background border-border focus:ring-accent"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email"
                  className="bg-background border-border focus:ring-accent"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="Enter your phone number"
                  className="bg-background border-border focus:ring-accent"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your workspace needs..."
                  rows={4}
                  className="bg-background border-border focus:ring-accent resize-none"
                />
              </div>
              
              <Button className="btn-gold w-full" size="lg">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card-elegant p-8"
          >
            <h3 className="heading-md text-primary mb-6">Visit Our Location</h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold text-primary mb-1">Address</h4>
                <p className="text-muted-foreground">
                  123 Business District<br />
                  Downtown, NY 10001
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-1">Hours</h4>
                <p className="text-muted-foreground">
                  Monday - Friday: 7:00 AM - 10:00 PM<br />
                  Weekend: 8:00 AM - 8:00 PM
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-1">Contact</h4>
                <p className="text-muted-foreground">
                  Phone: (555) 123-4567<br />
                  Email: hello@truenorthcoworking.com
                </p>
              </div>
            </div>

            {/* Embedded Map Placeholder */}
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-muted-foreground">Interactive Map</p>
                <p className="text-sm text-muted-foreground/70">123 Business District, Downtown NY</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
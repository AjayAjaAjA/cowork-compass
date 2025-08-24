import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', href: '#about' },
  // Removed workspace options per request
    { label: 'Pricing', href: '#pricing' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              True North{' '}
              <span className="text-accent">Coworking</span>
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your true north for productivity. Join our community of innovators, entrepreneurs, and professionals in Tirunelveli.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Coworking Space, Tirunelveli, Tamil Nadu 627001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>hello@tirunelvelicoworking.com</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-primary-foreground/80">Hot Desk Access</li>
              <li className="text-primary-foreground/80">Private Offices</li>
              <li className="text-primary-foreground/80">Meeting Rooms</li>
              <li className="text-primary-foreground/80">Event Spaces</li>
              <li className="text-primary-foreground/80">Virtual Offices</li>
              <li className="text-primary-foreground/80">Business Support</li>
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Follow us for updates, events, and workspace inspiration.
            </p>
            
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="text-xs text-primary-foreground/60">
              <p>Monday - Friday: 9:00 AM - 9:00 PM</p>
              <p>Saturday: 9:00 AM - 6:00 PM • Sunday: Closed</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} True North Coworking. All rights reserved.
          </p>
           <div className="flex gap-6 text-sm">
            <a href="#privacy" className="text-primary-foreground/60 hover:text-blue-400 transition-colors">
              Devopled by HIG AI Automaiton 
            </a>
            </div>
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
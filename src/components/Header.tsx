import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logoImg from '@/assets/True-North-Logo.jpeg';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Workspaces', href: '/#workspaces' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const isActive = (href: string) => {
    // Handle exact root
    if (href === '/') return location.pathname === '/';

    // If link contains a hash (e.g. '/#pricing' or '#pricing'), only mark active
    // when both pathname and location.hash match. This avoids highlighting
    // all hash links when the user is on the home page.
    if (href.includes('#')) {
      const [pathPart, hashPart] = href.split('#');
      const targetPath = pathPart && pathPart.length > 0 ? pathPart : '/';
      const targetHash = `#${hashPart}`;
      return location.pathname === targetPath && location.hash === targetHash;
    }

    // Fallback: match pathname
    return location.pathname === href;
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container-wide flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span>Tirunelveli, Tamil Nadu, India</span>
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
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-6 h-6 text-primary-foreground/80 hover:text-accent transition-colors duration-200"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-background/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50"
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={logoImg}
                alt="True North Logo"
                className="w-10 h-full object-cover rounded-lg"
              />
              <div className="hidden md:block">
                <h1 className="text-xl lg:text-2xl font-bold text-foreground">
                  True North <span className="text-accent">Coworking</span>
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-accent relative inline-flex items-center px-2 py-1 ${
                      active ? 'text-accent' : 'text-muted-foreground'
                    }`}
                  >
                    {item.name}
                    {active && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-accent"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <Link to="/contact">Get Quote</Link>
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                <Link to="/#contact">Book Tour</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-md overflow-hidden"
            >
              <div className="container-wide py-4">
                <nav className="space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-sm font-medium transition-colors duration-200 py-2 ${
                        isActive(item.href)
                          ? 'text-accent'
                          : 'text-muted-foreground hover:text-accent'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4">
                    <Button size="sm" className="w-full bg-gradient-to-r from-primary to-accent" asChild>
                      <Link to="/#contact" onClick={() => setIsMenuOpen(false)}>
                        Book Tour
                      </Link>
                    </Button>
                  </div>
                </nav>
                
                {/* Mobile Social Links */}
                <div className="flex items-center justify-center gap-4 pt-6 border-t border-border/50 mt-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
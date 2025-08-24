import { motion } from 'framer-motion';
import { Users, Award, Target, Heart, Clock, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission Focused',
      description: 'We believe in providing the perfect environment for professionals to achieve their goals and reach their true north.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Building connections and fostering collaboration among innovators, entrepreneurs, and creative professionals.'
    },
    {
      icon: Award,
      title: 'Excellence First',
      description: 'Premium facilities, cutting-edge technology, and exceptional service define our commitment to excellence.'
    },
    {
      icon: Heart,
      title: 'People Centered',
      description: 'Every decision we make prioritizes the needs, comfort, and success of our community members.'
    },
    {
      icon: Clock,
      title: 'Always Available',
      description: '24/7 access ensures our members can work when inspiration strikes, not just during business hours.'
    },
    {
      icon: Shield,
      title: 'Secure & Safe',
      description: 'Advanced security systems and protocols ensure a safe, secure environment for all members.'
    }
  ];

  // const team = [
  //   {
  //     name: 'Sarah Chen',
  //     role: 'Founder & CEO',
  //     bio: 'Former tech executive turned workspace innovator. Sarah founded True North after experiencing the challenges of remote work firsthand.',
  //     image: '/api/placeholder/300/300'
  //   },
  //   {
  //     name: 'Marcus Rodriguez',
  //     role: 'Head of Community',
  //     bio: 'Community builder with 10+ years in hospitality. Marcus ensures every member feels welcomed and connected.',
  //     image: '/api/placeholder/300/300'
  //   },
  //   {
  //     name: 'Emily Watson',
  //     role: 'Operations Director',
  //     bio: 'Operations expert focused on creating seamless experiences. Emily oversees daily operations and member services.',
  //     image: '/api/placeholder/300/300'
  //   }
  // ];

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground py-24">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                About True North{' '}
                <span className="text-accent">Coworking</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                We're more than just a workspace – we're your compass for professional success. 
                Since 2020, we've been helping professionals find their true north through 
                premium coworking experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    True North Coworking was born from a simple belief: that the right environment 
                    can unlock extraordinary potential. Our founder, Sarah Chen, experienced the 
                    isolation and distractions of working from home during the global shift to remote work.
                  </p>
                  <p>
                    Determined to create something better, she envisioned a space where professionals 
                    could maintain the flexibility of remote work while enjoying the energy, community, 
                    and focus of a premium office environment.
                  </p>
                  <p>
                    Today, True North serves over 500 professionals across various industries, from 
                    startup founders and freelancers to remote teams from Fortune 500 companies. 
                    We've become the compass that guides ambitious professionals toward their goals.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Single poster image with play button */}
                <VideoPlayerPlaceholder />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-muted/30">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These core principles guide everything we do and shape the experience 
                we create for our community.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        Team Section
        {/* <section className="py-24 bg-background">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The passionate people behind True North who are dedicated to your success.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl mb-6 overflow-hidden">
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <span className="text-6xl font-bold text-muted-foreground">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-accent font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
};

export default About;

// Simple cropped autoplaying preview (plays once on visit)
const VideoPlayerPlaceholder = () => {
  return (
    <div className="w-full relative rounded-3xl overflow-hidden shadow-lg">
      {/* Cropped preview: fixed height with object-cover to crop; poster fallback if autoplay is blocked */}
      <video
        src="/src/assets/about-us.mp4"
        poster="/src/assets/hero-bg.jpg"
        muted
        playsInline
        autoPlay
        preload="auto"
        aria-label="About True North preview video"
        className="w-full h-64 md:h-80 lg:h-96 object-cover object-center block rounded-xl"
      />
    </div>
  );
};
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'Personal information you provide when booking tours, memberships, or contacting us',
        'Usage data about how you interact with our website and services',
        'Payment information processed securely through our payment partners',
        'Communication records including emails, phone calls, and chat messages'
      ]
    },
    {
      title: 'How We Use Your Information',
      content: [
        'To provide and improve our coworking services',
        'To process bookings, payments, and membership applications',
        'To communicate about your membership and our services',
        'To send marketing communications (with your consent)',
        'To comply with legal obligations and protect our rights'
      ]
    },
    {
      title: 'Information Sharing',
      content: [
        'We do not sell, trade, or rent your personal information',
        'We may share information with service providers who assist us',
        'We may disclose information when required by law',
        'Business transfers may include your information as part of the assets'
      ]
    },
    {
      title: 'Data Security',
      content: [
        'We implement industry-standard security measures',
        'All payment information is processed through secure, encrypted channels',
        'Access to personal information is limited to authorized personnel',
        'Regular security audits and updates to our systems'
      ]
    },
    {
      title: 'Your Rights',
      content: [
        'Access: Request a copy of your personal information',
        'Correction: Request corrections to inaccurate information',
        'Deletion: Request deletion of your information (subject to legal requirements)',
        'Portability: Request transfer of your information to another service',
        'Objection: Object to certain processing of your information'
      ]
    },
    {
      title: 'Cookies and Tracking',
      content: [
        'We use cookies to improve your browsing experience',
        'Analytics cookies help us understand website usage',
        'Marketing cookies may be used for targeted advertising',
        'You can control cookie settings through your browser'
      ]
    }
  ];

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
                Privacy Policy
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Your privacy is important to us. This policy explains how we collect, 
                use, and protect your information.
              </p>
              <div className="mt-8 text-sm text-primary-foreground/80">
                Last updated: December 15, 2024
              </div>
            </motion.div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-24 bg-background">
          <div className="container-wide max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <div className="mb-12">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At True North Coworking, we are committed to protecting your privacy and 
                  ensuring the security of your personal information. This Privacy Policy 
                  explains our practices regarding the collection, use, and disclosure of 
                  information when you use our services.
                </p>
              </div>

              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground leading-relaxed flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-muted/30 rounded-2xl p-8 mt-16"
              >
                <h2 className="text-2xl font-bold mb-4">Contact Us About Privacy</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us:
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> privacy@truenorthcoworking.com</p>
                  <p><strong>Phone:</strong> (555) 123-4567</p>
                  <p><strong>Address:</strong> 123 Business District, Downtown NY, 10001</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;
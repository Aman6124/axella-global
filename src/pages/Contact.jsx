import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      details: ['+91 7249899183'],
      action: 'tel:+917249899183'
    },
    {
      icon: '✉️',
      title: 'Email',
      details: ['info@axellaglobal.com', 'support@axellaglobal.com'],
      action: 'mailto:info@axellaglobal.com'
    },
    {
      icon: '📍',
      title: 'Address',
      details: ['Axella Global Logistics', 'Taloja, Mumbai', 'Maharashtra, India'],
      action: 'https://maps.google.com/?q=Taloja,Mumbai'
    },
    {
      icon: '🕒',
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed'],
      action: null
    }
  ];

  const offices = [
    {
      city: 'Mumbai (Head Office)',
      address: 'Taloja, Mumbai, Maharashtra',
      phone: '+91 7249899183',
      email: 'mumbai@axellaglobal.com'
    },
    {
      city: 'Pune',
      address: 'Hinjewadi, Pune, Maharashtra',
      phone: '+91 7249899183',
      email: 'pune@axellaglobal.com'
    },
    {
      city: 'Bangalore',
      address: 'Whitefield, Bangalore, Karnataka',
      phone: '+91 7249899183',
      email: 'bangalore@axellaglobal.com'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-navy to-blue-900 text-white section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Get in touch with our logistics experts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-primary-navy mb-6">Get In Touch</h3>
                <p className="text-gray-600 mb-8">
                  Ready to streamline your logistics? Contact our team of experts for personalized solutions 
                  and competitive pricing.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">{info.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-navy mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm mb-1">{detail}</p>
                      ))}
                      {info.action && (
                        <a 
                          href={info.action}
                          className="text-primary-orange hover:text-orange-600 transition-colors text-sm font-medium"
                        >
                          {info.title === 'Phone' ? 'Call Now' : info.title === 'Email' ? 'Send Email' : 'View on Map'}
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Our Offices
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our strategically located offices across India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg text-center"
              >
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold text-primary-navy mb-3">{office.city}</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="text-sm">{office.address}</p>
                  <p className="text-sm">
                    <a href={`tel:${office.phone}`} className="text-primary-orange hover:text-orange-600">
                      {office.phone}
                    </a>
                  </p>
                  <p className="text-sm">
                    <a href={`mailto:${office.email}`} className="text-primary-orange hover:text-orange-600">
                      {office.email}
                    </a>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Find Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Located in Taloja, Mumbai - easily accessible from all major highways
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-4">🗺️</div>
                <p className="text-lg font-medium mb-2">Interactive Map</p>
                <p className="text-sm mb-4">Taloja, Mumbai, Maharashtra</p>
                <a 
                  href="https://maps.google.com/?q=Taloja,Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'What types of goods do you transport?',
                answer: 'We transport a wide range of goods including pharmaceuticals, food products, general cargo, chemicals, and specialized items. Our fleet includes temperature-controlled vehicles for perishable goods.'
              },
              {
                question: 'Do you provide real-time tracking?',
                answer: 'Yes, we provide real-time GPS tracking for all shipments. You can monitor your cargo\'s location and status through our online portal or mobile app.'
              },
              {
                question: 'What is your service area?',
                answer: 'We operate across major cities in Maharashtra, Gujarat, Karnataka, Tamil Nadu, and Delhi NCR. We\'re continuously expanding our network.'
              },
              {
                question: 'How do you ensure cargo safety?',
                answer: 'We have comprehensive insurance coverage, trained drivers, regular vehicle maintenance, and strict safety protocols to ensure your cargo reaches its destination safely.'
              },
              {
                question: 'What are your operating hours?',
                answer: 'Our main operations run Monday to Friday from 9:00 AM to 6:00 PM, and Saturday from 9:00 AM to 2:00 PM. However, we provide 24/7 emergency support for urgent shipments.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="font-semibold text-primary-navy mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-orange to-orange-600 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free quote and consultation
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <a href="tel:+917249899183" className="btn-secondary inline-block bg-white text-primary-orange border-white hover:bg-gray-100">
                Call Now
              </a>
              <a href="mailto:info@axellaglobal.com" className="btn-secondary inline-block border-white text-white hover:bg-white hover:text-primary-orange">
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

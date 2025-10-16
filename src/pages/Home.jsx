import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion';

const Home = () => {
  const services = [
    {
      icon: '❄️',
      title: 'Cold Chain Transportation',
      description: 'Temperature-controlled logistics at -18°C for perishable goods',
      features: [
        'Maintains -18°C temperature',
        'Real-time temperature monitoring',
        'Specialized refrigerated vehicles',
        '24/7 cold storage facilities'
      ]
    },
    {
      icon: '📦',
      title: 'Ambient Logistics',
      description: 'Standard temperature logistics for general cargo',
      features: [
        'General cargo handling',
        'Warehouse management',
        'Cross-docking services',
        'Inventory management'
      ]
    },
    {
      icon: '🚛',
      title: 'Flexible Vehicle Options',
      description: 'Wide range of vehicles from 1 MT to 40 MT capacity',
      features: [
        '1 MT to 40 MT capacity',
        'Open and closed containers',
        'Specialized equipment',
        'Customized solutions'
      ]
    }
  ];

  const stats = [
    { number: '500+', label: 'Successful Deliveries' },
    { number: '50+', label: 'Fleet Vehicles' },
    { number: '24/7', label: 'Customer Support' },
    { number: '98%', label: 'On-Time Delivery' }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Services Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive logistics solutions tailored to meet your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">
                Why Choose Axella Global?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-navy mb-2">Reliable Service</h3>
                    <p className="text-gray-600">98% on-time delivery rate with real-time tracking</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-navy mb-2">Flexible Solutions</h3>
                    <p className="text-gray-600">Customized logistics solutions for every business need</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-navy mb-2">Expert Team</h3>
                    <p className="text-gray-600">Experienced professionals dedicated to your success</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-navy mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Round-the-clock customer support and assistance</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div 
                className="w-full h-96 bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
                }}
              ></div>
              <div className="absolute inset-0 bg-primary-navy bg-opacity-20 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary-navy text-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Numbers that speak for our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-orange mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
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
              Contact us today for a customized logistics solution that meets your business needs
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <a href="/contact" className="btn-secondary inline-block bg-white text-primary-orange border-white hover:bg-gray-100">
                Get Quote
              </a>
              <a href="tel:+919876543210" className="btn-secondary inline-block border-white text-white hover:bg-white hover:text-primary-orange">
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

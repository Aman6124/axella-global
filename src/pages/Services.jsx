import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: '❄️',
      title: 'Cold Chain Transportation',
      description: 'Specialized temperature-controlled logistics maintaining -18°C for perishable goods',
      features: [
        'Maintains consistent -18°C temperature',
        'Real-time temperature monitoring',
        'Specialized refrigerated vehicles',
        '24/7 cold storage facilities',
        'Pharmaceutical grade compliance',
        'Food safety certified'
      ]
    },
    {
      icon: '📦',
      title: 'Ambient Logistics',
      description: 'Standard temperature logistics for general cargo and dry goods',
      features: [
        'General cargo handling',
        'Warehouse management',
        'Cross-docking services',
        'Inventory management',
        'Packaging solutions',
        'Quality control checks'
      ]
    },
    {
      icon: '🚛',
      title: 'Flexible Vehicle Options',
      description: 'Wide range of vehicles from 1 MT to 40 MT capacity',
      features: [
        '1 MT to 40 MT capacity range',
        'Open and closed containers',
        'Specialized equipment',
        'Customized solutions',
        'Multi-modal transportation',
        'Route optimization'
      ]
    },
    {
      icon: '🏭',
      title: 'Warehouse Management',
      description: 'State-of-the-art storage and distribution facilities',
      features: [
        'Temperature-controlled storage',
        'Inventory tracking systems',
        'Cross-docking capabilities',
        'Order fulfillment services',
        'Quality assurance protocols',
        'Security and surveillance'
      ]
    },
    {
      icon: '📱',
      title: 'Technology Solutions',
      description: 'Advanced tracking and management systems',
      features: [
        'Real-time shipment tracking',
        'GPS fleet monitoring',
        'Digital documentation',
        'Automated reporting',
        'Mobile app access',
        'API integration'
      ]
    },
    {
      icon: '🛡️',
      title: 'Risk Management',
      description: 'Comprehensive insurance and safety protocols',
      features: [
        'Comprehensive cargo insurance',
        'Driver safety training',
        'Vehicle maintenance programs',
        'Emergency response protocols',
        'Compliance monitoring',
        'Risk assessment services'
      ]
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We understand your specific logistics requirements and challenges'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Our experts design a customized solution tailored to your needs'
    },
    {
      step: '03',
      title: 'Execution',
      description: 'We implement the solution with precision and real-time monitoring'
    },
    {
      step: '04',
      title: 'Support',
      description: 'Ongoing support and optimization to ensure continued success'
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From cold chain transportation to technology solutions, we provide end-to-end logistics services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
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
              How We Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures efficient and reliable service delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-300 transform translate-x-4"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-primary-navy mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
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
              Industry Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized logistics solutions for different industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💊</span>
                </div>
                <h3 className="text-xl font-semibold text-primary-navy mb-3">Pharmaceuticals</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Temperature-controlled transportation</li>
                <li>• Regulatory compliance</li>
                <li>• Chain of custody documentation</li>
                <li>• Emergency delivery services</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍎</span>
                </div>
                <h3 className="text-xl font-semibold text-primary-navy mb-3">Food & Beverage</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Cold chain logistics</li>
                <li>• Fresh produce handling</li>
                <li>• Food safety compliance</li>
                <li>• Quick delivery options</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏭</span>
                </div>
                <h3 className="text-xl font-semibold text-primary-navy mb-3">Manufacturing</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Raw material transportation</li>
                <li>• Finished goods distribution</li>
                <li>• Just-in-time delivery</li>
                <li>• Supply chain optimization</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛒</span>
                </div>
                <h3 className="text-xl font-semibold text-primary-navy mb-3">E-commerce</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Last-mile delivery</li>
                <li>• Reverse logistics</li>
                <li>• Package consolidation</li>
                <li>• Real-time tracking</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-xl font-semibold text-primary-navy mb-3">Chemicals</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Hazardous material handling</li>
                <li>• Specialized containers</li>
                <li>• Safety protocols</li>
                <li>• Regulatory compliance</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="text-xl font-semibold text-primary-navy mb-3">Retail</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Store replenishment</li>
                <li>• Seasonal distribution</li>
                <li>• Cross-docking services</li>
                <li>• Inventory management</li>
              </ul>
            </motion.div>
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
              Need a Custom Solution?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our team can design a logistics solution tailored to your specific industry requirements
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <a href="/contact" className="btn-secondary inline-block bg-white text-primary-orange border-white hover:bg-gray-100">
                Get Custom Quote
              </a>
              <a href="tel:+919876543210" className="btn-secondary inline-block border-white text-white hover:bg-white hover:text-primary-orange">
                Call for Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;

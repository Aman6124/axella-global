import { motion } from 'framer-motion';

const About = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for excellence in every delivery, ensuring quality service that exceeds expectations.'
    },
    {
      icon: '🤝',
      title: 'Trust',
      description: 'Building long-term relationships based on trust, reliability, and transparent communication.'
    },
    {
      icon: '⚡',
      title: 'Efficiency',
      description: 'Optimizing logistics processes to deliver faster, more cost-effective solutions.'
    },
    {
      icon: '🌟',
      title: 'Innovation',
      description: 'Embracing technology and innovation to provide cutting-edge logistics solutions.'
    }
  ];

  const team = [
    {
      name: 'Abid Patwegar',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    {
      name: 'Isha Patwegar',
      position: 'Operations Director',
      image: 'https://i.pravatar.cc/600?img=47'
    },
    {
      name: 'Amit Patel',
      position: 'Fleet Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
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
              About Axella Global
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Your trusted partner in logistics excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
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
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2025, Axella Global Logisolutions emerged from a vision to revolutionize 
                  the logistics industry in India. Based in Taloja, Mumbai, we recognized the growing 
                  need for reliable, temperature-controlled transportation solutions.
                </p>
                <p>
                  What started as a small fleet of refrigerated vehicles has grown into a comprehensive 
                  logistics company serving clients across multiple industries. Our commitment to 
                  "Delivering Excellence with Every Mile" drives everything we do.
                </p>
                <p>
                  Today, we operate a diverse fleet ranging from 1 MT to 40 MT capacity vehicles, 
                  providing both cold chain and ambient logistics solutions. Our state-of-the-art 
                  facilities and experienced team ensure that every shipment reaches its destination 
                  safely and on time.
                </p>
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

      {/* Mission & Vision */}
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
              Our Mission & Vision
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guiding principles that shape our approach to logistics excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-primary-navy mb-4">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-center">
                To provide reliable, efficient, and innovative logistics solutions that enable 
                our clients to focus on their core business while we handle their transportation 
                needs with precision and care.
              </p>
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
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-2xl font-bold text-primary-navy mb-4">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-center">
                To become India's leading logistics company, recognized for our commitment to 
                excellence, innovation, and customer satisfaction in every delivery we make.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The core principles that guide our operations and define our company culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary-navy mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url('${member.image}')` }}
                ></div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-primary-navy mb-2">{member.name}</h3>
                  <p className="text-primary-orange font-medium">{member.position}</p>
                </div>
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust Axella Global for their logistics needs
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <a href="/contact" className="btn-secondary inline-block bg-white text-primary-orange border-white hover:bg-gray-100">
                Get Started
              </a>
              <a href="/services" className="btn-secondary inline-block border-white text-white hover:bg-white hover:text-primary-orange">
                Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

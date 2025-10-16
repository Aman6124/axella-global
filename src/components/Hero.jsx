import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-navy to-blue-900 text-white min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`
        }}
      ></div>

      <div className="relative z-10 container-max section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Axella Global
              <span className="block text-primary-orange">Logisolutions</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
          >
            Delivering Excellence with Every Mile — One Call, On Time, Every Time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center"
          >
            <Link to="/services" className="btn-primary inline-block">
              Our Services
            </Link>
            <Link to="/contact" className="btn-secondary inline-block bg-transparent border-white text-white hover:bg-white hover:text-primary-navy">
              Get Quote
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-orange mb-2">500+</div>
              <div className="text-gray-300">Successful Deliveries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-orange mb-2">24/7</div>
              <div className="text-gray-300">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-orange mb-2">98%</div>
              <div className="text-gray-300">On-Time Delivery</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

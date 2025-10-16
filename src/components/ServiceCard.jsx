import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description, features }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-xl font-semibold text-primary-navy mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-700">
            <span className="text-primary-orange mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;

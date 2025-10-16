import { motion } from 'framer-motion';

const Fleet = () => {
  const vehicles = [
    {
      name: 'Small Delivery Van',
      capacity: '1-3 MT',
      type: 'Closed Container',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Urban delivery', 'Last-mile logistics', 'Small packages', 'Quick turnaround']
    },
    {
      name: 'Medium Truck',
      capacity: '5-10 MT',
      type: 'Open/Closed Container',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Regional transport', 'Versatile loading', 'Cost-effective', 'Regular maintenance']
    },
    {
      name: 'Large Truck',
      capacity: '15-25 MT',
      type: 'Open/Closed Container',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Long-distance hauling', 'Bulk cargo', 'Heavy machinery', 'Industrial goods']
    },
    {
      name: 'Heavy Duty Truck',
      capacity: '30-40 MT',
      type: 'Open/Closed Container',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Maximum capacity', 'Heavy loads', 'Construction materials', 'Specialized transport']
    },
    {
      name: 'Refrigerated Truck',
      capacity: '5-15 MT',
      type: 'Temperature Controlled',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['-18°C temperature', 'Pharmaceuticals', 'Food products', 'Real-time monitoring']
    },
    {
      name: 'Specialized Vehicle',
      capacity: 'Custom',
      type: 'Special Purpose',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Custom solutions', 'Special equipment', 'Unique requirements', 'Tailored service']
    }
  ];

  const coverage = [
    { region: 'Mumbai Metropolitan Region', cities: ['Mumbai', 'Thane', 'Navi Mumbai', 'Kalyan', 'Vasai-Virar'] },
    { region: 'Maharashtra', cities: ['Pune', 'Nashik', 'Aurangabad', 'Nagpur', 'Solapur'] },
    { region: 'Gujarat', cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar'] },
    { region: 'Karnataka', cities: ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum'] },
    { region: 'Tamil Nadu', cities: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem'] },
    { region: 'Delhi NCR', cities: ['New Delhi', 'Gurgaon', 'Noida', 'Faridabad', 'Ghaziabad'] }
  ];

  const fleetStats = [
    { number: '50+', label: 'Total Vehicles' },
    { number: '24/7', label: 'Availability' },
    { number: '98%', label: 'Uptime' },
    { number: '15+', label: 'Years Experience' }
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
              Fleet & Coverage
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Modern fleet and extensive coverage across India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fleet Stats */}
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
              Our Fleet Overview
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A diverse fleet of modern vehicles ready to handle any logistics challenge
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {fleetStats.map((stat, index) => (
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
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
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
              Vehicle Types
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From small delivery vans to heavy-duty trucks, we have the right vehicle for every need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${vehicle.image}')` }}
                ></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-primary-navy">{vehicle.name}</h3>
                    <span className="text-sm bg-primary-orange text-white px-2 py-1 rounded">
                      {vehicle.capacity}
                    </span>
                  </div>
                  <p className="text-primary-orange font-medium mb-4">{vehicle.type}</p>
                  <ul className="space-y-1">
                    {vehicle.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="text-primary-orange mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
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
              Coverage Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Extensive network covering major cities and regions across India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coverage.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-primary-navy mb-4">{area.region}</h3>
                <div className="grid grid-cols-1 gap-2">
                  {area.cities.map((city, idx) => (
                    <div key={idx} className="flex items-center text-gray-600">
                      <span className="text-primary-orange mr-2">📍</span>
                      {city}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Management */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">
                Fleet Management Excellence
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-navy mb-2">Regular Maintenance</h3>
                    <p className="text-gray-600">All vehicles undergo regular maintenance to ensure optimal performance and safety</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-navy mb-2">GPS Tracking</h3>
                    <p className="text-gray-600">Real-time tracking of all vehicles for better visibility and control</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-navy mb-2">Driver Training</h3>
                    <p className="text-gray-600">Well-trained drivers with safety certifications and experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-navy mb-2">Insurance Coverage</h3>
                    <p className="text-gray-600">Comprehensive insurance coverage for all vehicles and cargo</p>
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
              Ready to Transport Your Goods?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our fleet is ready to handle your logistics needs with reliability and efficiency
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <a href="/contact" className="btn-secondary inline-block bg-white text-primary-orange border-white hover:bg-gray-100">
                Request Vehicle
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

export default Fleet;

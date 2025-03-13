import React from 'react';
import { motion } from 'framer-motion';
import { Truck, FileText, Phone, Shield, BarChart, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Truck className="h-12 w-12 text-blue-600" />,
      title: "Load Matching",
      description: "Access to premium loads from trusted brokers and shippers. We ensure you get the best rates and routes."
    },
    {
      icon: <FileText className="h-12 w-12 text-blue-600" />,
      title: "Documentation Management",
      description: "Complete handling of paperwork, invoicing, and document organization for seamless operations."
    },
    {
      icon: <Phone className="h-12 w-12 text-blue-600" />,
      title: "Broker Communication",
      description: "Professional communication with brokers and shippers to negotiate rates and handle requirements."
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "DOT Compliance",
      description: "Stay compliant with DOT regulations with our comprehensive safety monitoring and support."
    },
    {
      icon: <BarChart className="h-12 w-12 text-blue-600" />,
      title: "Revenue Management",
      description: "Strategic load selection and rate negotiation to maximize your earnings and profitability."
    },
    {
      icon: <Clock className="h-12 w-12 text-blue-600" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your dispatching needs, ensuring continuous operations."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive dispatching solutions designed to optimize your operations
              and maximize your revenue potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
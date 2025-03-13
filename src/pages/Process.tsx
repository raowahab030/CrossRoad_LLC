import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Search, PhoneCall, Truck } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <ClipboardCheck className="h-12 w-12 text-blue-600" />,
      title: "1. Register",
      description: "Complete our simple registration process and provide necessary documentation."
    },
    {
      icon: <Search className="h-12 w-12 text-blue-600" />,
      title: "2. Load Selection",
      description: "Our dispatchers find and present the best loads matching your preferences."
    },
    {
      icon: <PhoneCall className="h-12 w-12 text-blue-600" />,
      title: "3. Confirmation",
      description: "We handle rate negotiations and secure the load with the broker."
    },
    {
      icon: <Truck className="h-12 w-12 text-blue-600" />,
      title: "4. Delivery",
      description: "Complete the delivery while we handle all paperwork and communications."
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Simple, efficient, and transparent - our process is designed to keep you moving
              and earning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="inline-block p-3 bg-blue-50 rounded-full mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Process?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  <span>Transparent communication at every step</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  <span>24/7 support throughout the delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  <span>Efficient paperwork handling</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  <span>Quick payment processing</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Logistics Process"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
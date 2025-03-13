import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Shield, DollarSign, FileCheck } from 'lucide-react';

const Carriers = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Carriers</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Join our network of successful carriers and experience the benefits of
              professional dispatching services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Carrier Requirements</h2>
            <p className="text-gray-600 mt-4">
              To ensure quality service and compliance, we require the following from our carriers:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Truck className="h-8 w-8 text-blue-600" />,
                title: "Equipment",
                description: "Well-maintained equipment meeting DOT standards"
              },
              {
                icon: <Shield className="h-8 w-8 text-blue-600" />,
                title: "Insurance",
                description: "Valid insurance coverage meeting industry requirements"
              },
              {
                icon: <DollarSign className="h-8 w-8 text-blue-600" />,
                title: "Operating Authority",
                description: "Active MC number and DOT authority"
              },
              {
                icon: <FileCheck className="h-8 w-8 text-blue-600" />,
                title: "Documentation",
                description: "Complete and up-to-date documentation"
              }
            ].map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="inline-block p-3 bg-blue-50 rounded-full mb-4">
                  {req.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{req.title}</h3>
                <p className="text-gray-600">{req.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Partner With Us?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  <span>Access to premium loads and dedicated lanes</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  <span>Competitive rates and quick payment terms</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  <span>24/7 dispatch support and load tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  <span>Paperwork and compliance assistance</span>
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
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Trucking Partnership"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join our carrier network and start growing your business today.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Carriers;
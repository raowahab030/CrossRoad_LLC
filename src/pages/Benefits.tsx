import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Clock, Shield, BarChart3, Users, FileText } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <DollarSign className="h-12 w-12 text-blue-600" />,
      title: "Increased Revenue",
      description: "Access to premium loads and negotiated rates to maximize your earnings"
    },
    {
      icon: <Clock className="h-12 w-12 text-blue-600" />,
      title: "Time Savings",
      description: "Focus on driving while we handle load searching and paperwork"
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Risk Management",
      description: "Verified brokers and shippers to ensure secure transactions"
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-blue-600" />,
      title: "Growth Potential",
      description: "Strategic planning and load selection for business expansion"
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Professional Support",
      description: "24/7 access to experienced dispatch professionals"
    },
    {
      icon: <FileText className="h-12 w-12 text-blue-600" />,
      title: "Paperwork Management",
      description: "Complete handling of documentation and compliance requirements"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Benefits</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover how our dispatching services can transform your trucking business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">What Our Carriers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ {
                quote: "Since partnering with Investosol, my revenue has increased by 30%. Their team handles everything professionally.",
                author: "John D.",
                role: "Owner Operator"
              },
              {
                quote: "The 24/7 support is invaluable. They're always there when I need them, making my job much easier.",
                author: "Sarah M.",
                role: "Fleet Owner"
              },
              {
                quote: "Their attention to detail and paperwork management has saved me countless hours. Highly recommended!",
                author: "Michael R.",
                role: "Independent Carrier"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Return on Investment</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  <span>Higher paying loads through strategic selection</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  <span>Reduced empty miles with optimized route planning</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  <span>Minimized downtime with continuous load opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  <span>Faster payment processing for improved cash flow</span>
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
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Business Growth"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience These Benefits?</h2>
          <p className="text-xl mb-8">Join our network of successful carriers today.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
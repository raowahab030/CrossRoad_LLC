import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Heart, Clock, DollarSign } from 'lucide-react';

const Careers = () => {
  const positions = [
    {
      title: "Senior Dispatcher",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      description: "Looking for an experienced dispatcher to join our growing team."
    },
    {
      title: "Account Manager",
      department: "Client Relations",
      location: "Remote",
      type: "Full-time",
      description: "Seeking a dynamic professional to manage carrier relationships."
    },
    {
      title: "Operations Coordinator",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      description: "Join our operations team to help streamline logistics processes."
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Competitive Salary",
      description: "Industry-leading compensation packages"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Health Benefits",
      description: "Comprehensive medical, dental, and vision coverage"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Flexible Hours",
      description: "Work-life balance with flexible scheduling"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Build your career with the leader in logistics dispatching
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <Briefcase className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-semibold">{position.title}</h3>
                </div>
                <div className="mb-4">
                  <p className="text-gray-600">{position.description}</p>
                </div>
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-500">Department: {position.department}</p>
                  <p className="text-sm text-gray-500">Location: {position.location}</p>
                  <p className="text-sm text-gray-500">Type: {position.type}</p>
                </div>
                <button className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-md transition-colors">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-block p-3 bg-primary/10 rounded-full mb-4 text-primary">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-xl mb-8">Take the next step in your career</p>
          <a
            href="#positions"
            className="inline-block bg-accent hover:bg-accent-dark px-8 py-3 rounded-md text-lg font-semibold transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </div>
  );
};

export default Careers;
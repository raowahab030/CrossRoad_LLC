import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Target } from 'lucide-react';

const About = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Investosol Logistics</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your trusted partner in logistics since 2015, providing comprehensive
              dispatching services to owner-operators and fleet owners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, Investosol Logistics has grown to become a leading
                provider of dispatching services in the transportation industry.
              </p>
              <p className="text-gray-600 mb-4">
                We started with a simple mission: to help owner-operators and fleet
                owners maximize their potential through professional dispatching services.
              </p>
              <p className="text-gray-600">
                Today, we serve thousands of carriers across the United States,
                providing comprehensive solutions that go beyond traditional dispatching.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Logistics Operations"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-blue-600" />,
                title: "Excellence",
                description: "We strive for excellence in every aspect of our service"
              },
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: "Partnership",
                description: "Building strong, lasting relationships with our carriers"
              },
              {
                icon: <Globe className="h-8 w-8 text-blue-600" />,
                title: "Innovation",
                description: "Embracing technology to improve our services"
              },
              {
                icon: <Target className="h-8 w-8 text-blue-600" />,
                title: "Results",
                description: "Focused on delivering measurable results for our clients"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-block p-3 bg-blue-50 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
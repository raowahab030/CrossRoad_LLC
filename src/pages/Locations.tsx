import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Locations = () => {
  const locations = [
    {
      city: "Sugar Land",
      address: "16107 Kensington Dr #355, Sugar Land, TX 77479",
      phone: "(254) 435-0459",
      email: "contact@crossroadlogistics.com",
      image: "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Location</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Serving carriers from our strategic location in Sugar Land, Texas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={location.image}
                  alt={location.city}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">{location.city}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                      <p className="text-gray-600">{location.address}</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-primary mr-3" />
                      <a href="tel:+12544350459" className="text-primary hover:text-primary-dark">
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-primary mr-3" />
                      <a href={`mailto:${location.email}`} className="text-primary hover:text-primary-dark">
                        {location.email}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Texas Coverage</h2>
            <p className="text-gray-600 mt-4">
              Strategically located in Sugar Land to serve the Greater Houston area and beyond
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Statewide Service",
                description: "Coverage across all major Texas cities"
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Prime Location",
                description: "Located in Sugar Land's business district"
              },
              {
                icon: <Phone className="h-8 w-8" />,
                title: "24/7 Support",
                description: "Round-the-clock assistance"
              },
              {
                icon: <Mail className="h-8 w-8" />,
                title: "Local Expertise",
                description: "Deep knowledge of Houston metro area"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-block p-3 bg-primary/10 rounded-full mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Support?</h2>
          <p className="text-xl mb-8">Contact our 24/7 support team</p>
          <a
            href="/contact"
            className="inline-block bg-accent hover:bg-accent-dark px-8 py-3 rounded-md text-lg font-semibold transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Locations;
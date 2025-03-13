import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      role: "Owner Operator",
      company: "Smith Trucking LLC",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote: "Investosol Logistics has transformed my business. Their 24/7 support and premium load matching have increased my revenue by 30%.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      role: "Fleet Manager",
      company: "Garcia Transport",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote: "The best dispatching service I've worked with. Their attention to detail and professionalism is unmatched.",
      rating: 5
    },
    {
      name: "Robert Chen",
      role: "Owner Operator",
      company: "RC Logistics",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote: "Since partnering with Investosol, my stress levels have dropped significantly. They handle everything professionally.",
      rating: 5
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Hear what our clients say about their experience with Investosol Logistics
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="flex justify-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-primary mx-auto mb-4" />
                <p className="text-gray-600 text-center mb-6 italic">"{testimonial.quote}"</p>
                <div className="text-center">
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-primary">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-xl mb-8">Start your journey with Investosol Logistics today</p>
          <a
            href="/contact"
            className="inline-block bg-accent hover:bg-accent-dark px-8 py-3 rounded-md text-lg font-semibold transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
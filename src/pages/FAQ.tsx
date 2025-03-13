import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services does Investosol Logistics provide?",
      answer: "We provide comprehensive dispatching services including load matching, documentation management, broker communication, DOT compliance assistance, and 24/7 support for owner-operators and fleet owners."
    },
    {
      question: "How do I get started with your services?",
      answer: "Getting started is simple. Contact us through our website or phone, and our team will guide you through the registration process, documentation requirements, and service setup."
    },
    {
      question: "What are your payment terms?",
      answer: "We offer flexible payment terms with competitive rates. Specific terms are discussed during the onboarding process and can be customized based on your business needs."
    },
    {
      question: "Do you require long-term contracts?",
      answer: "No, we don't require long-term contracts. We believe in earning your business through quality service rather than contractual obligations."
    },
    {
      question: "What documentation do I need to provide?",
      answer: "Required documentation includes your MC authority, insurance certificates, W-9 form, and other standard carrier documentation. Our team will provide a complete checklist during onboarding."
    },
    {
      question: "How do you handle load selection?",
      answer: "Our dispatchers carefully select loads based on your preferences, equipment type, and location. We prioritize high-paying loads while considering factors like deadhead miles and delivery schedules."
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Find answers to common questions about our services and processes
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-primary">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-primary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-primary" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8">Our team is here to help you 24/7</p>
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

export default FAQ;
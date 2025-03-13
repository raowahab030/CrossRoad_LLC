import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, Book } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      title: "Carrier Onboarding Guide",
      description: "Complete guide to getting started with our dispatching services",
      icon: <Book className="h-8 w-8" />,
      type: "PDF Guide"
    },
    {
      title: "DOT Compliance Checklist",
      description: "Essential checklist for maintaining DOT compliance",
      icon: <FileText className="h-8 w-8" />,
      type: "Checklist"
    },
    {
      title: "Load Planning Templates",
      description: "Customizable templates for efficient load planning",
      icon: <Download className="h-8 w-8" />,
      type: "Templates"
    },
    {
      title: "Industry Best Practices",
      description: "Comprehensive guide to trucking industry best practices",
      icon: <ExternalLink className="h-8 w-8" />,
      type: "Guide"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Access valuable tools and information to help you succeed
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-primary mb-4">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  {resource.type}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Educational Content</h2>
            <p className="text-gray-600 mt-4">
              Enhance your knowledge with our educational resources
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Webinars",
                description: "Access recorded webinars on industry topics"
              },
              {
                title: "Blog Articles",
                description: "Read our latest insights and tips"
              },
              {
                title: "Video Tutorials",
                description: "Step-by-step guides for our services"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-primary-light/5 to-secondary-light/5 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
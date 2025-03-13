import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '../components/logistics.png';
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary-dark to-secondary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
            <img 
      src={logo}
      alt="CrossRoad Logistics"
      className="h-24 md:h-28 lg:h-32 xl:h-40 max-h-40 w-auto" // Increased logo size
    />
              <span className="ml-2 text-xl font-bold">CrossRoad Logistics</span>
            </div>
            <p className="text-gray-300">
              Providing dispatching services for owner-operators and truck fleets since 2015.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-accent-light">Services</Link></li>
              <li><Link to="/benefits" className="text-gray-300 hover:text-accent-light">Benefits</Link></li>
              <li><Link to="/process" className="text-gray-300 hover:text-accent-light">Our Process</Link></li>
              <li><Link to="/carriers" className="text-gray-300 hover:text-accent-light">Carriers</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-accent-light">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-accent-light">Careers</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-accent-light">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-accent-light" />
                <a href="tel:+12544350459" className="text-gray-300 hover:text-accent-light">
                  (254) 435-0459
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-accent-light" />
                <a href="mailto:contact@crossroadlogistics.com" className="text-gray-300 hover:text-accent-light">
                  contact@crossroadlogistics.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-accent-light" />
                <span className="text-gray-300">15500 VOSS RD SUGARLAND TX 77498</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">24/7 Support</h3>
            <p className="text-gray-300 mb-4">
              Need assistance? Our support team is available 24/7 to help you.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-dark transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} CrossRoad Logistics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
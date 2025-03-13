import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../components/logistics.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      subLinks: [
        { name: 'Benefits', path: '/benefits' },
        { name: 'Process', path: '/process' },
        { name: 'Carriers', path: '/carriers' }
      ]
    },
    {
      name: 'Company',
      path: '#',
      subLinks: [
        { name: 'Team', path: '/team' },
        { name: 'Careers', path: '/careers' },
        { name: 'Partners', path: '/partners' },
        { name: 'Locations', path: '/locations' }
      ]
    },
    {
      name: 'Resources',
      path: '#',
      subLinks: [
        { name: 'News', path: '/news' },
        { name: 'Resources', path: '/resources' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Testimonials', path: '/testimonials' }
      ]
    },
    { name: 'Contact', path: '/contact', isButton: true }
  ];

  return (
    <nav className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
        <div className="flex items-center">
  <Link to="/" className="flex items-center">
    <img 
      src={logo}
      alt="CrossRoad Logistics"
      className="h-24 md:h-28 lg:h-32 xl:h-40 max-h-40 w-auto" // Increased logo size
    />
  </Link>
</div>



          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.isButton ? (
                  <Link
                    to={link.path}
                    className="bg-accent hover:bg-accent-dark px-4 py-2 rounded-md transition-colors"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <>
                    <Link
                      to={link.path}
                      className="text-white hover:text-accent-light px-3 py-2"
                    >
                      {link.name}
                    </Link>
                    {link.subLinks && (
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-1">
                          {link.subLinks.map((subLink, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subLink.path}
                              className="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-white"
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-accent-light focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-primary to-secondary">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.isButton ? (
                  <Link
                    to={link.path}
                    className="block px-3 py-2 bg-accent text-white rounded-md"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <>
                    <Link
                      to={link.path}
                      className="block px-3 py-2 text-white hover:text-accent-light font-medium"
                    >
                      {link.name}
                    </Link>
                    {link.subLinks && (
                      <div className="pl-4 space-y-1">
                        {link.subLinks.map((subLink, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subLink.path}
                            className="block px-3 py-2 text-gray-300 hover:text-accent-light text-sm"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
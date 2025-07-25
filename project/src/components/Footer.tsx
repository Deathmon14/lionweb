import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Club Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-[#FDB913] p-2 rounded-full">
                <Heart className="h-6 w-6 text-[#0055A4]" fill="currentColor" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold">Lions Club</h3>
                <p className="text-sm text-gray-400">Bangalore Doddabommasandra</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Serving our community with pride through fellowship, leadership, and humanitarian service. 
              Together, we create lasting positive change in Bangalore Doddabommasandra.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#FDB913]" />
                <span className="text-sm text-gray-400">info@lionsbangaloredoddabommasandra.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#FDB913]" />
                <span className="text-sm text-gray-400">+91 9448891130</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#FDB913]" />
                <span className="text-sm text-gray-400">Doddabommasandra, Bangalore, Karnataka</span>
              </div>
            </div>
          </div>

          {/* Social Media & Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="bg-[#0055A4] p-2 rounded-full hover:bg-[#FDB913] hover:text-[#0055A4] transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-[#0055A4] p-2 rounded-full hover:bg-[#FDB913] hover:text-[#0055A4] transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                <strong className="text-white">Meeting Times:</strong><br />
                Every 2nd & 4th Saturday<br />
                7:00 PM - 9:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Lions Club Bangalore Doddabommasandra. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Part of Lions Clubs International - The World's Largest Service Club Organization
          </p>
          <div className="mt-4">
            <Link
              to="/portal-admin-2024"
              className="text-xs text-gray-600 hover:text-[#FDB913] transition-colors duration-200"
            >
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
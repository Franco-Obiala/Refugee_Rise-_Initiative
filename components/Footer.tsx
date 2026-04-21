
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import { MailIcon, PhoneIcon, LinkedinIcon } from './IconComponents';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4" style={{fontFamily: "'Orbitron', sans-serif"}}>
              <span className="neon-text-green">Refugee</span>
              <span className="neon-text-blue">Rise</span>
            </h3>
            <p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
              Empowering refugees through sustainable shop construction and entrepreneurship support.
            </p>
          </div>

          {/* Contact Quick Links */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Contact</h4>
            <div className="flex flex-col items-center space-y-3">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                <MailIcon className="w-4 h-4 mr-2" />
                {CONTACT_INFO.email}
              </a>
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center text-gray-400 hover:text-blue-400 transition-colors text-sm">
                <PhoneIcon className="w-4 h-4 mr-2" />
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Follow Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href={CONTACT_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Refugee Rise Initiative. All Rights Reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-400 text-[10px] uppercase tracking-widest">Privacy Policy</a>
            <Link to="/terms" className="text-gray-600 hover:text-gray-400 text-[10px] uppercase tracking-widest">Terms of Service</Link>
            <Link to="/admin" className="text-gray-600 hover:text-emerald-500 text-[10px] uppercase tracking-widest">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
    

import React, { useState } from 'react';
import { NAVIGATION_ITEMS } from '../constants';
import { NavItem } from '../types';
import { MenuIcon, XIcon } from './IconComponents';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-opacity-80 backdrop-blur-md sticky top-0 z-50 shadow-lg" style={{backgroundColor: 'rgba(15, 0, 40, 0.8)'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-3 group">
              <img 
                src="/images/logo.png" 
                alt="RRI Logo" 
                className="h-12 w-12 object-contain group-hover:scale-110 transition-transform duration-300"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback if image doesn't exist yet
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold leading-none" style={{fontFamily: "'Orbitron', sans-serif"}}>
                  <span className="neon-text-green">Refugee</span>
                  <span className="neon-text-blue ml-1">Rise</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mt-1">Initiative</span>
              </div>
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            {NAVIGATION_ITEMS.map((item: NavItem) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800 bg-opacity-95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAVIGATION_ITEMS.map((item: NavItem) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:bg-emerald-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
    
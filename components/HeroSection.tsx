
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-bg-pattern text-white py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{fontFamily: "'Orbitron', sans-serif"}}>
          <span className="block neon-text-green">Empower Refugees,</span>
          <span className="block neon-text-blue">Build Futures.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Refugee Rise Initiative creates financial stability and opportunities for refugees by building shops, fostering entrepreneurship, and driving sustainable growth.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#projects"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 neon-border-green"
          >
            See Our Impact
          </a>
          <a
            href="#donate"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 neon-border-blue"
          >
            Support Us
          </a>
        </div>
      </div>
      {/* Subtle astronaut-like visual cue if desired - for this project, keeping it abstract */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 opacity-10">
        {/* Placeholder for a more complex graphic if needed */}
         {/* <img src="https://picsum.photos/seed/space/400/400" alt="Abstract space element" className="object-cover w-full h-full filter saturate-150" /> */}
      </div>
    </section>
  );
};

export default HeroSection;
    
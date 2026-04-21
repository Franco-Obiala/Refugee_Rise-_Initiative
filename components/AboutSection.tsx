
import React from 'react';
import { ABOUT_TEXT } from '../constants';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl font-bold mb-4 neon-text-blue" style={{fontFamily: "'Orbitron', sans-serif"}}>
            {ABOUT_TEXT.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {ABOUT_TEXT.expandedIdea}
          </p>
        </div>

        <h3 className="text-3xl font-semibold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-500 to-cyan-400" style={{fontFamily: "'Orbitron', sans-serif"}}>
          Key Components of Our Business
        </h3>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {ABOUT_TEXT.keyComponents.map((component) => (
            <div key={component.title} className="bg-slate-800 bg-opacity-70 p-6 rounded-lg shadow-xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
              <div className="flex items-start mb-3">
                {component.icon}
                <h4 className="text-2xl font-semibold text-gray-100">{component.title}</h4>
              </div>
              <p className="text-gray-400 leading-relaxed">{component.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
    
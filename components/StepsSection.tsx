
import React from 'react';
import { STEPS_DATA } from '../constants';
import { Step } from '../types';

const StepsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 neon-text-green" style={{fontFamily: "'Orbitron', sans-serif"}}>
          Our Approach to Change
        </h2>
        <p className="text-xl text-gray-400 text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          We follow a structured path to create lasting impact and empower communities.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STEPS_DATA.map((step: Step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center p-6 bg-slate-800 rounded-xl shadow-2xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 transform hover:scale-105"
            >
              <div className="p-4 bg-slate-700 rounded-full mb-6 inline-block shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
    
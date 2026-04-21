
import React, { useState } from 'react';
import { FormData } from '../types';

const DonateSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    pledgeAmount: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send data to a backend
    console.log('Form data submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '', pledgeAmount: ''});
    setTimeout(() => setSubmitted(false), 5000); // Reset submitted message after 5 seconds
  };

  return (
    <section id="donate" className="py-16 md:py-24 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl font-bold mb-4 neon-text-blue" style={{fontFamily: "'Orbitron', sans-serif"}}>
            Support Our Mission
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your contribution can help us build more shops, empower more refugees, and create lasting change.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-slate-800 bg-opacity-70 p-8 md:p-10 rounded-xl shadow-2xl border border-slate-700">
          {submitted && (
            <div className="mb-6 p-4 bg-green-500 text-white rounded-lg text-center">
              Thank you for your support! We'll be in touch soon.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-emerald-400">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-slate-700 border-slate-600 rounded-md shadow-sm py-2 px-3 text-gray-200 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-emerald-400">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-slate-700 border-slate-600 rounded-md shadow-sm py-2 px-3 text-gray-200 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              />
            </div>
             <div>
              <label htmlFor="pledgeAmount" className="block text-sm font-medium text-blue-400">Pledge Amount (Optional, e.g., $50)</label>
              <input
                type="text"
                name="pledgeAmount"
                id="pledgeAmount"
                value={formData.pledgeAmount}
                onChange={handleChange}
                className="mt-1 block w-full bg-slate-700 border-slate-600 rounded-md shadow-sm py-2 px-3 text-gray-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-cyan-400">Message / How you'd like to help</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full bg-slate-700 border-slate-600 rounded-md shadow-sm py-2 px-3 text-gray-200 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
              ></textarea>
            </div>
            <div className="flex flex-col items-center space-y-4">
               <button
                type="button"
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-10 rounded-lg text-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 neon-border-green"
                onClick={() => alert('Donation functionality is illustrative. In a real app, this would integrate with a payment gateway.')}
              >
                Donate Now (Illustrative)
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-10 rounded-lg text-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 neon-border-blue"
              >
                Send Support Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
    
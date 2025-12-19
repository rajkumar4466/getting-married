import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { submitRSVP } from '../services/api';
import { Guest } from '../types';

const RSVP: React.FC = () => {
  const [formData, setFormData] = useState<Guest>({
    name: '',
    email: '',
    phone: '',
    attending: 'yes',
    numberOfGuests: 1,
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitRSVP(formData);
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="rsvp" className="py-20 bg-gold-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
           <p className="font-sans text-gold-600 tracking-widest uppercase text-sm mb-2">Join Us</p>
           <h2 className="font-serif text-4xl md:text-5xl text-stone-800">RSVP</h2>
           <p className="mt-4 text-stone-600">Please respond by March 15, 2025</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-xl"
        >
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎉</span>
              </div>
              <h3 className="text-2xl font-serif text-stone-800 mb-2">Thank you!</h3>
              <p className="text-stone-600">Your RSVP has been sent successfully. We can't wait to celebrate with you!</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-6 text-gold-600 hover:text-gold-700 underline"
              >
                Send another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-stone-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-stone-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-stone-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="attending" className="block text-sm font-medium text-stone-700 mb-1">Will you attend?</label>
                  <select
                    id="attending"
                    name="attending"
                    value={formData.attending}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-stone-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
                  >
                    <option value="yes">Joyfully Accepts</option>
                    <option value="no">Regretfully Declines</option>
                  </select>
                </div>
              </div>

              {formData.attending === 'yes' && (
                 <div>
                    <label htmlFor="numberOfGuests" className="block text-sm font-medium text-stone-700 mb-1">Number of Guests</label>
                    <input
                      type="number"
                      id="numberOfGuests"
                      name="numberOfGuests"
                      min="1"
                      max="10"
                      value={formData.numberOfGuests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border border-stone-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
                    />
                 </div>
              )}

              <div>
                 <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Message for the Couple (Optional)</label>
                 <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-stone-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
                 ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-stone-900 text-white py-4 rounded font-sans uppercase tracking-widest hover:bg-gold-600 transition-all duration-300 disabled:opacity-50"
              >
                {status === 'submitting' ? 'Sending...' : 'Send RSVP'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;
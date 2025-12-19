import React, { useState } from 'react';
import { Mail, MessageCircle, Phone, Instagram } from 'lucide-react';
import { submitContact } from '../services/api';
import { ContactMessage } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    await submitContact(formData);
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Info Side */}
          <div className="order-2 lg:order-1">
             <h2 className="font-serif text-4xl text-stone-800 mb-6">Get in Touch</h2>
             <p className="text-stone-600 mb-8 leading-relaxed">
               Have any questions about the events, accommodation, or travel? 
               Please feel free to reach out to us. We are here to help make your experience comfortable and memorable.
             </p>
             
             <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center text-gold-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 font-semibold uppercase">Phone</p>
                    <p className="text-stone-800">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center text-gold-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 font-semibold uppercase">Email</p>
                    <p className="text-stone-800">wedding@sruthiandrahul.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center text-gold-600">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 font-semibold uppercase">Social</p>
                    <a href="#" className="text-stone-800 hover:text-gold-600 transition-colors">@sruthi_rahul_wedding</a>
                  </div>
                </div>
             </div>
          </div>

          {/* Form Side */}
          <div className="order-1 lg:order-2 bg-stone-50 p-8 rounded-xl">
             <form onSubmit={handleSubmit} className="space-y-4">
               <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 rounded border border-stone-200 focus:border-gold-400 outline-none"
                  />
               </div>
               <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 rounded border border-stone-200 focus:border-gold-400 outline-none"
                  />
               </div>
               <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-2 rounded border border-stone-200 focus:border-gold-400 outline-none"
                  ></textarea>
               </div>
               <button
                 type="submit"
                 disabled={status === 'submitting'}
                 className="w-full bg-stone-800 text-white py-3 rounded uppercase tracking-wider hover:bg-gold-600 transition-all text-sm font-semibold"
               >
                 {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
               </button>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
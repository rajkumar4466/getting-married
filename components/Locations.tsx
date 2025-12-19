import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';
import { LocationItem } from '../types';

const locations: LocationItem[] = [
  {
    id: 'l1',
    name: 'MGM Beach Resort',
    type: 'Wedding',
    address: '1/74, East Coast Rd, Muttukadu, Tamil Nadu 603112',
    mapQuery: 'MGM+Beach+Resort'
  },
  {
    id: 'l2',
    name: 'M Convention',
    type: 'Reception',
    address: 'Vanagaram, Chennai, Tamil Nadu 600095',
    mapQuery: 'M+Convention+Vanagaram'
  },
  {
    id: 'l3',
    name: 'PP Mahaal',
    type: 'Reception',
    address: 'Mannargudi, Tamil Nadu 614001',
    mapQuery: 'Mannargudi' // Using generic town if exact place unknown in generic embed
  }
];

const Locations: React.FC = () => {
  return (
    <section id="locations" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-sans text-gold-600 tracking-widest uppercase text-sm mb-2">Getting There</p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-800">Locations</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {locations.map((loc, idx) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-stone-50 p-4 rounded-xl shadow-sm border border-stone-100 flex flex-col h-full"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gold-100 text-gold-800 text-xs font-bold uppercase rounded-full mb-2">
                  {loc.type}
                </span>
                <h3 className="font-serif text-2xl text-stone-800">{loc.name}</h3>
                <div className="flex items-start gap-2 mt-2 text-stone-600">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-gold-500" />
                  <p className="text-sm">{loc.address}</p>
                </div>
              </div>

              {/* Map Embed */}
              <div className="flex-grow rounded-lg overflow-hidden h-64 bg-stone-200 mb-4 border border-stone-200 relative">
                <iframe
                  title={loc.name}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src={`https://maps.google.com/maps?q=${loc.mapQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  allowFullScreen
                ></iframe>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${loc.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full py-3 bg-stone-800 text-white hover:bg-gold-500 transition-colors duration-300 rounded font-sans uppercase text-xs tracking-widest flex items-center justify-center gap-2"
              >
                Open in Google Maps <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

const events = [
  {
    category: "Pre-Wedding",
    date: "April 02, 2025",
    items: [
      {
        title: "Engagement",
        time: "11:00 AM",
        desc: "The official ring exchange ceremony marking the beginning of our festivities.",
        img: "https://picsum.photos/400/300?random=20"
      },
      {
        title: "Haldi",
        time: "2:00 PM",
        desc: "A colorful afternoon filled with turmeric, laughter, and joy.",
        img: "https://picsum.photos/400/300?random=21"
      },
      {
        title: "Sangeet",
        time: "6:00 PM",
        desc: "An evening of music and dance. Get your dancing shoes ready!",
        img: "https://picsum.photos/400/300?random=22"
      }
    ]
  },
  {
    category: "The Wedding",
    date: "April 03, 2025",
    items: [
      {
        title: "Muhurtham",
        time: "Morning",
        desc: "The sacred moment where we tie the knot surrounded by blessings.",
        img: "https://picsum.photos/800/400?random=23",
        featured: true
      }
    ]
  },
  {
    category: "Receptions",
    items: [
      {
        title: "Chennai Reception",
        date: "April 04, 2025",
        time: "6:00 PM",
        desc: "Join us for a grand dinner reception in Chennai.",
        img: "https://picsum.photos/400/300?random=24"
      },
      {
        title: "Mannargudi Reception",
        date: "April 07, 2025",
        time: "6:00 PM",
        desc: "Celebrating with our extended family in our hometown.",
        img: "https://picsum.photos/400/300?random=25"
      }
    ]
  }
];

const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-sans text-gold-600 tracking-widest uppercase text-sm mb-2">Celebration</p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-800">Event Details</h2>
        </div>

        <div className="space-y-16">
          {events.map((section, idx) => (
            <div key={idx} className="relative">
               <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-8 pl-4 border-l-4 border-gold-400"
               >
                 <h3 className="font-serif text-3xl text-stone-800">{section.category}</h3>
                 {section.date && <p className="font-sans text-stone-500 font-medium">{section.date}</p>}
               </motion.div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {section.items.map((item, i) => (
                   <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className={`bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden ${item.featured ? 'md:col-span-2 lg:col-span-3' : ''}`}
                   >
                     <div className={`relative overflow-hidden ${item.featured ? 'h-80' : 'h-48'}`}>
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-stone-800">
                          {item.time}
                        </div>
                     </div>
                     <div className="p-6">
                        {item.date && (
                          <div className="flex items-center gap-2 text-gold-600 text-sm mb-2 font-medium">
                            <Calendar className="w-4 h-4" />
                            <span>{item.date}</span>
                          </div>
                        )}
                        <h4 className="font-serif text-2xl text-stone-800 mb-2">{item.title}</h4>
                        <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                     </div>
                   </motion.div>
                 ))}
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
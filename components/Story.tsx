import React from 'react';
import { motion } from 'framer-motion';

const Story: React.FC = () => {
  return (
    <section id="story" className="py-20 md:py-32 bg-stone-50 overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-stone-800 mb-4"
          >
            Our Story
          </motion.h2>
          <div className="w-16 h-[2px] bg-gold-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-0">
          {/* Bride Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col items-center text-center px-4 md:border-r border-stone-200"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 mb-8 rounded-full overflow-hidden border-4 border-white shadow-lg relative">
               <img
                src="https://picsum.photos/400/400?random=1"
                alt="Sruthi"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-serif text-3xl text-stone-800 mb-2">Sruthi</h3>
            <p className="font-sans text-xs uppercase tracking-widest text-gold-600 mb-6">The Bride</p>
            <p className="font-sans text-stone-600 leading-relaxed max-w-sm">
              Sruthi is a gentle soul with a fierce heart. She brings light into every room she enters and has found her perfect counterpart in Rahul. Her journey has been one of grace, art, and finding joy in the little things.
            </p>
          </motion.div>

          {/* Groom Section */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="flex-1 flex flex-col items-center text-center px-4"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 mb-8 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src="https://picsum.photos/400/400?random=2"
                alt="Rahul"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-serif text-3xl text-stone-800 mb-2">Rahul</h3>
            <p className="font-sans text-xs uppercase tracking-widest text-gold-600 mb-6">The Groom</p>
            <p className="font-sans text-stone-600 leading-relaxed max-w-sm">
              Rahul is the calm to Sruthi's storm, a pillar of strength and kindness. He loves deeply and laughs freely. Meeting Sruthi was the beginning of his greatest adventure, and he can't wait to start this new chapter.
            </p>
          </motion.div>
        </div>
        
        {/* Joint Story */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-20 md:mt-32 max-w-2xl mx-auto text-center"
        >
            <h4 className="font-serif text-2xl text-stone-800 mb-6 italic">"Two souls, one heart."</h4>
            <p className="text-stone-600 leading-relaxed">
                We met by chance, but stayed together by choice. From our first coffee date to countless long drives, our love story has been nothing short of magical. We are thrilled to invite you to celebrate the beginning of our forever.
            </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
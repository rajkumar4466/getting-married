import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://picsum.photos/600/800?random=10",
  "https://picsum.photos/600/400?random=11",
  "https://picsum.photos/600/600?random=12",
  "https://picsum.photos/600/800?random=13",
  "https://picsum.photos/600/600?random=14",
  "https://picsum.photos/600/400?random=15",
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [currentIndex]); // Reset timer on interaction

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    const { offset } = info;

    if (offset.x > swipeThreshold) {
      // Swipe Right -> Previous
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    } else if (offset.x < -swipeThreshold) {
      // Swipe Left -> Next
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  };

  const getImageStyle = (index: number) => {
    const length = images.length;
    
    // Calculate circular distance (shortest path)
    let d = index - currentIndex;
    
    // Normalize to [-length/2, length/2]
    while (d > length / 2) d -= length;
    while (d < -length / 2) d += length;

    // Define states based on distance
    if (d === 0) {
      // Current Item: Center, Bigger, Color
      return {
        x: "0%",
        scale: 1.1,
        zIndex: 20,
        opacity: 1,
        filter: "grayscale(0%)",
        display: "block"
      };
    } else if (d === -1) {
      // Previous Item: Left, Smaller, B&W
      return {
        x: "-85%",
        scale: 0.75,
        zIndex: 10,
        opacity: 0.8,
        filter: "grayscale(100%)",
        display: "block"
      };
    } else if (d === 1) {
      // Next Item: Right, Smaller, B&W
      return {
        x: "85%",
        scale: 0.75,
        zIndex: 10,
        opacity: 0.8,
        filter: "grayscale(100%)",
        display: "block"
      };
    } else if (d === -2) {
      // Far Left (Hidden preparation for smooth entry)
      return {
        x: "-150%",
        scale: 0.5,
        zIndex: 5,
        opacity: 0,
        filter: "grayscale(100%)",
        display: "block"
      };
    } else if (d === 2) {
      // Far Right (Hidden preparation for smooth entry)
      return {
        x: "150%",
        scale: 0.5,
        zIndex: 5,
        opacity: 0,
        filter: "grayscale(100%)",
        display: "block"
      };
    } else {
      // Hidden behind
      return {
        x: "0%",
        scale: 0.5,
        zIndex: 0,
        opacity: 0,
        filter: "grayscale(100%)",
        display: "none"
      };
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <p className="font-sans text-gold-600 tracking-widest uppercase text-sm mb-2">Moments</p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-800">Gallery</h2>
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden relative h-[450px] flex items-center justify-center w-full touch-pan-y">
          {/* Draggable Area Overlay to capture swipes without moving images 1:1 */}
          <motion.div
            className="absolute inset-0 z-30"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            style={{ cursor: 'grab' }}
          />
          
          <div className="relative w-full h-full flex items-center justify-center">
             {images.map((src, index) => (
                <motion.div
                  key={index}
                  className="absolute w-64 h-80 rounded-xl overflow-hidden shadow-2xl border-4 border-white"
                  initial={false}
                  animate={getImageStyle(index)}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{ transformOrigin: "center" }}
                >
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </motion.div>
             ))}
          </div>
          
          {/* Mobile Indicators */}
          <div className="absolute bottom-4 flex gap-2 z-30">
             {images.map((_, idx) => (
               <div 
                 key={idx} 
                 className={`w-2 h-2 rounded-full transition-colors duration-300 ${idx === currentIndex ? 'bg-gold-500' : 'bg-stone-300'}`}
               />
             ))}
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group overflow-hidden h-96 w-full cursor-pointer"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
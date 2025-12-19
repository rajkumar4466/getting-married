import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Locations from './components/Locations';
import RSVP from './components/RSVP';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-stone-800 font-sans selection:bg-gold-200 selection:text-stone-900">
      <Navbar />
      <Hero />
      <Story />
      <Events />
      <Gallery />
      <Locations />
      <RSVP />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
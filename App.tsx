
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactLinks from './components/ContactLinks';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-900 text-slate-200 min-h-screen font-sans">
      <Header />
      <main id="main">
        <Hero />
        <ContactLinks />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;

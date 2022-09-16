import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Developers from './Components/Developer';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Developers />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;

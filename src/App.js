import React from 'react';
import Header from './Header';
import Slider from './Slider';
import AboutUs from './AboutUs';
import Services from './Services';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <AboutUs />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

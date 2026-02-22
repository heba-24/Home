import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import './styles/Header.css';
import './styles/call.css';
// @ts-ignore
import LandingPage from './components/LandingPage';
import './styles/Hero.css';
import'./styles/Land.css';
import './styles/App.css';
import './index.css';
import './styles/Footer.css';
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
     
          <LandingPage />
       
      <CallToAction />
      <Footer />
     
    </div>
  );
}

export default App;
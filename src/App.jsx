import React from 'react';
import './index.css'; // or whatever your filename is
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategoriesSection from './components/CategoriesSection';
import BananaChipsSection from './components/BananaChipsSection'; 
import JackfruitChipsSection from './components/JackfruitChipsSection'; 

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <BananaChipsSection />
      <JackfruitChipsSection />
      {/* Add more sections as needed */}
      {/* More sections can follow */}
    </div>
  );
}

export default App;

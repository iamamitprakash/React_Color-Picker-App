import React from 'react';
import heroImage from '../Hero-section.jpeg';

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Hero image or carousel */}
      <img src={heroImage} alt="Discover your next adventure" />
    </section>
  );
};

export default HeroSection;

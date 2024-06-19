import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SearchFilters from './components/SearchFilters';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';
import "./style.css";

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <div className="main-content">
        <SearchFilters />
        <SearchResults />
      </div>
      <Footer />
    </div>
  );
}

export default App;

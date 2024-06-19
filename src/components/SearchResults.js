import React from 'react';
import AccomodationImage from "../Accomodation.jpg";

const SearchResults = () => {
  return (
    <section className="search-results">
      {/* List of search results */}
      {/* Each result could be a card component */}
      <div className="result-card">
        <img src={AccomodationImage} alt="Accommodation" />
        <h2>Accommodation Name</h2>
        <p>Description and details</p>
        <button>Book Now</button>
      </div>
      <div className="result-card">
        <img src={AccomodationImage} alt="Accommodation" />
        <h2>Accommodation Name</h2>
        <p>Description and details</p>
        <button>Book Now</button>
      </div>
      <div className="result-card">
        <img src={AccomodationImage} alt="Accommodation" />
        <h2>Accommodation Name</h2>
        <p>Description and details</p>
        <button>Book Now</button>
      </div>
      <div className="result-card">
        <img src={AccomodationImage} alt="Accommodation" />
        <h2>Accommodation Name</h2>
        <p>Description and details</p>
        <button>Book Now</button>
      </div>
      <div className="result-card">
        <img src={AccomodationImage} alt="Accommodation" />
        <h2>Accommodation Name</h2>
        <p>Description and details</p>
        <button>Book Now</button>
      </div>
      {/* More result cards */}
    </section>
  );
};

export default SearchResults;

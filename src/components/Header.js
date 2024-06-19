import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Booking.com</div>
      <div className="search-bar">
        {/* Search bar component */}
        <input type="text" placeholder="Where are you going?" />
        {/* Other search options like dates and guests */}
        {/* Search button */}
        <button>Search</button>
      </div>
      <nav>
        {/* Navigation links */}
        <a href="#">Sign In</a>
        <a href="#">Register</a>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';

const SearchFilters = () => {
  return (
    <aside className="search-filters">
      <input type="text" placeholder="Where are you going?" />
      <input type="text" placeholder="Check-in-Date - Check-out-Date" />
      <input type="text" placeholder="2 Adults.0 Children. 1 room" />
      <button>Search</button>
    </aside>
  );
};

export default SearchFilters;
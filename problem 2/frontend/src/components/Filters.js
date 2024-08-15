import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    setMinPrice(value);
    onFilterChange('minPrice', value);
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    setMaxPrice(value);
    onFilterChange('maxPrice', value);
  };

  return (
    <div className="p-4 bg-dark-card rounded-lg shadow-md">
      <h2 className="font-bold text-xl text-dark-accent mb-4">Filters</h2>

      <div className="mb-4">
        <label className="block mb-2">Price Range:</label>
        <div className="flex items-center">
          <input
            type="number"
            value={minPrice}
            onChange={handleMinPriceChange}
            placeholder="Min"
            className="border border-gray-700 bg-dark-card text-dark-text rounded px-2 py-1 w-full mr-2"
          />
          <span className="text-dark-text">-</span>
          <input
            type="number"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            placeholder="Max"
            className="border border-gray-700 bg-dark-card text-dark-text rounded px-2 py-1 w-full ml-2"
          />
        </div>
      </div>

    </div>
  );
};

export default Filters;

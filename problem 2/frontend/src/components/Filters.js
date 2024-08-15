import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [rating, setRating] = useState('');
  const [availability, setAvailability] = useState('');

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

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);
    onFilterChange('category', value);
  };

  const handleCompanyChange = (e) => {
    const value = e.target.value;
    setCompany(value);
    onFilterChange('company', value);
  };

  const handleRatingChange = (e) => {
    const value = e.target.value;
    setRating(value);
    onFilterChange('rating', value);
  };

  const handleAvailabilityChange = (e) => {
    const value = e.target.value;
    setAvailability(value);
    onFilterChange('availability', value);
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

      <div className="mb-4">
        <label className="block mb-2">Category:</label>
        <select
          value={category}
          onChange={handleCategoryChange}
          className="border border-gray-700 bg-dark-card text-dark-text rounded px-2 py-1 w-full"
        >
          <option value="">All</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
          <option value="tv">TV</option>
          <option value="earphone">Earphone</option>
          <option value="tablet">Tablet</option>
          <option value="charger">Charger</option>
          <option value="mouse">Mouse</option>
          <option value="keyboard">Keyboard</option>
          <option value="bluetooth">Bluetooth</option>
          <option value="pendrive">Pendrive</option>
          <option value="remote">Remote</option>
          <option value="speaker">Speaker</option>
          <option value="headset">Headset</option>
          <option value="laptop PC">Laptop PC</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">E-commerce Company:</label>
        <select
          value={company}
          onChange={handleCompanyChange}
          className="border border-gray-700 bg-dark-card text-dark-text rounded px-2 py-1 w-full"
        >
          <option value="">All</option>
          <option value="AMZ">AMZ</option>
          <option value="FUP">FUP</option>
          <option value="SNP">SNP</option>
          <option value="MYN">MYN</option>
          <option value="AZO">AZO</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Rating:</label>
        <select
          value={rating}
          onChange={handleRatingChange}
          className="border border-gray-700 bg-dark-card text-dark-text rounded px-2 py-1 w-full"
        >
          <option value="">All</option>
          <option value="4">4 Stars & Above</option>
          <option value="3">3 Stars & Above</option>
          <option value="2">2 Stars & Above</option>
          <option value="1">1 Star & Above</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Availability:</label>
        <select
          value={availability}
          onChange={handleAvailabilityChange}
          className="border border-gray-700 bg-dark-card text-dark-text rounded px-2 py-1 w-full"
        >
          <option value="">All</option>
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
      </div>

    </div>
  );
};

export default Filters;

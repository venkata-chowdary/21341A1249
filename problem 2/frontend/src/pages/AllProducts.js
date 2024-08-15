import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import dummyData from './dummyData';

const AllProducts = () => {
  const [products, setProducts] = useState(dummyData); 
  const [filteredProducts, setFilteredProducts] = useState(dummyData); 
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    category: '',
    company: '',
    rating: '',
    availability: '',
  });

  const handleFilterChange = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value,
    });
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    let filtered = dummyData;

    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    if (filters.company) {
      filtered = filtered.filter(product => product.company === filters.company);
    }

    if (filters.rating) {
      filtered = filtered.filter(product => product.rating >= parseFloat(filters.rating));
    }

    if (filters.availability) {
      filtered = filtered.filter(product => product.availability === filters.availability);
    }

    if (filters.minPrice) {
      filtered = filtered.filter(product => product.price >= parseFloat(filters.minPrice));
    }

    if (filters.maxPrice) {
      filtered = filtered.filter(product => product.price <= parseFloat(filters.maxPrice));
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="flex">
      <aside className="w-1/4">
        <Filters onFilterChange={handleFilterChange} />
      </aside>
      <main className="w-3/4">
        <ProductList products={filteredProducts} />
      </main>
    </div>
  );
};

export default AllProducts;

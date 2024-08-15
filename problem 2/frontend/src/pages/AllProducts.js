import React, { useState,useEffect } from 'react';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import dummyData from './dummyData'; 

const AllProducts = () => {
  const [products, setProducts] = useState(dummyData); // Use dummy data
  const [filteredProducts, setFilteredProducts] = useState(dummyData); // For filtered products
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
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

    if (filters.minPrice) {
      filtered = filtered.filter(product => product.price >= parseFloat(filters.minPrice));
    }

    if (filters.maxPrice) {
      filtered = filtered.filter(product => product.price <= parseFloat(filters.maxPrice));
    }

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Filters onFilterChange={handleFilterChange} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default AllProducts;

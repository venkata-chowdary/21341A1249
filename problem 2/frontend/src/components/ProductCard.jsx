import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-700 rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105 bg-dark-card">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-dark-accent">{product.name}</h3>
        <p className="text-gray-400">{product.company}</p>
        <p className="text-xl font-bold">{`$${product.price}`}</p>
        <p className="text-sm text-gray-500">{`${product.discount}% off`}</p>
        <Link to={`/product/${product.id}`} className="block mt-4 bg-primary text-white py-2 px-4 rounded-full text-center">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

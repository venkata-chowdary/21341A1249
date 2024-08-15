import React from 'react';

const ProductDetail = ({ product }) => {
    return (
        <div className="p-4">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
            <h2 className="font-poppins font-bold text-2xl mt-4">{product.name}</h2>
            <p className="text-gray-600">{product.company}</p>
            <p className="text-xl font-bold">{`$${product.price}`}</p>
            <p className="text-sm text-gray-500">{`${product.discount}% off`}</p>
            <p className="mt-4">{`Category: ${product.category}`}</p>
            <p className="mt-2">{`Rating: ${product.rating}`}</p>
            <p className="mt-2">{`Availability: ${product.availability ? 'In Stock' : 'Out of Stock'}`}</p>
        </div>
    );
};

export default ProductDetail;

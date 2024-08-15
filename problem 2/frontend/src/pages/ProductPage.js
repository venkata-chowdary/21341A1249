import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`/api/products/${id}`); // Your backend API
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  return product ? <ProductDetail product={product} /> : <p>Loading...</p>;
};

export default ProductPage;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import dummyData from './dummyData';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = () => {
      const foundProduct = dummyData.find(item => item.id === parseInt(id));
      setProduct(foundProduct || null);
    };

    fetchProduct();
  }, [id]);

  return product ? <ProductDetail product={product} /> : <p>Loading...</p>;
};

export default ProductPage;

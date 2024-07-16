import React, { useEffect, useState } from 'react';
import ProductItem from '../ProductItem';
import './products.css';

const Products = ({ filterProduct = [] }) => {
  const [products, setProducts] = useState(filterProduct);
  console.log(filterProduct, "product.js");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:8080/product');
        const data = await res.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className='flex justify-around flex-wrap gap-2 mt-6'>
      {products.length > 0 ? (
        products.map(item => (
          <ProductItem key={item._id} item={item} />
        ))
      ) : (
        <p>No products available</p>
      )}
    </main>
  );
};

export default Products;
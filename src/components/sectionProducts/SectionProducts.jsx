import React, { useState, useEffect } from 'react'
import clientAxios from '../../config/clientAxios';
import Card from '../Card/Card'
import './SectionProducts.css'

const SectionProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await clientAxios('/products');
      const data = await response.data;
      setProducts(data);
      setIsLoading(true);
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    getProducts();
  },[]);

  return (
    <div className='grid-container'>
      {
        isLoading
      ?
        products.map(product => <Card key={product._id} prod={product} />)
      :
        <h1>Cargando</h1>
      }
    </div>
  );
}

export default SectionProducts
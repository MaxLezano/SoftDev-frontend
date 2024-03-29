import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
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
      setProducts(data.products);
      setIsLoading(true);
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    getProducts();
  },[]);

  return (
    <>
      <h2 className='text-center fw-light px-4 mt-5'>Los mejores precios, y equipos actuales</h2>
      <h2 className='container fw-light mt-5'>
        Celulares
        <small className='fs-6 ps-4'>
          <Link className='text-decoration-none' to='/products'>Ver más equipos</Link>
        </small>
      </h2>
      <div className='grid-container'>
        {
          isLoading
        ?
          products.map(product => <Card key={product._id} prod={product} />)
        :
          <h1>Cargando</h1>
        }
      </div>
    </>
  );
}

export default SectionProducts
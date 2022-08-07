import React, { useState, useEffect } from 'react';
import clientAxios from '../../config/clientAxios';
import './carousel.css';

function Carousel() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await clientAxios('/products');
      const data = await response.data;
      setProducts(data.products);
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    getProducts();
  },[]);
  
  return (
    <div id='carouselExampleDark' className='carousel carousel-dark slide cont-carousel' data-bs-ride='carousel'>
      <div className='carousel-inner'>
        <div className='carousel-item active' data-bs-interval='3000'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='justify-content-center flex-column col-sm-4 cont-description'>
                <h5 className='text-center fw-bolder text-uppercase'>Phone'() e-commerce</h5>
                <p className='text-center mb-0 text-muted fst-italic desc-text-carousel'>Tienda de celulares online</p>
              </div>
              <div className='d-flex justify-content-center flex-column col-12 col-sm-6'>
                <img src='https://www.cronista.com/files/image/449/449213/621670f4ec1c1.jpg' alt='asdasd' />
              </div>
            </div>
          </div>
        </div>
        {products.map((product) => (product.isAproved &&
          <div className='carousel-item' key={product._id} data-bs-interval='3000'>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='justify-content-center flex-column col-sm-4 cont-description'>
                  <h5 className='text-center fw-bolder text-uppercase'>{product.name}</h5>
                  <p className='text-center mb-0 text-muted fst-italic desc-text-carousel'>{product.description}</p>
                </div>
                <div className='d-flex justify-content-center flex-column col-12 col-sm-6'>
                  <img src={product.imgFavorite} alt={product.name} />
                </div>
              </div>
            </div>
          </div>
        ))}
        <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleDark' data-bs-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleDark' data-bs-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
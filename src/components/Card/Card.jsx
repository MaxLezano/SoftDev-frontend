import React, { useState } from 'react';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Card.css'

import { products } from '../../fakeBack';

const Card = () => {
  const [ isFavorite, setIsFavorite] = useState(true);

  return (
    <>
      {products.map(product => (
        <div className='card card_container'>
          <div className='container px-0'>
            {
              isFavorite
              ?
                <FavoriteRoundedIcon type='button' className='border-0 icon-fav' />
              :
                <FavoriteBorderRoundedIcon type='button' className='border-0 icon-fav' />
            }
            
            <img className='col-12 bg-img' src={product.img} alt={product.name}/>
          </div>
          <div className='card-body card_body'>
            <div className='row'>
              <p className='mb-0 fw-bold name-text'>{product.name}</p>
              <p className='mb-0'>${product.price}</p>
              <small className='text-muted fst-italic desc-text'>{product.description}</small>
              <small className='text-muted'>stock: {product.stock}</small>
              <div className='mt-2 d-flex justify-content-between align-items-end'>
                <button className='btn btn-danger'>COMPRAR</button>
                <ShoppingCartIcon sx={{color: 'gray'}} />
              </div>
            </div>
          </div>
        </div> 
      ))}
    </>
  );
}

export default Card;
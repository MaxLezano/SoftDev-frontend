import React, { useState } from 'react';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Card.css'

const Card = (props) => {
  const { name, price, description, img, stock } = props.prod;
  const [ isFavorite, setIsFavorite] = useState(false);

  const addFavorite = () => {
    if (isFavorite === true) {
      setIsFavorite(false);
    } else {
      setIsFavorite(true);
    }
  }

  return (
    <div className='card card_container'>
      <div className='container px-0'>
        {
            isFavorite
          ?
            <FavoriteRoundedIcon type='button' className='border-0 icon-fav' onClick={addFavorite} />
          :
            <FavoriteBorderRoundedIcon type='button' className='border-0 icon-fav' onClick={addFavorite} />
        }
        
        <img className='col-12 bg-img' src={img} alt={name}/>
      </div>
      <div className='card-body card_body'>
        <div className='row'>
          <p className='mb-0 fw-bold name-text'>{name}</p>
          <p className='mb-0'>${price}</p>
          <small className='text-muted fst-italic desc-text'>{description}</small>
          <small className='text-muted'>stock: {stock}</small>
          <div className='mt-2 d-flex justify-content-between align-items-end'>
            <button className='btn btn-danger'>COMPRAR</button>
            <ShoppingCartIcon sx={{color: 'gray'}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
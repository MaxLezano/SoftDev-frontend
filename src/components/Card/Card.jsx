import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginModal from '../LoginModal/LoginModal';
import './Card.css'

const Card = (props) => {
  const isLogin = true;
  const { name, price, description, img, stock, _id } = props.prod;
  const [ isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

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
            isLogin
          ?
              isFavorite
            ?
              <FavoriteRoundedIcon type='button' className='border-0 icon-fav' onClick={addFavorite} />
            :
              <FavoriteBorderRoundedIcon type='button' className='border-0 icon-fav' onClick={addFavorite} />
          :
          null
        }
        
        <img className='col-12 bg-img' src={img} alt={name}/>
      </div>
      <div className='card-body card_body'>
        <div className='row'>
          <p className='mb-0 fw-bold name-text'>{name}</p>
          <p className='mb-0'>${price}</p>
          <small className='text-muted fst-italic desc-text'>{description}</small>
          <small className='text-muted'>stock: {stock}</small>
            {
                isLogin
              ?
                <div className='mt-2 d-flex justify-content-between align-items-end'>
                  <button className='btn btn-danger' onClick={() => navigate(`/product/${_id}`)}>COMPRAR</button>
                  <ShoppingCartIcon sx={{color: 'gray'}} />
                </div>
              :
                <div className='mt-2 d-flex justify-content-center align-items-end'>
                  <button className='btn btn-danger' data-bs-toggle='modal' data-bs-target='#loginModal'>COMPRAR</button>
                  <LoginModal />
                </div>
            }
        </div>
      </div>
    </div>
  );
}

export default Card;
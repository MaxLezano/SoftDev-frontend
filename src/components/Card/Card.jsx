import React, { useState } from 'react'
import './Card.css'
import img from '../../assets/images/logo-black.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Card = () => {
  
  const [ isColor, setIsColor] = useState(false)
 
return (
  <div className="card card_container">
    <img src={img} className="card-img-top img-fluid" alt="img"/>
    <div className="card-body card_body shadow">
      <div>
        <p className="card-title text-center">Nombre del producto</p>
        <div className='d-flex justify-content-around'>
          <div onClick={() =>setIsColor(!isColor)}>
            <FavoriteIcon className={`iconFav ${isColor && "favorit"}`}/>
          </div>
          <div>
            <ShoppingCartIcon className= "buy"/>
          </div>
        </div>
      </div>
        
      <div className='text-center'>
        <h6 >30.000</h6>
        <a href="/" className="btn btn-primary">Comprar</a>
      </div>
    </div>
  </div>
  )
}

export default Card
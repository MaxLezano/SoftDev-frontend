import React, { useState } from 'react'
import './Card.css'
import img from '../../assets/images/logo-black.png'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Card = () => {
  
  const [ isColor, setIsColor] = useState(false)
 
return (
  <div className="card card_container">
    <img src={img} className="card-img-top" alt="img"/>
    <div className="card-body shadow">
      <div className="div d-flex justify-content-between">
        <p className="card-title">Nombre del producto</p>
        <div onClick={() =>setIsColor(!isColor)}>
          <FavoriteRoundedIcon className={`border-0 iconFav ${isColor && "favorit"}`}/>
        </div>
        <div>
          <ShoppingCartIcon className= "buy"/>
        </div>
      </div>
      <div className="div card-buy d-flex justify-content-between">
        <h6>30.000</h6>
       <a href="/" className="btn btn-primary">Comprar</a>
      </div>
    </div>
  </div>
  )
}

export default Card
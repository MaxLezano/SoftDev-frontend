import React, { useState } from 'react'
import './Card.css'
import imagen from '../../assets/images/logo-black.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Card = () => {
  
  const [ isColor, setIsColor] = useState(false)
 
return (
  <div className="card" style={{width: "16rem"}}>
    <img src={imagen} className="card-img-top" alt="..."/>
    <div className="card-body shadow">
      <div className="div d-flex justify-content-between">
        <p className="card-title">Nombre del producto</p>
        <div onClick={() =>setIsColor(!isColor)}>
          <FavoriteIcon className={`iconFav ${isColor && "favorito"}`}/>
        </div>
        <div>
          <ShoppingCartIcon className= "buy"/>
        </div>
      </div>
      <div className="div card-comprar d-flex justify-content-between">
        <h6>30.000</h6>
       <a href="/" className="btn btn-primary">Comprar</a>
      </div>
    </div>
  </div>
  )
}

export default Card
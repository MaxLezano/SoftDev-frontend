import React, { useState } from 'react';

const ShopCart = ({prod, setSubTotal }) => {
  const [cantidad, setCantidad] = useState(1)
  
  const handleClick = (sign) => {
    if ( sign === '+') setCantidad(cantidad + 1)
    else setCantidad(cantidad - 1)
    setSubTotal(cantidad * prod.price)
  }
   
  
    
  return (
          <div className='cart_grid'>
            <div>
              <img src={prod.img} className='card img_cart' alt="img carrito" />
            </div>
            <div className='card-content'>
              <h2>{prod.name}</h2>
              <h6><span onClick={ () => cantidad > 1 && handleClick("-")}>-</span>
              {cantidad}
              <span onClick={ () => cantidad < prod.stock && handleClick("+")}>+</span></h6>
              <span>stock: {prod.stock}</span><br/>
              <button type="button" className="btn btn-outline-danger">Eliminar</button>
            </div>
              <div>
                <h5>Precio $ {prod.price}</h5>
              </div>
            </div>
   
  )
}

export default ShopCart
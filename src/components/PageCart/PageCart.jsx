import React from 'react'
import img from '../../assets/images/logo-white.png'
import './PageCart.css'
const PageCart = () => {
  return (
    
     <div className='page_cart container-lg card shadow'>
       <h1>Carrito</h1>
       <div className='cart-container'>
       <div className='cart_grid'>
            <div>
              <img src={img} className='card img_cart' alt="img carrito" />
            </div>
            <div className='card-content'>
              <h2>Nombre del producto</h2>
              <h6><span>-</span> 1 <span>+</span></h6>
              <span>10 disponibles</span><br/>
              <button type="button" class="btn btn-outline-danger">Eliminar</button>
            </div>
              <div>
                <h5>Precio $ 25.000</h5>
              </div>
            </div>
          <div className='card-buy-container'>
             <div className='card-buy'>
              <h1>Total $ 50.000</h1>
              <button type="button" class="btn btn-success">Comprar</button>
             </div>
          </div>
     </div>
     </div>
    
  )
}

export default PageCart
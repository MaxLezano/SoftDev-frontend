import React from 'react'
import './PageFavComp.css'
import img from '../../assets/images/logo-white.png'
const PageFavComp = () => {
  return (
    <div className='container'>
         <div className='card fav_container shadow'>
         <h5 className='h5'>Favoritos</h5>
           <div className='fav_card'>
              <div>
               <img src={img} className='card img_fav' alt="img Favorito" />
              </div>
              <div className='fav_content'>
                <h3>Nombre del producto</h3>
                <h5>Precio $ 25.000</h5>
                <div>
                  <button type="button" className="btn btn-outline-danger">Eliminar</button>
                </div>

              </div>
            </div>
          </div>
    </div>
  )
}

export default PageFavComp
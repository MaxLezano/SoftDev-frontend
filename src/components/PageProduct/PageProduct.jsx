import React from 'react'
import img from '../../assets/images/logo-white.png'

import { useLoginContext } from '../../providers/LoginProvider'

import './PageProduct.css'

const PageProduct = () => {
  const loginUser = useLoginContext()
// const addCart =  () => {
//     fetch(`http://localhost:8080/users/carrito/62ee98e98a9e4005dafb72ba`, {
//       method: "PATCH",
//       body : JSON.stringify({
//         "favorite": [],
//         "cart":[{"favorito": "Favorito Carrito"}],
        
//     }),
//     headers: {
//       "content-type": "application/json; charset=UTF-8",
//   },
//     })
//         alert("agrwgado al carrito")
//    }  



  return (
    <div className='container_page_grid shadow'>
     
      <div className='m-2 grid_img'>
                <h1>titulo producto</h1>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={img} className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                      <img src={img} className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                      <img src={img} className="d-block w-100" alt="" />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                  </button>
                </div>
              </div>
              <div className='m-2 grid_col_des'>
                <h2>Descipcion</h2>
                <p className='p_des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit non dicta neque numquam aperiam quos. Error dolor voluptatem beatae quam accusantium possimus vitae et ad qui animi quasi quis deserunt totam maxime eaque, consectetur eveniet, id libero pariatur culpa! Reiciendis voluptates quasi consequuntur ducimus cum repellendus obcaecati, facilis dolore sit.</p>
              </div>
              <div className='m-2 grid_col_price'>
                  <h3>$30.000</h3>
                  <button className='btn btn-primary my-2 mx-1'>Comprar</button>

                  <button className='btn btn-success my-2 mx-1' >Agregar al carrito</button>
                  <h4 className='mx-2'>Stock</h4>
                  {
                    loginUser ?
                    
                      <>
                        <h6 className='mx-2'>Datos de envio</h6>
                        <p className='mx-2'>Direccion</p>
                        <p className='mx-2'>Codigo postal</p>
                        <p className='mx-2'>telefono</p>
                      </>
                    :
                    null
                  }

                  <button className='btn btn-success my-2 mx-1'>Agregar al carrito</button>
                  <h4 className='mx-2'>Stock</h4>
                  <h6 className='mx-2'>Datos de envio</h6>
                  <p className='mx-2'>Direccion</p>
                  <p className='mx-2'>Codigo postal</p>
                  <p className='mx-2'>telefono</p>

              </div>
         
        </div>
  )
}

export default PageProduct;
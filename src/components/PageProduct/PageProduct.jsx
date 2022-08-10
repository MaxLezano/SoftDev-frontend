
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './PageProduct.css'
import clientAxios from '../../config/clientAxios'

const PageProduct = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
const getData = () => {
    clientAxios.get(`/products/${id}`)
    .then(res => setProduct(res.data))
   }
   const { name, price, description, img, stock } = product
    useEffect(() => {
      getData()
    },[])
  return (
    <div className='container_page_grid shadow'>
     
      <div className='m-2 grid_img'>
                <h1>{name}</h1>
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
                <h2>Descripcion</h2>
                <p className='p_des'>{description}</p>
              </div>
              <div className='m-2 grid_col_price'>
                  <h3>$ {price}</h3>
                  <button className='btn btn-primary my-2 mx-1'>Comprar</button>
                  <button className='btn btn-success my-2 mx-1' >Agregar al carrito</button>
                  <h4 className='mx-2'>Stock: {stock}</h4>
                  <h6 className='mx-2'>Datos de envio</h6>
                  <p className='mx-2'>Direccion</p>
                  <p className='mx-2'>Codigo postal</p>
                  <p className='mx-2'>telefono</p>
              </div>
         
        </div>
  )
}

export default PageProduct;
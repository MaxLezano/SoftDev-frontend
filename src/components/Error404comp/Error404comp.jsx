import React from 'react'
import './Error404comp.css'
import { useNavigate } from 'react-router-dom'
const Error404comp = () => {
  const navigate = useNavigate()
  return (
    
    <div className='container404'>
      <h2>Página no encontrada</h2>
      <h1>404</h1>
      <p>Probablemente la página no exista</p>
      <button onClick={ () => navigate('/')} className='btn btn-primary rounded-pill'>Volver a inicio</button>
    </div>
    
  )
}

export default Error404comp
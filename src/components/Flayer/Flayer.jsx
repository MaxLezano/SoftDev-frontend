import React from 'react';
import './flayer.css';

function Flayer() {
  return (
    <div className='container-fluid px-0  justify-content-end align-items-center mb-5 img-flayer'>
      <div className='d-flex flex-column col-xl-3'>
        <h4 className='me-5 mb-0'>DESCUBRE</h4>
        <h1 className='me-5 mb-0 fw-bold'>DESCUENTOS</h1>
        <h1 className='me-5 fw-bold'>UNÍCOS</h1>
        <small className='me-4 mt-1 fst-italic text-muted'>Aplica términos y condiciones</small>
      </div>
    </div>
  );
}

export default Flayer;
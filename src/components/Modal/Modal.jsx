import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import './modal.css';

function Modal() {
  return (
    <>
     <div className='modal fade bg-blur-modal' id='loginModal' data-bs-backdrop='static' aria-labelledby='loginModalLabel' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered d-flex justify-content-center'>
        <div className='modal-content border-0 p-3 d-flex align-items-center'>
          <button type='button' className='btn-close btn-close-white align-self-end' data-bs-dismiss='modal' aria-label='Close'></button>
          <h3 className='text-white text-center pb-3'>INGRESAR</h3>
          <form className='d-flex flex-column align-items-center col-10'>
            <Input typeInput='mail' classNameDivInput='my-3 col-12' labelText='Correo'/>
            <Input typeInput='password' classNameDivInput='my-3 col-12' labelText='Contraseña'/>
            <div className='container-fluid px-0 d-flex justify-content-between align-items-center'>
              <div className='form-check'>
                <input className='form-check-input border-0' type='checkbox' value='' id='flexCheckDefault' />
                <label className='form-check-label text-white fst-italic text-below' htmlFor='flexCheckDefault'>RECORDARME</label>
              </div>
              <Link to='/error404' className='text-white fst-italic text-decoration-none text-below'>¿Necesitas ayuda?</Link>
            </div>
            <button type='button' className='btn border-0 mt-4 mb-3 col-6 btn-color'>ENTRAR</button>
          </form>
          <div className='container text-center d-flex justify-content-center pb-3'>
            <p className='mb-0 text-muted me-2 text-below'>Si no tienes una cuenta.</p>
            <button className='btn border-0 p-0 text-white text-below' data-bs-toggle='modal' data-bs-target='#loginModal'>Regístrate aquí</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Modal;
<>
<div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Show a second modal and hide this one with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Hide this modal and show the first with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
      </div>
    </div>
  </div>
</div>
<a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a>
</>
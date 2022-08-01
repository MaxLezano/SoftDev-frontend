import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import './loginModal.css';

function Modal() {
  /* lógica POST del login */
  return (
    <>
    {/* modal LOGIN */}
    <div className='modal fade bg-blur-modal' id='loginModal' data-bs-backdrop='static' aria-labelledby='loginModalLabel' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered d-flex justify-content-center'>
        <div className='modal-content border-0 p-3 d-flex align-items-center'>
          <button type='button' className='btn-close btn-close-white align-self-end' data-bs-dismiss='modal' aria-label='Close'></button>
          <h3 className='text-white text-center pb-3'>INGRESAR</h3>
          <form className='d-flex flex-column align-items-center col-10'>
            <Input typeInput='mail' classNameDivInput='my-3 col-12' labelText='Correo'/>
            <Input typeInput='password' classNameDivInput='my-3 col-12' labelText='Contraseña'/>
            <div className='container-fluid px-0 d-flex justify-content-between align-items-center'>
              <div className='form-check d-flex align-items-center'>
                <input className='form-check-input border-0 me-1' type='checkbox' value='' id='flexCheckDefault' />
                <label className='form-check-label text-white fst-italic text-below' htmlFor='flexCheckDefault'>recordarme</label>
              </div>
              <Link to='/error404' className='text-white fst-italic text-decoration-none text-below'>¿Necesitas ayuda?</Link>
            </div>
            <button type='button' className='btn border-0 mt-4 mb-3 col-6 btn-color'>ENTRAR</button>
          </form>
          <div className='container text-center d-flex justify-content-center pb-3'>
            <p className='mb-0 text-muted me-2 text-below'>Si no tienes una cuenta.</p>
            <button className='btn border-0 p-0 text-white text-below' data-bs-toggle='modal' data-bs-target='#registerModal'>Regístrate aquí</button>
          </div>
        </div>
      </div>
    </div>
    {/* llamar al componente RegisterModal */}
    {/* modal REGISTER (mover a componente RegisterModal) */}
    <div className='modal fade bg-blur-modal' id='registerModal' data-bs-backdrop='static' aria-labelledby='registerModalLabel' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered d-flex justify-content-center'>
        <div className='modal-content border-0 p-3 d-flex align-items-center'>
          <button type='button' className='btn-close btn-close-white align-self-end' data-bs-dismiss='modal' aria-label='Close'></button>
          <h3 className='text-white text-center pb-3'>REGISTRARSE</h3>
          <form className='d-flex flex-column align-items-center col-10'>
            <Input typeInput='text' classNameDivInput='my-2 col-12' labelText='Nombre y Apellido'/>
            <Input typeInput='mail' classNameDivInput='my-2 col-12' labelText='Correo'/>
            <Input typeInput='password' classNameDivInput='my-2 col-12' labelText='Contraseña'/>
            <Input typeInput='password' classNameDivInput='my-2 col-12' labelText='Repetir contraseña'/>
            <button type='button' className='btn border-0 mt-4 mb-3 col-6 btn-color'>ENVIAR</button>
          </form>
          <div className='container text-center d-flex justify-content-center pb-3'>
            <p className='mb-0 text-muted me-2 text-below'>¿Ya tienes una cuenta?.</p>
            <button className='btn border-0 p-0 text-white text-below' data-bs-toggle='modal' data-bs-target='#loginModal'>Ingresa ahora</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Modal;
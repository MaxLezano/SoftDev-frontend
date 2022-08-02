import React from 'react';
import Input from '../Input/Input';

function RegisterModal() {
  return (
    <div className='modal fade bg-blur-modal' id='registerModal' data-bs-backdrop='static' aria-labelledby='registerModalLabel' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered d-flex justify-content-center'>
        <div className='modal-content border-0 p-3 d-flex align-items-center'>
          <button type='button' className='btn-close btn-close-white align-self-end' data-bs-dismiss='modal' aria-label='Close'></button>
          <h3 className='text-white text-center pb-3'>REGISTRARSE</h3>
          <form className='d-flex flex-column align-items-center col-10'>
            <Input typeInput='text' classNameDivInput='mb-1 col-12 mt-3' labelText='Nombre y Apellido'/>
            <Input typeInput='mail' classNameDivInput='mb-1 col-12 mt-3' labelText='Correo'/>
            <Input typeInput='password' classNameDivInput='mb-1 col-12 mt-3' labelText='Contraseña'/>
            <Input typeInput='password' classNameDivInput='mb-1 col-12 mt-3' labelText='Repetir contraseña'/>
            <button type='button' className='btn border-0 mt-4 mb-3 col-6 btn-color'>ENVIAR</button>
          </form>
          <div className='container text-center d-flex justify-content-center pb-3'>
            <p className='mb-0 text-muted me-2 text-below'>¿Ya tienes una cuenta?.</p>
            <button className='btn border-0 p-0 text-white text-below' data-bs-toggle='modal' data-bs-target='#loginModal'>Ingresa ahora</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;
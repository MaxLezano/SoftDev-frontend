import React from 'react';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';

function ContactModal() {
  return (
    <div className='modal fade bg-blur-modal' id='contactModal' data-bs-backdrop='static' aria-labelledby='registerModalLabel' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered d-flex justify-content-center'>
        <div className='modal-content border-0 p-3 d-flex align-items-center'>
          <button type='button' className='btn-close btn-close-white align-self-end' data-bs-dismiss='modal' aria-label='Close'></button>
          <h3 className='text-white text-center pb-3'>CONTÁCTANOS</h3>
          <form className='d-flex flex-column align-items-center col-10'>
            <Input typeInput='text' classNameDivInput='mb-1 col-12 mt-3' labelText='Nombre y Apellido'/>
            <Input typeInput='mail' classNameDivInput='mb-1 col-12 mt-3' labelText='Correo'/>
            <Textarea classNameDivInput='mb-1 col-12 mt-3' colsText="30" rowstext="10" descriptionTextarea='Descripción' />
            <button type='button' className='btn border-0 mt-4 mb-3 col-6 btn-color'>ENVIAR</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactModal
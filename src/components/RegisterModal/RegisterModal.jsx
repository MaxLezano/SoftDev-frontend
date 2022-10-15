import React, { useState } from 'react';
import Input from '../Input/Input';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import clientAxios from '../../config/clientAxios';
import { click } from '@testing-library/user-event/dist/click';

function RegisterModal() {
  const [register, setRegister] = useState({
    email: '',
    password: '',
    repeatPassword: ''
  });

  const [nameError, setNameError] = useState('');
  const [samePassword, setSamePassword] = useState('');
  const [errorMail, setErrorMail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [resp, setResp] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (register.password === register.repeatPassword) {
      setSamePassword('');
      delete register.repeatPassword; 
      try {
        const response = await clientAxios.post('/users', register);
        setResp(response.data);
        const btnLoginModal = document.getElementById('btnToLogin');
        btnLoginModal.setAttribute('data-bs-target', '#confirmModal');
        click(btnLoginModal);
        setTimeout(() => {
          btnLoginModal.setAttribute('data-bs-target', '#loginModal');
          click(btnLoginModal);        
        }, 5000);
      } catch (error) {
        const errors = await error.response.data.errors;
        console.log(errors)
        errors.find(error => error.param === 'nameComplete'? setNameError(error.msg) : setNameError(''));
        errors.find(error => error.param === 'email'? setErrorMail(error.msg) : setErrorMail(''));
        errors.find(error => error.param === 'password'? setErrorPassword(error.msg) : setErrorPassword(''));
      }
    } else {
      setSamePassword('las contraseñas no coinciden');
    }
  }

  const handleChange = ({ target }) => {
    setRegister({
      ...register,
      [target.name]: target.value
    });
  }

  return (
    <>
      <div className='modal fade bg-blur-modal' id='registerModal' data-bs-backdrop='static' aria-labelledby='registerModalLabel' aria-hidden='true'>
        <div className='modal-dialog modal-dialog-centered d-flex justify-content-center'>
          <div className='modal-content border-0 p-3 d-flex align-items-center'>
            <button type='button' className='btn-close btn-close-white align-self-end' data-bs-dismiss='modal' aria-label='Close'></button>
            <h3 className='text-white text-center pb-3'>REGISTRARSE</h3>
            <form className='d-flex flex-column col-10' onSubmit={handleSubmit}>
              <Input 
                typeInput='text' 
                classNameDivInput='mb-1 col-12 mt-3' 
                labelText='Nombre y Apellido'
                nameInput='name'
                onChangeInput={handleChange}
              />
              <small className='mb-1 ps-2 fst-italic text-error-input'>
                {nameError}
              </small>
              <Input 
                typeInput='mail' 
                classNameDivInput='mb-1 col-12 mt-3' 
                labelText='Correo'
                nameInput='email'
                onChangeInput={handleChange}
              />
              <small className='mb-1 ps-2 fst-italic text-error-input'>
                {errorMail}
              </small>
              <Input 
                typeInput='password' 
                classNameDivInput='mb-1 col-12 mt-3' 
                labelText='Contraseña'
                nameInput='password'
                onChangeInput={handleChange}
              />
              <small className='mb-1 ps-2 fst-italic text-error-input'>
                {errorPassword}
              </small>
              <Input 
                typeInput='password' 
                classNameDivInput='mb-1 col-12 mt-3' 
                labelText='Repetir contraseña'
                nameInput='repeatPassword'
                onChangeInput={handleChange}
              />
              <small className='mb-1 ps-2 fst-italic text-error-input'>
                {samePassword}
              </small>
              <button type='submit' className='btn border-0 mt-4 mb-3 col-6 align-self-center btn-color'>ENVIAR</button>
            </form>
            <div className='container text-center d-flex justify-content-center pb-3'>
              <p className='mb-0 text-muted me-2 text-below'>¿Ya tienes una cuenta?.</p>
              <button id='btnToLogin' className='btn border-0 p-0 text-white text-below' data-bs-toggle='modal' data-bs-target='#loginModal'>Ingresa ahora</button>
            </div>
          </div>
        </div>
      </div>
      <ConfirmModal resp={resp} />
    </>
  );
}

export default RegisterModal;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clientAxios from '../../config/clientAxios';
import Input from '../Input/Input';
import RegisterModal from '../RegisterModal/RegisterModal';
import './loginModal.css';

function Modal() {
  const [login, setLogin] = useState({
    email: '',
    password: ''
  });
  const [errorMail, setErrorMail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await clientAxios.post('/login', login);
      localStorage.setItem('user-id', response.data.id);
      localStorage.setItem('access-token', response.data.token);
      window.location.reload(true);
    } catch (error) {
      const data = await error.response.data;
      if (data.errors) {
        data.errors.find(error => error.param === 'email'? setErrorMail(error.msg) : setErrorMail(''));
        data.errors.find(error => error.param === 'password'? setErrorPassword(error.msg) : setErrorPassword(''));
      } else {
        data === 'verificar los datos'? setErrorMail(data) : setErrorMail('');
        setErrorPassword(data);
      }
    }
  }

  const handleChange = ({ target }) => {
    setLogin({
      ...login,
      [target.name]: target.value
    });
  }

  return (
    <>
      <div className='modal fade bg-blur-modal' id='loginModal' data-bs-backdrop='static' aria-labelledby='loginModalLabel' aria-hidden='true'>
        <div className='modal-dialog modal-dialog-centered d-flex justify-content-center'>
          <div className='modal-content border-0 p-3 d-flex align-items-center'>
            <button type='button' className='btn-close btn-close-white align-self-end' data-bs-dismiss='modal' aria-label='Close'></button>
            <h3 className='text-white text-center pb-3'>INGRESAR</h3>
            <form className='d-flex flex-column col-10' onSubmit={handleSubmit}>
              <Input 
                typeInput='mail'
                classNameDivInput='mt-4 mb-1 col-12' 
                labelText='Correo' 
                nameInput='email' 
                onChangeInput={handleChange} 
              />
              <small className='ps-2 fst-italic text-error-input'>
                {errorMail}
              </small>
              <Input 
                typeInput='password'
                classNameDivInput='mt-4 mb-1 col-12' 
                labelText='Contraseña' 
                nameInput='password' 
                onChangeInput={handleChange}
              />
              <small className='ps-2 fst-italic text-error-input'>
                {errorPassword}
              </small>
              <div className='container-fluid mt-1 d-flex justify-content-end align-items-center'>
                <Link to='/error404' className='text-white fst-italic text-decoration-none text-below'>¿Necesitas ayuda?</Link>
              </div>
              <button type='submit' className='btn border-0 mt-4 mb-3 col-6 align-self-center btn-color'>ENTRAR</button>
            </form>
            <div className='container text-center d-flex justify-content-center pb-3'>
              <p className='mb-0 text-muted me-2 text-below'>Si no tienes una cuenta.</p>
              <button className='btn border-0 p-0 text-white text-below' data-bs-toggle='modal' data-bs-target='#registerModal'>Regístrate aquí</button>
            </div>
          </div>
        </div>
      </div>
      <RegisterModal />
    </>
  );
}

export default Modal;
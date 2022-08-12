import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import clientAxios from '../../config/clientAxios';
import './profileModal.css';

function ProfileModal(props) {
  let { name, contactNumber, address, postalCode } = props.user;
  let [userUpdate, setUserUpdate] = useState({
    name: '',
    contactNumber: '',
    address: '',
    postalCode: ''
  });

  const handleSubmit = async () => {
    const userId = localStorage.getItem('user-id');
    try {
      const response = await clientAxios.patch(`/users/${userId}`, userUpdate); 
      const data = await response.data;
      window.confirm(data.msg)
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = ({ target }) => {
    setUserUpdate({
      ...userUpdate,
      [target.name]: target.value
    });
  }

  return (
    <div className='modal fade bg-blur-modal' id='profileModal' data-bs-backdrop='static' aria-labelledby='profileModalLabel' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered d-flex justify-content-center'>
        <div className='modal-content border-0 p-3 d-flex align-items-center'>
          <button id='closeConfirmChange' type='button' className='btn-close btn-close-white align-self-end' data-bs-dismiss='modal' aria-label='Close'></button>
          <h3 className='text-white text-center mb-0'>DATOS DEL PERFIL</h3>
          <small className='pb-3 subtitle-profile'>No compartas con nadie ésta información</small>
          <form className='d-flex flex-column col-10' onSubmit={handleSubmit}>
            {
              name === '' || name === undefined || name === null
              ? <small className='pb-3 pe-2 text-end mb-0 fst-italic text-error-input'>datos aún no cargados</small>
              : <small className='pb-3 pe-2 text-end mb-0 fst-italic text-error-input'>{name}</small>
            }
            <Input nameInput='name' typeInput='text' labelText='Cambiar nombre completo' classNameDivInput='mb-1' onChangeInput={handleChange} />
            {
              contactNumber === '' || contactNumber === undefined || contactNumber === null
              ? <small className='pb-3 pe-2 text-end mb-0 fst-italic text-error-input'>datos aún no cargados</small>
              : <small className='pb-3 pe-2 text-end mb-0 fst-italic text-error-input'>{contactNumber}</small>
            }
            <Input nameInput='contactNumber' typeInput='number' labelText='Cambiar número de contacto' classNameDivInput='mb-1' onChangeInput={handleChange} />
            {
              address === '' || address === undefined || address === null
              ? <small className='pb-3 pe-2 text-end mb-0 fst-italic text-error-input'>datos aún no cargados</small>
              : <small className='pb-3 pe-2 text-end mb-0 fst-italic text-error-input'>{address}</small>
            }
            <Input nameInput='address' typeInput='text' labelText='Cambiar dirección' classNameDivInput='mb-1' onChangeInput={handleChange} />
            {
              postalCode === '' || postalCode === undefined || postalCode === null
              ? <small className='pb-3 pe-2 text-end mb-0 fst-italic text-error-input'>datos aún no cargados</small>
              : <small className='pb-3 pe-2 text-end mb-0 fst-italic text-error-input'>{postalCode}</small>
            }
            <Input nameInput='postalCode' typeInput='number' labelText='Cambiar código postal' classNameDivInput='mb-1' onChangeInput={handleChange} />
            <button type='submit' className='btn border-0 mt-4 mb-3 col-6 align-self-center btn-color'>GUARDAR</button>
          </form>
          <div className='container text-center d-flex justify-content-center pb-3'>
            <p className='mb-0 text-muted me-2 text-below'>Si tienes problemas con tus datos</p>
            <Link reloadDocument className='btn border-0 p-0 text-white text-below' to='/error404'>Ingresa aquí</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
import React from 'react';
import { Link } from 'react-router-dom';
import logoBlack from '../../assets/images/logo-black.png';
import Input from '../Input/Input';
import './Header.css';

function Header() {
  return (
    <nav className='navbar navbar-expand-lg bg-header'>
      <div className='container-fluid'>
        <Link to={'/'} className='container d-flex mx-0 col-8 col-md-4 col-lg-3 col-xl-2'><img className='col-12' src={logoBlack} alt='Logo'/></Link>
        <button className='navbar-toggler border-0' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse justify-content-end' id='navbarSupportedContent'>
          <ul className='navbar-nav justify-content-end align-items-center pe-3 col-12'>
            <li className='nav-item text-center mx-3'>
              <a className='nav-link active' aria-current='page' href='/#'>INICIO</a>
            </li>
            <li className='nav-item text-center mx-3'>
              <a className='nav-link' href='/#'>CONTACTO</a>
            </li>
            <form className='col-8 col-lg-2 mx-3' role='search'>
              <Input labelText='Buscar' />
            </form>
            <li className='nav-item text-center mx-3'>
              <a className='nav-link' href='/#'>INGRESAR</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
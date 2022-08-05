import React from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../../assets/images/logo-white.png';
import BadgeCart from '../BadgeCart/BadgeCart';
import BadgeFavorite from '../BadgeFavorite/BadgeFavorite';
import Input from '../Input/Input';
import Avatar from '@mui/material/Avatar';
import LoginModal from '../LoginModal/LoginModal';
import './header.css';

import { user } from '../../fakeBack'; // importando endpoint del falso backend

function Header() {
  const isLogin = true; // comprobar login desde el storage
  const { name, imgProfile, favorite, cart } = user;

  const handleChange = (e) => { // setear la búsqueda del producto
    e.preventDefault();
    console.log(e.target.value);
  }

  return (
    <nav className='navbar navbar-expand-lg header'>
      <div className='container-fluid'>
        <Link to={'/'} className='mx-0 col-8 col-md-4 col-lg-3 col-xl-2'>
          <img className='py-2 col-12' src={logoWhite} alt='Logo'/>
        </Link>
        <button className='navbar-toggler border-0' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse justify-content-end' id='navbarSupportedContent'>
          <ul className='navbar-nav d-flex justify-content-end align-items-center col-12'>
            <div className='container-fluid'>
              <div className='row align-items-center ul-menu'>
                <li className='nav-item text-center px-3 mt-2 col-12 col-md-4 col-lg-2 col-xxl-1'>
                  <Link reloadDocument className='nav-link menu-navbar' aria-current='page' to='/'>INICIO</Link>
                </li>
                <li className='nav-item px-3 mt-2 col-12 col-md-4 col-lg-2 col-xxl-2'>
                  <button className='nav-link btn border-0 col-12 menu-navbar'>CONTACTO</button>
                </li>
                <form className='text-white px-3 mt-2 col-10 col-sm-11 col-md-6 col-lg-4 col-xl-3 col-xxl-2' role='search'>
                  <Input labelText='Buscar' typeInput='search' onChangeInput={handleChange} />
                </form>
                {
                  isLogin
                  ?
                    <>
                      <li className='nav-item mt-2 d-flex justify-content-center align-items-center icon-menu'>
                        <button className='nav-link btn border-0 menu-navbar'>
                          <BadgeFavorite 
                          styleIcon={{ color: '#FEFBF6', fontSize: 30 }} 
                          badgeCount={favorite} 
                          colorCircle='secondary'
                        />
                        </button>
                      </li>
                      <li className='nav-item mt-2 d-flex justify-content-center align-items-center icon-menu'>
                        <button className='nav-link btn border-0 menu-navbar'>
                          <BadgeCart 
                          styleIcon={{ color: '#FEFBF6', fontSize: 30 }} 
                          badgeCount={cart} 
                          colorCircle='secondary'
                        />
                        </button>
                      </li>
                      <li className='nav-item mt-2 d-flex align-items-center btn-group flex-column icon-menu'>
                        <button className='nav-link btn border-0 menu-navbar' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
                          <Avatar 
                          alt={name} 
                          src={imgProfile} 
                          sx={{ width: 56, height: 56 }} 
                        />
                        </button>
                        <ul className='dropdown-menu dropdown-menu-end border-0 list-avatar'>
                          <li><a className='dropdown-item' href='/#'>Mi perfil</a></li>
                          <li><a className='dropdown-item' href='/#'>Ayuda</a></li>
                          <li><a className='dropdown-item' href='/#'>Cerrar sesión</a></li>
                        </ul>
                      </li>
                    </>
                  :
                    <li className='nav-item px-3 mt-2 col-12 col-md-4 col-lg-2 col-xxl-2'>
                      <button className='nav-link btn border-0 col-12 menu-navbar' data-bs-toggle='modal' data-bs-target='#loginModal'>INGRESAR</button>
                      <LoginModal />
                    </li>
                }
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
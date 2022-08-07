import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoWhite from '../../assets/images/logo-white.png';
import logoTextWhite from '../../assets/images/logo-text-white.png';
import BadgeCart from '../BadgeCart/BadgeCart';
import BadgeFavorite from '../BadgeFavorite/BadgeFavorite';
import Input from '../Input/Input';
import Avatar from '@mui/material/Avatar';
import LoginModal from '../LoginModal/LoginModal';
import clientAxios from '../../config/clientAxios';
import './header.css';

import { user } from '../../fakeBack';

function Header() {
  const isLogin = true;
  const isAdmin = true;
  const { name, imgProfile, favorite, cart } = user;
  const [ headerClass , setHeaderClass ] = useState('navbar navbar-expand-lg header');
  const [products, setProducts] = useState([]);
  const [productsAux, setProductsAux] = useState([]);
  const [searchProduct, setSearchProduct] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [scrollLogo, setScrollLogo] = useState(false);
  const navigate = useNavigate();
  
  const getProducts = async () => {
    try {
      const response = await clientAxios('/products');
      const data = await response.data;
      setProducts(data.products);
      setProductsAux(data.products);
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    getProducts();
  },[]);

  const handleChange = (event) => {
    setSearchProduct(event.target.value);
    if (searchProduct.length > 1) {
      setIsSearching(true);
      const filterProducts = products.filter((product) => {
        if (product.name.toLowerCase().indexOf(searchProduct.toLowerCase()) !== -1) {
          return product;
        }
      });
      setProductsAux(filterProducts);
    } else {
      setProductsAux(products);
    }
  }
  
  useEffect(() => {
    const handleScroll = () => { 
      if (window.pageYOffset > 0) {
        setHeaderClass('navbar navbar-expand-lg header-scrolled');
        setScrollLogo(true);
      } else {
        setHeaderClass('navbar navbar-expand-lg header');
        setScrollLogo(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <nav className={headerClass}>
      <div className='container-fluid'>
        <Link reloadDocument to='/' className='mx-0 col-8 col-md-4 col-lg-3 col-xl-2'>
          {
            scrollLogo
          ?
            <img className='py-2 ps-3 col-8' src={logoTextWhite} alt='Logo'/>
          :
            <img className='py-2 ps-3 col-12' src={logoWhite} alt='Logo'/>
          }
        </Link>
        <button className='navbar-toggler border-0' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse justify-content-end' id='navbarSupportedContent'>
          <ul className='navbar-nav d-flex justify-content-end align-items-center col-12'>
            <div className='container-fluid'>
              <div className='row align-items-center ul-menu'>
                <li className='nav-item text-center px-3 mt-2 col-12 col-md-4 col-lg-2 col-xxl-1'>
                  {
                      window.location.pathname !== '/'
                    ?
                      <Link reloadDocument className='nav-link menu-navbar' aria-current='page' to='/'>INICIO</Link>
                    :
                      null
                  }
                </li>
                <li className='nav-item px-3 mt-2 col-12 col-md-4 col-lg-2 col-xxl-2'>
                  <a className='nav-link btn border-0 col-12 menu-navbar' href='#contactFooter'>CONTACTO</a>
                </li>
                <form className='text-white px-3 mt-2 col-10 col-sm-11 col-md-6 col-lg-4 col-xl-3 col-xxl-2' role='search'>
                  <Input 
                    labelText='Buscar' 
                    typeInput='search'
                    onChangeInput={handleChange}
                    onBlurInput={() => {
                      setTimeout(() => {
                        setIsSearching(false)
                      }, 100);
                    }}
                  />
                    {
                      isSearching
                    ?
                      <div className='mt-1 shadow cont-ul-search'>
                        {productsAux.map(product => (
                          <li key={product._id} className='product-item-search' onClick={() => navigate(`/product/${product._id}`)}>
                            <p className='btn border-0 mb-0 py-2'>
                              {product.name}
                            </p>
                          </li>
                        ))}
                      </div>
                    :
                      null
                    }
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
                          src={imgProfile} 
                          alt={name} 
                          sx={{ width: 56, height: 56 }} 
                        />
                        </button>
                        <ul className='dropdown-menu dropdown-menu-end border-0 list-avatar'>
                          {
                            isAdmin
                          ?
                            <li><a className='dropdown-item btn rounded-0 item-admin' href='/#'>Administrador</a></li>
                          :
                            null
                          }
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
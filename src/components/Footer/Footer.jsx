import React from 'react';
import logoWhite from '../../assets/images/logo-white.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookRounded from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import ContactModal from '../ContactModal/ContactModal';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='container-fluid footer' id='contactFooter'>
      <div className='row justify-content-center'>
        <img className='my-3 col-8 col-sm-5 col-lg-3 col-xxl-2' src={logoWhite} alt='Logo' />
        <div className='container d-flex justify-content-center align-items-center py-3'>
          <Link to='/whatsapp' className='px-2'>
            <WhatsAppIcon fontSize='large' sx={{color: '#FEFBF6'}} />
          </Link>
          <Link to='/facebook' className='px-2'>
            <FacebookRounded fontSize='large' sx={{color: '#FEFBF6'}} />
          </Link>
          <Link to='/instagram' className='px-2'>
            <InstagramIcon fontSize='large' sx={{color: '#FEFBF6'}} />
          </Link>
          <button className="btn border-0 px-2" data-bs-toggle="modal" data-bs-target="#contactModal">
            <EmailIcon fontSize='large' sx={{color: '#FEFBF6'}} />
          </button>
          <ContactModal/>
        </div>
        <div className='container text-muted fst-italic d-flex justify-content-center'>
          <div className='dropdown-center'>
            <small className='p-2' type='button' data-bs-toggle='dropdown' aria-expanded='false'>Data Fiscal</small>
            <div className='dropdown'>
              <ul className='dropdown-menu py-0 border-0'>
                <img className='col-12' src='https://1.bp.blogspot.com/-tyDj3FH73V0/UVugtbI_MYI/AAAAAAAAGYE/TzM5UBA57QQ/s1600/Data-fiscal-Web.jpg' alt='asd' />
              </ul>
            </div>
          </div>
          <small className='p-2'>|</small>
          <small className='p-2'>Derechos Reservados® SoftDev</small>
        </div>
      </div>
    </div>
  );
}

export default Footer;

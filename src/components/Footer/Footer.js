import React from 'react';
import Input from '../Input/Input';

function Footer() {
  return (
    <div className='bg-secondary'>SOY EL FOOTER
      <form className='col-8 col-lg-2 mx-3'>
        <Input labelText='Contactar' />
      </form>
    </div>
  );
}

export default Footer;
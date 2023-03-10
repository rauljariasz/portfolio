import React from 'react';

/* Imgs */
import Logo from '../assets/logo.png'

const Header = () => {
  return (
    <header>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center h-[55px]'>
          <img src={Logo} alt='RJ Logo' className='h-[48px]' /> 
          <button className='btn btn-sm'>Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
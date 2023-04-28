import { useState } from 'react';
/* Imgs */
import Logo from '../assets/logo.png'

const Header = () => {
  const [lightMode, setLightMode] = useState('Modo claro')
  const html = document.querySelector('html')
  
  const handdletoggle = () => {
    html.classList.toggle('dark')
    if (html.classList.contains('dark')) {
      setLightMode('Modo oscuro')
    } else {
      setLightMode('Modo claro')
    }
  }
  return (
    <header>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center h-[55px]'>
          <img src={Logo} alt='RJ Logo' className='h-[48px] dark:brightness-100 dark:invert' /> 
          <button onClick={handdletoggle} className='btn btn-sm dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>{lightMode}</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
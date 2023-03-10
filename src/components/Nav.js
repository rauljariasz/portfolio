import React from 'react';
// import icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs';
// link
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        {/* nav inner */}
        <div className='w-full bg-white/10 h-[70px] backdrop-blur-xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50 items-center'>
          <Link 
            to='home' 
            activeClass='active'
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            smooth={true}
            spy={true}
            offset={-200}
          >
            <BiHomeAlt />
          </Link>
          <Link 
            to='about' 
            activeClass='active'
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            smooth={true}
            spy={true}
          >
            <BiUser />
          </Link>
          <Link 
            to='skills' 
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            smooth={true}
            spy={true}
            activeClass='active'
          >
            <BsClipboardData />
          </Link>
          <Link 
            to='projects' 
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            smooth={true}
            spy={true}
            activeClass='active'
          >
            <BsBriefcase />
          </Link>
          <Link 
            to='contact' 
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            smooth={true}
            spy={true}
            activeClass='active'
          >
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

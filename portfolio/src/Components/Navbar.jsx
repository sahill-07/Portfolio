import React, { useState } from 'react'; 
import '../index.css';
import ToggleBtn from './ToggleBtn'; 
import { Link } from 'react-scroll';
import Logo from '../assets/logo.jpg'
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className='font-display bg-white py-7 pb-7 px-4 md:px-24 shadow-md md:pb-7 backdrop-filter dark:bg-[#060417] dark:text-white sticky top-0 z-50'>
      <nav className='flex justify-between items-center'>
      <div className='flex items-center justify-center gap-5'>
          <span>
            <img className='h-16' src={Logo} alt="Logo" />
          </span>
          <span className='font-bold text-xl md:text-2xl cursor-pointer'>Sahil Bangar</span>
        </div>
        <div className='md:flex md:gap-10 hidden items-center font-semibold text-xl cursor-pointer'>
          <div className='flex gap-10'>
          <Link to="home" spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}  className='hover:text-blue-600'>Home</Link>
          <Link to="about" spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}  className='hover:text-blue-600'>About Me</Link>
          <Link to="projects" spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}  className='hover:text-blue-600'>Projects</Link>
          <Link to="contact" spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}  className='hover:text-blue-600'>Contact</Link>
          </div>
          <div>
          <ToggleBtn /> 
          </div>
        </div>
        
        {/* Mobile Nav Bar */}
        <div className={`fixed top-0 right-0 w-2/3 h-full bg-white dark:bg-gray-800 z-50 transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
          <div className='flex flex-col items-start justify-start h-full text-black dark:text-white text-2xl space-y-10 p-7 pt-20'>
            <Link to="/" spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}  className='hover:text-blue-600' onClick={() => setOpen(false)}>Home</Link>
            <Link to="about" spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}  className='hover:text-blue-600' onClick={() => setOpen(false)}>About Me</Link>
            <Link to="projects" spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}  className='hover:text-blue-600' onClick={() => setOpen(false)}>Projects</Link>
            <Link to="getintouch" spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}  className='hover:text-blue-600' onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>

        {open && (
          <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40' onClick={() => setOpen(false)}></div>
        )}

        <div className='md:hidden flex items-center z-50 gap-4'>
          <ToggleBtn /> {/* Assuming this is for dark mode */}
          {/* Toggle Button for Menu */}
          <div className='switch' onClick={handleToggle}>
            <input type="checkbox" checked={open} readOnly />
            <div>
              <span className="line-1"></span>
              <span className="line-2"></span>
              <span className="line-3"></span>
            </div>
        </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;


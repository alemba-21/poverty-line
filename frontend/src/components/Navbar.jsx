import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import { IoMdNotifications } from 'react-icons/io'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24  mx-auto px-4 text-black bg-zinc-50 drop-shadow-lg'>
      <h1 className='w-full text-3xl font-bold text-green-600'>PovertyLine.</h1>

      <div className='hidden md:flex basis-3/8 font-bold items-center mx-6'>
      <ul className='hidden md:flex flex-row text-xl md:justify-center'>
        <li className='p-4 hover:text-green-600'>Jobs</li>
        <li className='p-4 hover:text-green-600'>About</li>
        <li><IoMdNotifications className='text-3xl hover:text-green-600' /></li>
        <li className='text-black border-2 m-auto w-[115px] h-[50px] py-2 px-4 hover:border-green-600 hover:text-green-600 border-black rounded-full'>Sign Up</li>
        <li className='text-white border m-auto bg-green-600 w-[110px] ml-2 py-2 px-4 h-[50px] text-center border-green-600 hover:bg-transparent hover:text-green-600 rounded-full'>Sign In</li>
      
      </ul>
      </div>

      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-screen border-r text-center border-r-gray-900 bg-slate-100 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-xl font-bold text-green-600 m-4'>PovertyLine.</h1>
        <li className='p-4 hover:text-green-600 border-b border-gray-300 mt-8'>Jobs</li>
        <li className='p-4 hover:text-green-600 border-b border-gray-300'>About Us</li>
        <li className='p-4 hover:text-green-600 border-b border-gray-300'>Notifications</li>        
        <li className='text-black border-2 h-[50px] mt-8 py-2 mx-2 px-4 hover:border-green-600 text-center hover:text-green-600 border-black rounded-full'>Sign Up</li>
        <li className='text-white border bg-green-600 mt-2  mx-2 py-2 px-4 h-[50px] text-center border-green-600 hover:bg-transparent hover:text-green-600 rounded-full'>Sign In</li>
      
      </ul>
    </div>
  );
};

export default Navbar;
import { FaGgCircle } from 'react-icons/fa';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { BiCart, BiSearch, BiUser, BiUserCircle } from 'react-icons/bi';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import UserPopover from './user-popover';
import LoginPopover from './login-popover';

const NavBar = () => {
  const Logo = '/assets/logo8.png';
  return (
    <div className='flex flex-row bg-white h-14 justify-between items-center px-4 lg:px-12 shadow-md mb-2 text-foreground'>
      <div className='flex w-24 h-12'>
        <Image src={Logo} alt='logo' width={720} height={720} />
      </div>
      <div className='flex flex-row gap-3 lg:gap-6 justify-between items-center mr-24 font-light text-primary-foreground'>
        <Link href={'#'} className=' hover:text-blue-400'>
          Home
        </Link>
        <Link href={'#'}>Shop</Link>
        <Link href={'#'}>Latest</Link>
        <Link href={'#'}>About</Link>
      </div>
      <div className='flex flex-row items-center justify-between gap-3 text-primary-foreground'>
        <div className='p-2'>
          <BiSearch size={24} />
        </div>
        <LoginPopover />

        <div className='relative p-2'>
          <span className='absolute top-0 right-0 bg-gray-600 rounded-full w-4 h-4 text-xs flex items-center justify-center text-white p-1'>
            0
          </span>
          <BiCart size={24} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

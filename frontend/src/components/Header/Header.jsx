import React from 'react'
import {
    HeartIcon,
    ShoppingCartIcon,
    UserCircleIcon,
    SearchIcon,
    BellIcon,
} from '@heroicons/react/outline';

function Header() {
  return (
    <header>
        {/* Top nav */}
        <div className='flex bg-white items-center p-2 space-x-6 flex-grow py-3 px-5 md:px-10 border-2'>
            {/* Left */}
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0 space-x-4'>
                <img src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg' className='w-32 object-contain' alt="" />
                <h3 className='hidden lg:inline font-[Roboto] font-normal hover:text-[#A435F0] transition duration-150 ease-in text-md'>Categories</h3>
            </div> 
            {/* Search */}
            <div className='hidden sm:flex items-center md:border-2 border-black rounded-full py-2 md:shadow-sm h-14 flex-grow cursor-pointer'>
                <SearchIcon className="h-12 p-4 text-gray-500" />
                <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-full focus:outline-none px-2' type="text" placeholder={'Start your search'} />
            </div>
            {/* Right */}
            <div className='text-black flex items-center text-md space-x-6 mx-6 whitespace-nowrap'>
                <h3 className="hidden lg:inline font-[Roboto] font-normal hover:text-[#A435F0] transition duration-150 ease-in">
                    Udemy Business
                </h3>
                <h3 className=" hidden lg:inline font-[Roboto] font-normal hover:text-[#A435F0] transition duration-150 ease-in">
                    Teach on Udemy
                </h3>
                <h3 className="hidden lg:inline font-[Roboto] font-normal hover:text-[#A435F0] transition duration-150 ease-in">
                    My learning
                </h3>
                <HeartIcon className="hidden lg:inline h-8 hover:text-[#A435F0] transition duration-150 ease-in" />
                <ShoppingCartIcon className="h-8 hover:text-[#A435F0] transition duration-150 ease-in" />
                <BellIcon className="hidden lg:inline h-8 hover:text-[#A435F0] transition duration-150 ease-in" />
                <UserCircleIcon className="h-8 hover:text-[#A435F0] transition duration-150 ease-in" />
            </div>
        </div>

        {/* Bottom nav */}
        <div className='hidden lg:flex items-center space-x-10 p-2 text-md max-w-8xl mx-auto px-8 sm:px-16 py-5 justify-center text-center shadow-lg'>
            <p className='hover:font-bold transition transform duration-150 ease-out cursor-pointer font-[Roboto] font-normal'>Development</p>
            <p className='hover:font-bold transition transform duration-150 ease-out cursor-pointer font-[Roboto] font-normal'>Business</p>
            <p className='hover:font-bold transition transform duration-150 ease-out cursor-pointer font-[Roboto] font-normal'>Finance& Accounting</p>
            <p className='hover:font-bold transition transform duration-150 ease-out cursor-pointer font-[Roboto] font-normal'>IT & Software</p>
            <p className='hover:font-bold transition transform duration-150 ease-out cursor-pointer font-[Roboto] font-normal'>Office Productivity</p>
            <p className='hover:font-bold transition transform duration-150 ease-out cursor-pointer font-[Roboto] font-normal'>Personal Development</p>
            <p className='hover:font-bold transition transform duration-150 ease-out cursor-pointer font-[Roboto] font-normal'>Design</p>
            <p className='hover:font-bold transition transform duration-150 ease-out cursor-pointer font-[Roboto] font-normal'>Marketing</p>
            <p className='hover:font-bold transition transform duration-150 ease-out cursor-pointer font-[Roboto] font-normal'>Health & Fitness</p>
            <p className='hover:font-bold transition transform duration-150 ease-out cursor-pointer font-[Roboto] font-normal'>Music</p>
        </div>
    </header>
  )
}

export default Header
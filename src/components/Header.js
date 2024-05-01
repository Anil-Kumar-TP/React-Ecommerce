import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
            <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
                <Link to='/'>
                    <div>
                    <img src="https://w7.pngwing.com/pngs/82/989/png-transparent-harper-s-bazaar-logo-thumbnail.png" alt="logo" className='w-32' />
                    </div>
                </Link>
                <div className='flex items-center gap-8'>
                    <ul className='flex items-center gap-8'>
                        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
                        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Pages</li>
                        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
                        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Element</li>
                        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Blog</li>
                    </ul>
                    <div className='relative cursor-pointer'>
                        <img src="https://w7.pngwing.com/pngs/657/152/png-transparent-shopping-bags-trolleys-shopping-cart-shopping-cart-rectangle-logo-shopping-bags-trolleys-thumbnail.png" alt="" className='w-8' />
                        <span className='absolute w-6 top-3 left-1 text-base flex items-center justify-center font-semibold'>0</span>
                    </div>
                    <img src="https://images.pexels.com/photos/1009904/pexels-photo-1009904.jpeg?auto=compress&cs=tinysrgb&w=600" alt="userIcon" className='w-8 h-8 rounded-full object-cover' />
                </div>
            </div>
        </div>
    );
};

export default Header;
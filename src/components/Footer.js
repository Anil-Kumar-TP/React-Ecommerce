import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaHome } from 'react-icons/fa';
import { ImGithub } from 'react-icons/im';
import { MdLocationOn } from 'react-icons/md';
import { BsPersonFill, BsPaypal } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='bg-black text-[#949494] py-20 font-titleFont'>
            <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
                <div className='flex flex-col gap-7'>
                    <img className='w-32' src="https://w7.pngwing.com/pngs/82/989/png-transparent-harper-s-bazaar-logo-thumbnail.png" alt="" />
                    <p className='text-white text-sm tracking-wide'>&copy; Ecommerce App</p>
                    <img src="https://w7.pngwing.com/pngs/421/982/png-transparent-payment-gateway-service-money-debit-card-italy-visa-text-service-logo-thumbnail.png" alt="" className='w-56' />
                    <div className='flex gap-5 text-lg text-gray-400'>
                        <ImGithub className='hover:text-white duration-300 cursor-pointer' />
                        <FaYoutube className='hover:text-white duration-300 cursor-pointer' />
                        <FaFacebook className='hover:text-white duration-300 cursor-pointer' />
                        <FaTwitter className='hover:text-white duration-300 cursor-pointer' />
                        <FaInstagram className='hover:text-white duration-300 cursor-pointer' />
                    </div>
                </div>
              
                <div>
                    <h2 className='text-2xl font-semibold text-white mb-4'>Locate Us</h2>
                    <div className='text-base flex flex-col gap-2'>
                        <p>Vettiyar PO, Mankamkuzhy</p>
                        <p>Mobile:7902259683</p>
                        <p>Phone:9496725597</p>
                        <p>Email:anil6996f@gmail.com</p>
                    </div>
                </div>
              
                <div>
                    <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
                    <div className='flex flex-col gap-2 text-base'>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                            <span className='text-lg'><BsPersonFill /></span>
                            My Account
                        </p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                            <span className='text-lg'><BsPaypal /></span>
                            CheckOut
                        </p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                            <span className='text-lg'><FaHome /></span>
                            Order Tracking
                        </p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                            <span className='text-lg'><MdLocationOn /></span>
                            Help & Support
                        </p>
                    </div>
                </div>
              
                <div className='flex flex-col justify-center'>
                    <input type="text" className='bg-transparent border px-4 py-2 text-sm' placeholder='Email' />
                    <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>Subscribe</button>
                </div>
              
            </div>
        </div>
    )
};

export default Footer;
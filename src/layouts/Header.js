import React from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { AiOutlineCompass, AiOutlineHistory, AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsGear, BsHeart, BsPlusLg } from 'react-icons/bs'
import { FaMoneyBill } from 'react-icons/fa'
import { RxPerson } from 'react-icons/rx'
import { IoChatbubblesOutline } from 'react-icons/io5'
import img1 from '../assets/Frame 2.png'

const Header = () => {
    return (
        <div className="flex flex-col justify-between h-screen bg-white shadow-xl border-r-2">
            <div className="px-4 py-6">
                <h2 className="flex justify-center items-center">
                    <img src={ logo } alt="" />
                </h2>
                <nav aria-label="Main Nav" className="flex flex-col mt-5 ml-5 space-y-3 text-xl font-medium">
                    <NavLink to="/" className="flex items-center gap-5 px-4 py-2 text-black hover:border-l-8 border-primary transition-all ease-in-out duration-100">
                        <AiOutlineHome />
                        <span className="ml-3 text-sm font-medium">Home</span>
                    </NavLink>
                    <NavLink to="/" className="flex items-center gap-5 px-4 py-2 text-black hover:border-l-8 border-primary transition-all ease-in-out duration-100">
                        <AiOutlineCompass />
                        <span className="ml-3 text-sm font-medium">Explore</span>
                    </NavLink>
                    <NavLink to="/" className="flex items-center gap-5 px-4 py-2 text-black hover:border-l-8 border-primary transition-all ease-in-out duration-100">
                        <BsHeart />
                        <span className="ml-3 text-sm font-medium">Saved</span>
                    </NavLink>
                    <NavLink to="/" className="flex items-center gap-5 px-4 py-2 text-black hover:border-l-8 border-primary transition-all ease-in-out duration-100">
                        <AiOutlineShoppingCart />
                        <span className="ml-3 text-sm font-medium">Cart</span>
                    </NavLink>
                    <NavLink to="/" className="flex items-center gap-5 px-4 py-2 text-black hover:border-l-8 border-primary transition-all ease-in-out duration-100">
                        <FaMoneyBill />
                        <span className="ml-3 text-sm font-medium">Selling</span>
                    </NavLink>
                    <NavLink to="/" className="flex items-center gap-5 px-4 py-2 text-black hover:border-l-8 border-primary transition-all ease-in-out duration-100">
                        <RxPerson />
                        <span className="ml-3 text-sm font-medium">Profile</span>
                    </NavLink>
                    <NavLink to="/" className="flex items-center gap-5 px-4 py-2 text-black hover:border-l-8 border-primary transition-all ease-in-out duration-100">
                        <AiOutlineHistory />
                        <span className="ml-3 text-sm font-medium">History</span>
                    </NavLink>
                    <NavLink to="/" className="flex items-center gap-5 px-4 py-2 text-black hover:border-l-8 border-primary transition-all ease-in-out duration-100">
                        <IoChatbubblesOutline />
                        <span className="ml-3 text-sm font-medium">Contact US</span>
                    </NavLink>
                    <NavLink to="/" className="flex items-center gap-5 px-4 py-2 text-black hover:border-l-8 border-primary transition-all ease-in-out duration-100">
                        <BsGear />
                        <span className="ml-3 text-sm font-medium">Setting</span>
                    </NavLink>
                </nav>

            </div>
            <div className='relative bottom-5'>
                <div
                    className='w-full h-52 bg-center bg-no-repeat overflow-hidden mt-10 rounded-md'
                    style={ { backgroundImage: `url(${ img1 })`, } }
                >
                    <div className='flex items-center justify-center rounded-lg mt-5'>
                        <div className='flex flex-col gap-1 items-center text-center text-white'>
                            <p className='w-10 h-10 flex justify-center items-center rounded-full border-4 border-white bg-[#1240E2]'>
                                <BsPlusLg />
                            </p>
                            <h3 className='text-lg' >Need Help</h3>
                            <p className='text-xs w-3/4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <button className='btn btn-accent btn-sm mt-2 capitalize text-white rounded-lg shadow-lg'>Customer Service</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;

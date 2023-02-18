import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { AiOutlineCompass, AiOutlineHistory, AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsGear, BsHeart } from 'react-icons/bs'
import { FaMoneyBill } from 'react-icons/fa'
import { RxPerson } from 'react-icons/rx'
import { IoChatbubblesOutline } from 'react-icons/io5'

const Header = () => {
    return (
        <div className="flex flex-col justify-between h-screen bg-white shadow-xl border-r-2">
            <div className="px-4 py-6">
                <h2 className="flex justify-center items-center">
                    <img src={ logo } alt="" />
                </h2>
                <nav aria-label="Main Nav" className="flex flex-col mt-6 ml-5 space-y-5 text-xl font-medium">
                    <Link to="/" className="flex items-center gap-5 px-4 py-2 text-black hover:border-l-8 border-primary transition-all ease-in-out duration-100 hover:border-l-8 border-primary transition-all ease-in-out duration-100">
                        <AiOutlineHome />
                        <span className="ml-3 text-sm font-medium">Home</span>
                    </Link>
                    <Link to="/" className="flex items-center gap-5 px-4 py-2 text-black hover:border-l-8 border-primary transition-all ease-in-out duration-100">
                        <AiOutlineCompass />
                        <span className="ml-3 text-sm font-medium">Explore</span>
                    </Link>
                    <Link to="/" className="flex items-center gap-5 px-4 py-2 text-black hover:border-l-8 border-primary transition-all ease-in-out duration-100">
                        <BsHeart />
                        <span className="ml-3 text-sm font-medium">Saved</span>
                    </Link>
                    <Link to="/" className="flex items-center gap-5 px-4 py-2 text-black hover:border-l-8 border-primary transition-all ease-in-out duration-100">
                        <AiOutlineShoppingCart />
                        <span className="ml-3 text-sm font-medium">Cart</span>
                    </Link>
                    <Link to="/" className="flex items-center gap-5 px-4 py-2 text-black hover:border-l-8 border-primary transition-all ease-in-out duration-100">
                        <FaMoneyBill />
                        <span className="ml-3 text-sm font-medium">Selling</span>
                    </Link>
                    <Link to="/" className="flex items-center gap-5 px-4 py-2 text-black hover:border-l-8 border-primary transition-all ease-in-out duration-100">
                        <RxPerson />
                        <span className="ml-3 text-sm font-medium">Profile</span>
                    </Link>
                    <Link to="/" className="flex items-center gap-5 px-4 py-2 text-black hover:border-l-8 border-primary transition-all ease-in-out duration-100">
                        <AiOutlineHistory />
                        <span className="ml-3 text-sm font-medium">History</span>
                    </Link>
                    <Link to="/" className="flex items-center gap-5 px-4 py-2 text-black hover:border-l-8 border-primary transition-all ease-in-out duration-100">
                        <IoChatbubblesOutline />
                        <span className="ml-3 text-sm font-medium">Contact US</span>
                    </Link>
                    <Link to="/" className="flex items-center gap-5 px-4 py-2 text-black hover:border-l-8 border-primary transition-all ease-in-out duration-100">
                        <BsGear />
                        <span className="ml-3 text-sm font-medium">Setting</span>
                    </Link>
                </nav>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                <a
                    href="#"
                    className="flex items-center p-4 bg-white shrink-0 hover:bg-gray-50"
                >
                    <img
                        alt="Man"
                        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="object-cover w-10 h-10 rounded-full"
                    />

                    <div className="ml-1.5">
                        <p className="text-xs">
                            <strong className="block font-medium">Eric Frusciante</strong>

                            <span> eric@frusciante.com </span>
                        </p>
                    </div>
                </a>
            </div>
        </div>

    );
};

export default Header;

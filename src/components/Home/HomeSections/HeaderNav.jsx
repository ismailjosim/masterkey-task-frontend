import React from 'react';
import searchIcon from '../../../assets/search_icon.png'
import searchFilter from '../../../assets/searchFilter.png'
import { GrMail } from 'react-icons/gr';
import { HiBellAlert } from 'react-icons/hi2';
import { GoPerson } from 'react-icons/go';

const HeaderNav = () => {
    return (
        <header>
            <div className="mx-auto flex h-20 max-w-screen-xl items-center justify-between px-4">
                <div className='text-center text-black font-semibold'>
                    <h2 className=' text-3xl'>Headphone</h2>
                    <p className='text-lg'>For the top band</p>
                </div>

                <div className="flex items-center">
                    <form className="mb-0">
                        <div className="relative">
                            <input className="input input-primary rounded-lg border-gray-200 px-20 text-sm placeholder-gray-300 focus:z-10"
                                placeholder="Search Product"
                                type="text"
                            />

                            <button type="submit" className="absolute inset-y-0 left-0 ml-px rounded-r-lg p-2 text-gray-600">
                                <img src={ searchIcon } alt="" />
                            </button>
                            <button type="submit" className="absolute inset-y-0 right-0 mr-px rounded-r-lg p-2 text-gray-600">
                                <img src={ searchFilter } alt="" />
                            </button>
                        </div>
                    </form>
                    <div className='flex gap-2 ml-5'>
                        <span className='block bg-[#17FF3C] rounded-md text-2xl p-2 text-black'>
                            <GrMail></GrMail>
                        </span>
                        <span className='block bg-[#17FF3C] rounded-md text-2xl p-2 text-black'>
                            <HiBellAlert></HiBellAlert>
                        </span>
                        <span className='block bg-[#17FF3C] rounded-md text-2xl p-2 text-black'>
                            <GoPerson></GoPerson>
                        </span>

                    </div>
                </div>
            </div>

        </header>

    );
};

export default HeaderNav;

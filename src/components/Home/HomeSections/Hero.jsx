import React, { useEffect, useState } from 'react';
import { BiMinus } from 'react-icons/bi';
import productImg from '../../../assets/homeproduct.png'
import star from '../../../assets/star.png'
import { BsPlusLg } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';

const Hero = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])




    return (
        <section className='grid grid-cols-3 gap-5'>
            <div className="relative col-span-2 py-8 shadow-lg mx-auto">
                <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                        <img
                            alt="Les Paul"
                            src={ productImg }
                            className="object-cover w-full aspect-square rounded-xl"
                        />
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <div className='mr-2'>
                                <h1 className="text-xl font-semibold">
                                    Beats Studio3 Wireless Headphone
                                </h1>
                                <div className="flex items-center gap-3 mt-3">
                                    <div className='flex items-center gap-1 mb-2'>
                                        <img src={ star } alt="" />
                                        <img src={ star } alt="" />
                                        <img src={ star } alt="" />
                                        <img src={ star } alt="" />
                                        <img src={ star } alt="" />
                                    </div>
                                    <p>(200+ Reviews)</p>
                                </div>
                            </div>
                        </div>
                        <p className='mr-5'>
                            Ergonomic or cupe with on-oor controls up to 22 hours of tening time. Apple Wi crip & Closs
                        </p>
                        <form className="mt-8">
                            <fieldset>
                                <legend className="mb-1 text-sm font-medium">Color</legend>
                                <div className="flex justify-around items-center">
                                    <div className="flex gap-2">
                                        <input type="radio" name="color" className="radio radio-warning" />
                                        <input type="radio" name="color" className="radio radio-primary" />
                                        <input type="radio" name="color" className="radio radio-success" />
                                        <input type="radio" name="color" className="radio radio-warning" />

                                    </div>
                                    <div>
                                        <label className="input-group">
                                            <span>
                                                <BiMinus></BiMinus>
                                            </span>
                                            <input
                                                placeholder="1"
                                                className="input input-bordered w-14"
                                                type="text"
                                                id="quantity"
                                                min="1"
                                                value="1"
                                            />
                                            <span>
                                                <BsPlusLg></BsPlusLg>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </fieldset>

                            <div className="flex mt-8 justify-around items-center">
                                <button className='text-primary text-2xl  border-2 rounded-full w-10 h-10 flex justify-center items-center border-primary'>
                                    <AiFillHeart></AiFillHeart>
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-outline btn-primary"
                                >
                                    Add to Cart
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='col-span-1'></div>
        </section>

    );
};

export default Hero;

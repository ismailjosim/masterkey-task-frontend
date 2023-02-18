import React, { useEffect, useState } from 'react';
import plus from '../../../assets/plus.png';
import start from '../../../assets/star2.png'

const ProductCollection = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])


    return (
        <section className='grid grid-cols-3 gap-5'>
            <div className='col-span-2 mt-10 grid grid-cols-3 gap-5'>
                {
                    products.slice(0, 3).map((product, idx) => {

                        return (
                            <div key={ idx } class="shadow-lg rounded-md">
                                <div class="flex justify-center">
                                    <img src={ product?.picture } alt="" class="w-20"
                                    />
                                </div>
                                <div class="mt-3">
                                    <h3 className='text-xl font-medium'>{ product.name }</h3>
                                    <p>price: <span>${ product.price }</span></p>
                                    <div className='flex justify-between items-center p-2'>
                                        <p className='flex items-center justify-center gap-2 font-semibold text-primary'>
                                            <img src={ start } alt="" />
                                            <span>{ product.ratting }</span>
                                        </p>
                                        <p className='bg-primary p-1 rounded-full'>
                                            <img src={ plus } alt="" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='col-span-1 absolute right-10'>
                <div className='flex items-center justify-between mx-2'>
                    <h3 className='text-xl font-semibold'>Daily Deals</h3>
                    <p>view All</p>
                </div>
                { products.slice(0, 4).map((product, idx) => {
                    return (
                        <div key={ idx } className='flex items-start justify-between mb-2'>
                            <div>
                                <img width={ 50 } src={ product?.picture } alt="" />
                            </div>
                            <div>
                                <h4>{ product.name }</h4>
                                <span className='text-xs'>{ product.ratting } reviews and { product.order } orders</span>
                            </div>
                            <div className='text-sm'>price ${ product.price }</div>
                        </div>
                    )
                })
                }
            </div>
        </section>
    );
};

export default ProductCollection;

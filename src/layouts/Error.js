import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="grid h-screen px-4 bg-white place-content-center">
            <div className="text-center">
                <h1 className="font-black text-gray-200 text-9xl">404</h1>
                <p className="text-2xl font-bold tracking-tight text-gray-400 uppercase sm:text-4xl">Sorry!</p>
                <p className="mt-4 text-gray-500">We can't find that page.</p>
                <Link to="/" className="btn btn-primary mt-5 px-5"> Go Back Home</Link>
            </div>
        </div>

    );
};

export default Error;

import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';

const Main = () => {
    return (
        <div className='grid grid-cols-5 gap-5'>
            <div>
                <Header />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Main;

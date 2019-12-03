import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home/';

const Navbar = () => {
    return (
        <>
            <Route path="/" exact={true} component={Home} />
        </>
    )
}

export default Navbar;

import React from 'react';
import { Route } from 'react-router-dom';

import Home     from './pages/Home/';
import Tasks    from './pages/Tasks/';

const Navbar = () => {
    return (
        <>
            <Route path="/"         exact={true} component={Home} />
            <Route path="/tasks"    exact={true} component={Tasks} />
        </>
    )
}

export default Navbar;

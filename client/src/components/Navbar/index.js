import React from 'react';

import { NavWrapper, NavLogo, Menu } from './style';

const Navbar = () => {
    return (
        <NavWrapper>
            <NavLogo to="/">My Pocket</NavLogo>
            <Menu />
        </NavWrapper>
    )
}

export default Navbar;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import MenuIcon from '../../assets/icons/menu.svg';

export const NavWrapper = styled.div`
    width: 100vw;
    height: 50px;
    
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    background-color: var(--color-1);
    color: #fff;
`

export const NavLogo = styled(Link)`
    font-size: 24px;
    font-weight: bold;
`

export const Menu = styled.div`
    position: absolute;
    right: 15px;
    width: 20px;
    height: 20px;

    background-image: url(${MenuIcon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

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

export const NavSpace = styled.div`
    height: 50px;
    width: 100vw;
    display: none;
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

export const SliderMenu = styled.div`
    position: fixed;
    display: none;
    justify-content: flex-end;

    width: 100vw;
    height: calc(100vh - 50px);
    top: 50px;
    right: 0;
`

export const SliderContain = styled.div`
    position: relative;
    display: flex;
    flex-flow: column;

    width: 80%;
    height: 100%;
    
    background-color: #fff;
    box-shadow: -3px 0px 5px 0px rgba(0,0,0,0.25);
`

export const SliderLink = styled(NavLink)`
    width: 100%;
    padding: 10px 0;

    text-align: center;
    font-size: 18px;
    color: var(--color-1);

    &.active {
        background-color: var(--color-2);
    }
`
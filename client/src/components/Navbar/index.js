import React, { useState, useRef, useEffect } from 'react';
import { TimelineLite } from 'gsap/all' 

import { 
    NavWrapper, 
    NavSpace,
    NavLogo, 
    Menu, 
    SliderMenu, 
    SliderContain, 
    SliderLink 
} from './style';

const Navbar = () => {
    let sliderMenu = useRef();
    let sliderContain = useRef();
    let navWrapper = useRef();
    let navSpace = useRef();
    let [sliderOpen, setSliderOpen] = useState(false);

    const [sliderAnimation, setSliderAnimation] = useState();
    const [tl] = useState(new TimelineLite({ paused: true }));

    useEffect(() => {
        setSliderAnimation(
            tl
            .to(sliderMenu, 0, {css: {display: 'flex'}})
            .to(navWrapper, 0, {css: {position: 'fixed'}})
            .to(navSpace, 0, {css: {display: 'flex'}})
            .from(sliderContain, 1, { right: "-110vw"})
            .pause()
        )
    // eslint-disable-next-line
    }, []);

    const handleOpenSlider = () => {
        if(sliderOpen) {
            setSliderOpen(false);
            sliderAnimation.reverse();
        } else {
            setSliderOpen(true);
            sliderAnimation.play();
        }
    }

    return (
        <>
            <NavWrapper ref={div => navWrapper = div}>
                <NavLogo to="/">My Pocket</NavLogo>
                <Menu onClick={() => handleOpenSlider()} />
            </NavWrapper>
            <NavSpace ref={div => navSpace = div}/>
            <SliderMenu 
                ref={div => sliderMenu = div}
                onClick={() => handleOpenSlider()}
            >
                <SliderContain 
                    ref={div => sliderContain = div}
                    onClick={event => event.stopPropagation()}
                >
                    <SliderLink exact to="/" onClick={() => handleOpenSlider()}>
                        Ínicio
                    </SliderLink>
                    <SliderLink exact to="/extract" onClick={() => handleOpenSlider()}>
                        Extrato
                    </SliderLink>
                    <SliderLink exact to="/tasks" onClick={() => handleOpenSlider()}>
                        Afazeres
                    </SliderLink>
                    <SliderLink exact to="/events" onClick={() => handleOpenSlider()}>
                        Eventos
                    </SliderLink>
                </SliderContain>
            </SliderMenu>
        </>
    )
}

export default Navbar;

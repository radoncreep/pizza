import React, { useState } from 'react'
import Navbar from '../Navbar/index.js';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements';

import Sidebar from '../Sidebar';
const Index = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HeroContainer>
            {/* once the icon element in the nav module is clicked it triggers off this method */}
            {/* all the navbar elem does is to set the prop IsOpen to true */}
            <Navbar toggle={toggle} />
            {/* once isOpen is true then we pass the value to the Sidebar elem and there the style logic uses it */}
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Pizza Ever</HeroH1>
                    <HeroP>Ready in 60 seconds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
};

export default Index;

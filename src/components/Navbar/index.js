import React from 'react'

import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';
const Index = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavLink to="/">Pizza</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Index;

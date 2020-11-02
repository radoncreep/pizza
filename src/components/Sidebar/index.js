import React from 'react';
import { SidebarContainer,
    Icon, 
    CloseIcon, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute,
    SidebarMenu } from './SidebarElements';

const Index = ({ isOpen, toggle }) => {
  
    return (
        // while isOpen is true after the trigger from the onClick on the navicon
        // if we click the sideContainer elem, the onClick event will trigger the toggle function
        // and set isOpen to false (-1000px of the screen in to the right) which clears the sidebar
        // Note the sidebar container is the whole container of the sidebar content,
        // so anywhere clicked on the sidebar will trigger the toggle function to set isOpen to true
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Pizza</SidebarLink>
                <SidebarLink to="/">Desert</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
                <SidebarLink to="/">Contact us</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
};

export default Index;

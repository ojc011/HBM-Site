import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import React from 'react';
import  HaydenLogo  from '../../assets/logotransparent.gif';
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  StyledLogo,
} from './navigation.styles';

const Navigation = () => {
  return (
    <Fragment> 
    <NavigationContainer>
      <LogoContainer to="/">
        <StyledLogo alt='' className="logo" src={HaydenLogo}/>
      </LogoContainer>
      <NavLinks>
        <NavLink>Home</NavLink>
        <NavLink>Our Services</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Portfolio</NavLink>
        <NavLink>Contact Us</NavLink>
        <NavLink>Safety</NavLink>
      </NavLinks>
    </NavigationContainer>
    <Outlet />
    </Fragment>
  );
};

export default Navigation;

import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import React from 'react';
import  HaydenLogo  from '../../HaydenLogo.jpg';
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles';

const Navigation = () => {
  return (
    <Fragment> 
    <NavigationContainer>
      <LogoContainer to="/">
        <img alt='' className="logo" src={HaydenLogo}/>
      </LogoContainer>
      <NavLinks>
        <NavLink>Home</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Our Services</NavLink>
        <NavLink>Safety</NavLink>
        <NavLink>Safety</NavLink>
        <NavLink>Portfolio</NavLink>
        <NavLink>Contact Us</NavLink>
      </NavLinks>
    </NavigationContainer>
    <Outlet />
    </Fragment>
  );
};

export default Navigation;

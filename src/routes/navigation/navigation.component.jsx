// Navigation.js

import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import HaydenLogo from "../../assets/logotransparent.gif";
import MobileLogo from "./mobilelogo";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  StyledLogo,
  MobileMenuIcon,
  MobileMenu,
  MobileMenuItem,
} from "./navigation.styles";

const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <Fragment>
      <NavigationContainer>
        {/* Show the regular logo on medium and large devices */}
        <MobileLogo />
        <LogoContainer to="/">
          <StyledLogo alt="" className="logo" src={HaydenLogo} />
        </LogoContainer>
        <NavLinks>
          <NavLink>Home</NavLink>
          <NavLink>Our Services</NavLink>
          <NavLink>About Us</NavLink>
          <NavLink>Contact Us</NavLink>
          <NavLink>Portfolio</NavLink>
          <NavLink>Safety</NavLink>
        </NavLinks>
        {/* Show MobileMenuIcon (Burger menu) on small and medium devices */}
        <MobileMenuIcon onClick={handleMobileMenuToggle}>
          <div></div>
          <div></div>
          <div></div>
        </MobileMenuIcon>
      </NavigationContainer>
      {/* Show MobileMenu on small and medium devices if isMobileMenuOpen is true */}
      {isMobileMenuOpen && (
        <MobileMenu>
          <MobileMenuItem>Home</MobileMenuItem>
          <MobileMenuItem>Our Services</MobileMenuItem>
          <MobileMenuItem>About Us</MobileMenuItem>
          <MobileMenuItem>Contact Us</MobileMenuItem>
          <MobileMenuItem>Portfolio</MobileMenuItem>
          <MobileMenuItem>Safety</MobileMenuItem>
        </MobileMenu>
      )}
      {/* Render Outlet to show the content of the current route */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

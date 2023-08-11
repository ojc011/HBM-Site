import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
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
  MobileLogoAboveLinks,
  CloseButton,
} from "./navigation.styles";

const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const handleMobileMenuToggle = () => {
    if (isMobileMenuOpen) {
      // Closing the menu
      setMobileMenuVisible(false);
      setTimeout(() => {
        setMobileMenuOpen(false);
      }, 1500);
    } else {
      // Opening the menu
      setMobileMenuOpen(true);
      setTimeout(() => {
        setMobileMenuVisible(true); // Delay visibility for the transition
      }, 50); // Delay the appearance of the menu for the transition
    }
  };

  const handleMobileMenuClose = () => {
    // Closing the menu
    setMobileMenuVisible(false);
    setTimeout(() => {
      setMobileMenuOpen(false);
    }, 1500);
  };

  const handleMobileMenuLinkClick = (sectionId) => {
    // Handle link clicks
    handleMobileMenuClose();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  // Listen for Esc key press to close the mobile menu
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        handleMobileMenuClose();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [isMobileMenuOpen]);

  return (
    <React.Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <StyledLogo
            alt=""
            className="logo"
            src="/assets/haydenlogohighres.png"
          />
        </LogoContainer>
        <NavLinks>
          {/* Links to sections */}
          <NavLink onClick={() => handleMobileMenuLinkClick("home")}>Home</NavLink>
          <NavLink onClick={() => handleMobileMenuLinkClick("services")}>Our Services</NavLink>
          <NavLink onClick={() => handleMobileMenuLinkClick("aboutus")}>About Us</NavLink>
          <NavLink onClick={() => handleMobileMenuLinkClick("contact")}>Contact Us</NavLink>
          <NavLink onClick={() => handleMobileMenuLinkClick("portfolio")}>Portfolio</NavLink>
          <NavLink onClick={() => handleMobileMenuLinkClick("safety")}>Safety</NavLink>
          {/* Add any other NavLinks here */}
        </NavLinks>
        <MobileLogo />
        <MobileMenuIcon onClick={handleMobileMenuToggle}>
          <img
            src="/assets/burger.png"
            alt="MobileMenuIcon"
            style={{ width: "100%", height: "100%" }}
          />
        </MobileMenuIcon>
      </NavigationContainer>
      {isMobileMenuOpen && (
        <MobileMenu
          style={{
            opacity: isMobileMenuVisible ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
          }}
        >
          <CloseButton onClick={handleMobileMenuClose}>×</CloseButton>
          <MobileLogoAboveLinks src="/assets/logo1.png" alt="Mobile Logo Above Links" />
          <Link
            to="home"
            smooth="true"
            duration={500}
            onClick={() => handleMobileMenuLinkClick("home")}
          ></Link>
          {/* Mobile menu links */}
          <MobileMenuItem onClick={() => handleMobileMenuLinkClick("home")}>Home</MobileMenuItem>
          <MobileMenuItem onClick={() => handleMobileMenuLinkClick("services")}>Our Services</MobileMenuItem>
          <MobileMenuItem onClick={() => handleMobileMenuLinkClick("aboutus")}>About Us</MobileMenuItem>
          <MobileMenuItem onClick={() => handleMobileMenuLinkClick("contact")}>Contact Us</MobileMenuItem>
          <MobileMenuItem onClick={() => handleMobileMenuLinkClick("portfolio")}>Portfolio</MobileMenuItem>
          <MobileMenuItem onClick={() => handleMobileMenuLinkClick("safety")}>Safety</MobileMenuItem>
          {/* Add any other MobileMenu links here */}
        </MobileMenu>
      )}
      <Outlet />
    </React.Fragment>
  );
};

export default Navigation;

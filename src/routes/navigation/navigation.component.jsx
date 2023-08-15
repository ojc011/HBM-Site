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
  const [targetSection, setTargetSection] = useState(null);

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
    // Set the target section for scrolling
    setTargetSection(sectionId);

    // Handle link clicks and close the menu
    handleMobileMenuClose();
  };

  // Use the targetSection state variable to scroll to the section after navigating to "/"
  useEffect(() => {
    if (targetSection) {
      const scrollToSection = () => {
        const element = document.getElementById(targetSection);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
      // Delay the scroll to the section after a short interval
      const scrollTimeout = setTimeout(() => {
        scrollToSection();
        // Reset the target section to null after scrolling
        setTargetSection(null);
      }, 500); // Adjust the delay as needed
      return () => clearTimeout(scrollTimeout);
    }
  }, [targetSection]);

  // Function to handle navigation link clicks
  const handleNavLinkClick = (sectionId) => {
    // Set the target section for scrolling
    setTargetSection(sectionId);
  };

  return (
    <React.Fragment>
      <NavigationContainer>
        <LogoContainer to="/" onClick={() => handleNavLinkClick("home")}>
          {/* Use a styled <a> tag for the logo */}
          <StyledLogo
            alt=""
            className="logo"
            src="/assets/haydenlogohighres.png"
          />
        </LogoContainer>
        <NavLinks>
          {/* Links to sections with similar behavior as mobile menu links */}
          <NavLink
            to="/"
            smooth={true}
            duration={500}
            onClick={() => handleNavLinkClick("home")}
          >
            Home
          </NavLink>
          <NavLink
            to="/"
            smooth={true}
            duration={500}
            onClick={() => handleNavLinkClick("services")}
          >
            Our Services
          </NavLink>
          <NavLink
            to="/"
            smooth={true}
            duration={500}
            onClick={() => handleNavLinkClick("aboutus")}
          >
            About Us
          </NavLink>
          <NavLink
            to="/"
            smooth={true}
            duration={500}
            onClick={() => handleNavLinkClick("contact")}
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/"
            smooth={true}
            duration={500}
            onClick={() => handleNavLinkClick("portfolio")}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/"
            smooth={true}
            duration={500}
            onClick={() => handleNavLinkClick("safety")}
          >
            Safety
          </NavLink>
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
          <MobileLogoAboveLinks
            src="/assets/logo1.png"
            alt="Mobile Logo Above Links"
          />
          {/* Home link */}
          <Link
            to="/"
            smooth={true}
            duration={500}
            onClick={() => handleMobileMenuLinkClick("home")}
          >
            <MobileMenuItem>Home</MobileMenuItem>
          </Link>
          {/* Our Services link */}
          <Link
            to="/"
            smooth={true}
            duration={500}
            onClick={() => handleMobileMenuLinkClick("services")}
          >
            <MobileMenuItem>Our Services</MobileMenuItem>
          </Link>
          {/* About Us link */}
          <Link
            to="/"
            smooth={true}
            duration={500}
            onClick={() => handleMobileMenuLinkClick("aboutus")}
          >
            <MobileMenuItem>About Us</MobileMenuItem>
          </Link>
          {/* Contact Us link */}
          <Link
            to="/"
            smooth={true}
            duration={500}
            onClick={() => handleMobileMenuLinkClick("contact")}
          >
            <MobileMenuItem>Contact Us</MobileMenuItem>
          </Link>
          {/* Portfolio link */}
          <Link
            to="/"
            smooth={true}
            duration={500}
            onClick={() => handleMobileMenuLinkClick("portfolio")}
          >
            <MobileMenuItem>Portfolio</MobileMenuItem>
          </Link>
          {/* Safety link */}
          <Link
            to="/"
            smooth={true}
            duration={500}
            onClick={() => handleMobileMenuLinkClick("safety")}
          >
            <MobileMenuItem>Safety</MobileMenuItem>
          </Link>
          {/* Add any other MobileMenu links here */}
        </MobileMenu>
      )}
      <Outlet />
    </React.Fragment>
  );
};

export default Navigation;

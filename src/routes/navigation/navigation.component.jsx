import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  NavigationContainer,
  LogoContainer,
  StyledLogo,
  MobileMenuIcon,
  MobileMenu,
  MobileMenuItem,
  MobileLogoAboveLinks,
  CloseButton,
} from "./navigation.styles";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const handleMobileMenuToggle = () => {
    if (!isMobileMenuOpen) {
      setIsMobileMenuOpen(true);
      setTimeout(() => {
        setIsMobileMenuVisible(true);
      }, 1);
    } else {
      setIsMobileMenuVisible(false);
      setTimeout(() => {
        setIsMobileMenuOpen(false);
      }, 300);
    }
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuVisible(false);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      handleMobileMenuClose();
    }
  };

  const location = useLocation();
  let burgerIconSrc = "/assets/whiteburger.png"; // default icon

  if (location.pathname.includes("category/1")) {
    burgerIconSrc = "/assets/burger.png";
  } else if (location.pathname.includes("category/2")) {
    burgerIconSrc = "/assets/burger.png";
  } else if (location.pathname.includes("category/3")) {
    burgerIconSrc = "/assets/burger.png";
  } else if (location.pathname.includes("category/4")) {
    burgerIconSrc = "/assets/burger.png";
  } else if (location.pathname.includes("category/5")) {
    burgerIconSrc = "/assets/burger.png";
  } else if (location.pathname.includes("category/6")) {
    burgerIconSrc = "/assets/burger.png";
  }

  return (
    <React.Fragment>
      <NavigationContainer>
        <LogoContainer to="/" onClick={scrollToTop}>
          <StyledLogo alt="Logo" src="/assets/logo1.png" />
        </LogoContainer>
        <MobileMenuIcon onClick={handleMobileMenuToggle}>
          <img
            src={burgerIconSrc}
            alt="MobileMenuIcon"
            style={{ width: "85%", height: "85%" }}
          />
        </MobileMenuIcon>
      </NavigationContainer>
      {isMobileMenuOpen && (
        <MobileMenu style={{ opacity: isMobileMenuVisible ? 1 : 0 }}>
          <CloseButton onClick={handleMobileMenuClose}>×</CloseButton>
          <MobileLogoAboveLinks
            src="/assets/logo1.png"
            alt="Mobile Logo Above Links"
          />
          <MobileMenuItem
            to="/"
            onClick={() => {
              scrollToTop();
              handleMobileMenuClose();
            }}
          >
            Home
          </MobileMenuItem>
          <MobileMenuItem
            to="/"
            onClick={() => {
              handleNavLinkClick("services");
            }}
          >
            Our Services
          </MobileMenuItem>
          <MobileMenuItem to="/" onClick={() => handleNavLinkClick("aboutus")}>
            About Us
          </MobileMenuItem>
          <MobileMenuItem to="/" onClick={() => handleNavLinkClick("contact")}>
            Contact Us
          </MobileMenuItem>
          <MobileMenuItem
            to="/"
            onClick={() => handleNavLinkClick("portfolio")}
          >
            Portfolio
          </MobileMenuItem>
          <MobileMenuItem to="/" onClick={() => handleNavLinkClick("safety")}>
            Safety
          </MobileMenuItem>
          <MobileMenuItem to="/" onClick={scrollToTop}>
            <p>&copy; 2023 Hayden Building Maintenance Inc.</p>
          </MobileMenuItem>
        </MobileMenu>
      )}
      <Outlet />
    </React.Fragment>
  );
};

export default Navigation;

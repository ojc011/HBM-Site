import React, { useState, useEffect } from "react";
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
  DropdownItem,
  DropdownMenu,
  ArrowDown,
  ArrowContainer,
} from "./navigation.styles";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true); // Track whether the page is at the top

  const location = useLocation();
  const isOnRootRoute = location.pathname === "/";
  const isOnKPRoute = location.pathname === "/keypersonnel";
  const isOnSpecialRoute = [
    "fcr",
    "sar",
    "masonry",
    "slate",
    "maintenance",
  ].includes(location.pathname.slice(1));

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  const handleNavLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      handleMobileMenuClose(); // Close the mobile menu
    }
  };

  const handleDocumentClick = (e) => {
    const dropdown = document.querySelector("[data-dropdown]");
    const toggleButton = document.querySelector("[data-dropdown-toggle]");

    if (
      dropdown &&
      !dropdown.contains(e.target) &&
      !toggleButton.contains(e.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("click", handleDocumentClick);
    }
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isDropdownOpen]);

  return (
    <React.Fragment>
      <NavigationContainer isAtTop={isAtTop}>
        <LogoContainer to="/" onClick={scrollToTop}>
          <StyledLogo alt="Logo" src="/assets/logo1.png" />
        </LogoContainer>
        {isAtTop && isOnRootRoute && <h3>Hayden Building Maintenance</h3>}
        {isAtTop && isOnKPRoute && <h3>Key Personnel</h3>}
        {isOnSpecialRoute && (
          <h3>
            Our Services
            <ArrowContainer
              data-dropdown-toggle
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <ArrowDown open={isDropdownOpen} />
              {isDropdownOpen && (
                <DropdownMenu data-dropdown>
                  <DropdownItem to="/fcr">Flat Commercial Roofing</DropdownItem>
                  <DropdownItem to="/sar">Steep Arch Roofing</DropdownItem>
                  <DropdownItem to="/masonry">Masonry</DropdownItem>
                  <DropdownItem to="/slate">Slate</DropdownItem>
                  <DropdownItem to="/maintenance">Maintenance</DropdownItem>
                </DropdownMenu>
              )}
            </ArrowContainer>
          </h3>
        )}
        <MobileMenuIcon onClick={handleMobileMenuToggle}>
          <img
            src="/assets/whiteburger.png"
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
          <MobileMenuItem
            to="/keypersonnel"
            onClick={() => {
              scrollToTop();
              handleMobileMenuClose();
            }}
          >
            Key Personnel
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

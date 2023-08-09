import { Fragment, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import HaydenLogo from "../../assets/logotransparent.gif";
import MobileLogo from "./mobilelogo";
import SmallLogo from "../../assets/logo1.png";
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

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleMobileMenuLinkClick = (sectionId) => {
    setMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Fragment>
      <NavigationContainer>
        <MobileLogo />
        <LogoContainer to="/">
          <StyledLogo alt="" className="logo" src={HaydenLogo} />
        </LogoContainer>
        <NavLinks>
          {/* Links to sections */}
          <NavLink onClick={() => handleMobileMenuLinkClick("home")}>
            Home
          </NavLink>
          <NavLink onClick={() => handleMobileMenuLinkClick("services")}>
            Our Services
          </NavLink>
          <NavLink onClick={() => handleMobileMenuLinkClick("aboutus")}>
            About Us
          </NavLink>
          <NavLink onClick={() => handleMobileMenuLinkClick("contact")}>
            Contact Us
          </NavLink>
          <NavLink onClick={() => handleMobileMenuLinkClick("portfolio")}>
            Portfolio
          </NavLink>
          <NavLink onClick={() => handleMobileMenuLinkClick("safety")}>
            Safety
          </NavLink>
        </NavLinks>
        <MobileMenuIcon onClick={handleMobileMenuToggle}>
          <div></div>
          <div></div>
          <div></div>
        </MobileMenuIcon>
      </NavigationContainer>
      {isMobileMenuOpen && (
        <MobileMenu>
          <CloseButton onClick={handleMobileMenuToggle}>×</CloseButton>
          <MobileLogoAboveLinks src={SmallLogo} alt="Mobile Logo Above Links" />
          <Link
            to="home"
            smooth="true"
            duration={500}
            onClick={handleMobileMenuLinkClick}
          ></Link>
          {/* Mobile menu links */}
          <MobileMenuItem onClick={() => handleMobileMenuLinkClick("home")}>
            Home
          </MobileMenuItem>
          <MobileMenuItem onClick={() => handleMobileMenuLinkClick("services")}>
            Our Services
          </MobileMenuItem>
          <MobileMenuItem onClick={() => handleMobileMenuLinkClick("aboutus")}>
            About Us
          </MobileMenuItem>
          <MobileMenuItem onClick={() => handleMobileMenuLinkClick("contact")}>
            Contact Us
          </MobileMenuItem>
          <MobileMenuItem
            onClick={() => handleMobileMenuLinkClick("portfolio")}
          >
            Portfolio
          </MobileMenuItem>
          <MobileMenuItem onClick={() => handleMobileMenuLinkClick("safety")}>
            Safety
          </MobileMenuItem>
        </MobileMenu>
      )}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

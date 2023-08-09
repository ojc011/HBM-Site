// navigation.styles.js

import styled from "styled-components";
import { Link } from "react-router-dom";
import MobileLogo from "./mobilelogo";
import BurgerIconImage from "../../assets/burger.png"; // Import the PNG image for the burger icon

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 999;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  height: auto;
  width: auto;
  align-items: center;
  padding: 2px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  @media (max-width: 900px) {
    display: block;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: bold;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  white-space: nowrap;
`;

export const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;
  z-index: 1000;
  width: 50px;
  height: 50px;
  background-image: url(${BurgerIconImage});
  background-size: cover;
  @media (max-width: 900px) {
    display: flex;
  }
`;

export const MobileMenuItem = styled.div`
  padding: 10px 15px;
  width: 100%;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
`;

export const MobileLogoAboveLinks = styled.img`
  width: 75px; /* Set the width of the logo */
  height: auto;
  margin-bottom: 10px; /* Add some spacing below the logo */
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  border: 1px solid black;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;

  ${MobileMenuItem}:last-child {
    border-bottom: none;
  }

  @media (max-width: 900px) {
    display: flex;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  background: none;
  border: none;
  font-size: 60px;
  cursor: pointer;
`;

export default MobileLogo;

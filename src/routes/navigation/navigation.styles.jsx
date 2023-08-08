// navigation.styles.js

import styled from "styled-components";
import { Link } from "react-router-dom";
import MobileLogo from "./mobilelogo";
import BurgerIconImage from "../../assets/burger.png"; // Import the PNG image for the burger icon

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
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
  object-fit: contain; /* Ensure the image fits inside the container without stretching */

  /* Show the regular logo on medium and large devices */
  @media (max-width: 768px) {
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

  /* Apply styles for small and medium devices */
  @media (max-width: 768px) {
    display: none; /* Hide regular links on small devices */
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;
  z-index: 1000;
  width: 30px;
  height: 30px;
  background-image: url(${BurgerIconImage});
  background-size: cover;

  /* Display MobileMenuIcon (Burger menu) on small and medium devices */
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenuItem = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid black;
  width: 100%;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 70px;
  right: 20px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 9999;

  ${MobileMenuItem}:last-child {
    border-bottom: none;
  }

  /* Show MobileMenu on small and medium devices */
  @media (max-width: 768px) {
    display: flex;
  }
`;

export default MobileLogo;

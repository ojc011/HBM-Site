// navigation.styles.js

import styled from "styled-components";
import { Link } from "react-router-dom";
import MobileLogo from "./mobilelogo";

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
  background-color: #ffffff;
  z-index: 999;
  border: 2px solid #000000;
  border-radius: 5px;
  opacity: 0.85;
`;

export const LogoContainer = styled(Link)`
  margin-left: 50px;
  height: auto;
  width: auto;
  align-items: center;
  padding: 2px;
  display: block;
  width: auto; /* Make the mobile logo container full width on small and medium devices */
  height: 70px; /* Allow the height to adjust based on the logo size */
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledLogo = styled.img`
  display: flex;
  width: auto;
  height: 100%;
  object-fit: contain; /* Ensure the image fits inside the container without stretching */
  @media (max-width: 900px) {
    display: block;
  }
`;

export const NavLinks = styled.div`
  width: 100%;
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
  margin-right: 50px;
  display: none;
  cursor: pointer;
  z-index: 1000;
  width: 50px;
  height: 50px;

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

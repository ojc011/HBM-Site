import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: transparent;
  z-index: 999;
`;

export const LogoContainer = styled(Link)``;

export const StyledLogo = styled.img`
  display: block;
  width: auto;
  height: 65px;
  object-fit: contain;

  @media (max-width: 768px) {
    // Assuming 768px is the breakpoint for small devices
    width: 50px;
    height: auto;
  }
`;

export const MobileMenuIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    // Assuming 768px is the breakpoint for small devices
    width: 40px;
    height: 40px;
  }
`;

export const MobileMenu = styled.div`
  position: fixed; /* Change from absolute to fixed */
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease-in-out;
  z-index: 1000;
`;

export const MobileMenuItem = styled(Link)`
  margin: 10px 0;
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  p {
    font-weight: bold;
    font-size: 14px;
    text-align: center;
  }
`;

export const MobileLogoAboveLinks = styled.img`
  margin-bottom: 30px;
  width: 150px;
  height: auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

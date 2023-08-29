import styled from "styled-components";
import { Link } from "react-router-dom";

const smallDeviceQuery = "@media (max-width: 599px)";
const mediumDeviceQuery = "@media (min-width: 600px) and (max-width: 1024px)";
const largeDeviceQuery = "@media (min-width: 1024px)";

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
  margin-bottom: 7.5px;

  /* Style for h3 elements */
  h3 {
    text-align: center;
    color: white;
    letter-spacing: 10px;
    font-size: 22px; /* Default font size */
    white-space: nowrap; /* Prevent text from breaking into multiple lines */
    text-transform: uppercase;

    ${smallDeviceQuery} {
      font-size: 12px; /* Adjust font size for small devices */
      letter-spacing: 2px;
    }
    ${mediumDeviceQuery} {
      font-size: 16px;
      letter-spacing: 5px;
    }
  }
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
  min-width: 50px; /* Ensure minimum width to prevent squishing */
  min-height: 50px; /* Ensure minimum height to prevent squishing */

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    min-width: 40px; /* Adjust minimum width for small devices */
    min-height: 40px; /* Adjust minimum height for small devices */
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

export const ArrowContainer = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
`;

export const ArrowDown = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-left: 5px;
  border-left: 2px solid white;
  border-bottom: 2px solid white;
  transform: rotate(
    ${(props) => (props.open ? "315deg" : "135deg")}
  ); /* Adjusted rotate based on state */
  transition: transform 0.3s ease; /* Smooth rotation transition */
`;

export const DropdownMenu = styled.div`
  position: absolute;
  margin-top: 35px;
  top: 100%; // Positioned right below the ArrowContainer
  left: 50%;
  transform: translateX(-50%); // Centered horizontally
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  ${smallDeviceQuery} {
    transform: translateX(-50%);
  }
`;

export const DropdownItem = styled(Link)`
  margin-bottom: 5px;
  display: block;
  padding: 5px 15px;
  text-decoration: none;
  color: black;
  letter-spacing: 3px;

  &:hover {
    background-color: #f2f2f2;
  }
  ${largeDeviceQuery} {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

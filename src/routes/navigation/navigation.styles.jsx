import styled from "styled-components";
import { Link } from "react-router-dom";

const smallDeviceQuery = "@media (max-width: 599px)";
const mediumDeviceQuery = "@media (min-width: 600px) and (max-width: 1024px)";
const largeDeviceQuery = "@media (min-width: 1024px)";

const fadeIn = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

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
  margin-top: 5px;

  /* Style for h3 elements */
  h3 {
    text-align: center;
    color: white;
    letter-spacing: 10px;
    font-size: 22px; /* Default font size */
    white-space: nowrap; /* Prevent text from breaking into multiple lines */
    text-transform: uppercase;
    animation: fadeIn 0.5s ease-in-out;
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transition: opacity 0.5s ease-in-out;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0) 0%,
      transparent 100%
    );
    backdrop-filter: blur(5px); /* For the blurring effect */
    -webkit-backdrop-filter: blur(5px); /* For Safari */
    border-radius: 5px;

    ${smallDeviceQuery} {
      font-size: 10px; /* Adjust font size for small devices */
      letter-spacing: 1.5px;
    }
    ${mediumDeviceQuery} {
      font-size: 16px;
      letter-spacing: 5px;
    }
    ${fadeIn}
  } /* Call the fadeIn keyframes here */
`;

export const LogoContainer = styled(Link)`
  transition: transform 0.8s ease, opacity 0.8s ease;
  animation: ${(props) =>
    props.isClicked ? `flipHorizontal 0.8s linear` : "none"};
  &:hover {
    transform: scale(1.15);
  }
  @keyframes flipHorizontal {
    0% {
      transform: perspective(400px) rotateY(0);
    }
    100% {
      transform: perspective(400px) rotateY(1turn);
    }
  }
`;

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
  min-width: 50px;
  min-height: 50px;
  transition: transform 0.8s ease, opacity 0.8s ease;
  animation: ${(props) =>
    props.isBurgerClicked ? `spin 0.8s linear` : "none"};

  &:hover {
    transform: scale(1.25);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
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

  /* Add transitions for smooth animation */
  transition: transform 0.8s ease, opacity 0.8s ease;

  &:hover {
    transform: translateX(10px); /* Slide to the right */
    opacity: 0.8; /* Slight opacity change */
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

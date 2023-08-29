import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa"; // Import the arrow icon
import { useLocation } from "react-router-dom";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const location = useLocation();

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleNavLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ButtonContainer
        onClick={scrollToTop}
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <FaArrowUpIcon />
      </ButtonContainer>
      {location.pathname === "/" && (
        <QuoteButton
          to="/"
          onClick={() => handleNavLinkClick("contact")}
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          Contact!
        </QuoteButton>
      )}
    </>
  );
};
const ButtonContainer = styled.div`
  position: fixed;
  bottom: 60px; // This will position the ScrollToTop button 70px above the bottom.
  left: 20px;
  width: 32px;
  height: 32px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  z-index: 9998;
  transition: opacity 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover {
    background-color: #aaa;
  }
`;

const FaArrowUpIcon = styled(FaArrowUp)`
  font-size: 22px;
  color: black;
`;

export const QuoteButton = styled.button`
  background-color: #ca2236;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;
  position: fixed;
  bottom: 20px; // This will position the QuoteButton 20px above the bottom.
  left: 20px;

  &:hover {
    background-color: rgba(34, 42, 87, 0.7);
  }

  &:focus {
    outline: none;
  }
`;

export default ScrollToTopButton;

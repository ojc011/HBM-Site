import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa"; // Import the arrow icon

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

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
      <QuoteButton
        to="/"
        onClick={() => handleNavLinkClick("contact")}
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        GET A QUOTE!
      </QuoteButton>
    </>
  );
};
const ButtonContainer = styled.div`
  position: fixed;
  bottom: 70px; // This will position the ScrollToTop button 70px above the bottom.
  left: 20px;
  width: 42px;
  height: 42px;
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
  font-size: 24px;
  color: black;
`;

export const QuoteButton = styled.button`
  background-color: rgba(34, 42, 87);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
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

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

  return (
    <ButtonContainer onClick={scrollToTop} isVisible={isVisible}>
      <FaArrowUp />
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: #ccc;
  color: black;
  padding: 10px;
  border-radius: 25%;
  cursor: pointer;
  z-index: 9999;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;

  &:hover {
    background-color: #aaa;
  }
`;

export default ScrollToTopButton;

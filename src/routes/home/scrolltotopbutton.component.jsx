import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  IoClose,
  IoShareSocialOutline,
  IoMailOutline,
  IoStarOutline,
} from "react-icons/io5";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaArrowUp,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  const toggleExpansion = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleNavLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseMove = (e) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  };

  return (
    <>
      <ButtonContainer
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <FaArrowUpIcon />
      </ButtonContainer>

      {location.pathname === "/" && (
        <OptionsContainer
          onClick={toggleExpansion}
          isExpanded={isExpanded}
          onMouseMove={handleMouseMove}
        >
          {isExpanded ? (
            <IoClose style={{ marginBottom: "20px" }} />
          ) : (
            <IoShareSocialOutline />
          )}
          {isExpanded && (
            <>
              {renderIconLink(
                IoMailOutline,
                "contact",
                "Fill out contact form"
              )}
              {renderExternalLink(
                IoStarOutline,
                "https://g.page/r/CSEx7gJKt5ysEBE/review",
                "Leave a review"
              )}
              {renderSocialLink(
                FaFacebookF,
                "https://www.facebook.com/Hayden.HBMC/",
                "Check out our Facebook"
              )}
              {renderSocialLink(
                FaLinkedinIn,
                "https://www.linkedin.com/company/hayden-building-maintenance",
                "Check out our LinkedIn"
              )}
              {renderExternalLink(FaPhoneAlt, "tel:(845) 353-3400", "Call us!")}
            </>
          )}
        </OptionsContainer>
      )}
    </>
  );

  function renderIconLink(Icon, action, tooltipText) {
    return (
      <IconButton
        isExpanded={isExpanded}
        onClick={() => handleNavLinkClick(action)}
      >
        <Icon />
        <TooltipText cursorX={cursorX} cursorY={cursorY}>
          {tooltipText}
        </TooltipText>
      </IconButton>
    );
  }

  function renderExternalLink(Icon, href, tooltipText) {
    return (
      <IconButton
        isExpanded={isExpanded}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon />
        <TooltipText cursorX={cursorX} cursorY={cursorY}>
          {tooltipText}
        </TooltipText>
      </IconButton>
    );
  }

  function renderSocialLink(Icon, href, tooltipText) {
    return (
      <SocialButton
        isExpanded={isExpanded}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${tooltipText} Link`}
      >
        <Icon />
        <TooltipText cursorX={cursorX} cursorY={cursorY}>
          {tooltipText}
        </TooltipText>
      </SocialButton>
    );
  }
};

/* Styled Components */

const TooltipText = styled.span`
  bottom: 100%;
  padding: 5px 10px;
  background-color: transparent;
  color: #ffff;
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  white-space: nowrap;
  pointer-events: none;
  margin-bottom: 5px;
  z-index: 9999;
  position: fixed;
  top: ${({ cursorY }) => `${cursorY}px`};
  left: ${({ cursorX }) => `${cursorX}px`};
  transform: translate(-100%, 0);
  font-size: 16px;
`;

const sharedStyles = `
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 26px;
  margin: 5px;
  position: relative;

  &:focus {
    outline: none;
  }

  &:hover ${TooltipText} {
    opacity: 1;
    visibility: visible;
  }
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
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
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #aaa;
  }
`;

const FaArrowUpIcon = styled(FaArrowUp)`
  font-size: 22px;
  color: black;
`;

const OptionsContainer = styled.button`
  font-size: 22px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #222a57;
  color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: ${({ isExpanded }) => (isExpanded ? "15px" : "5px")};
  cursor: pointer;
  width: ${({ isExpanded }) => (isExpanded ? "auto" : "32px")};
  height: ${({ isExpanded }) => (isExpanded ? "auto" : "32px")};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: ${({ isExpanded }) => (isExpanded ? "400px" : "32px")};
  transition: max-height 0.5s
      ${({ isExpanded }) => (isExpanded ? "0s" : "0.3s")},
    background-color 0.5s ease-in-out;

  &:hover {
    background-color: #222a57c2;
  }

  &:focus {
    outline: none;
  }
`;

const IconButton = styled.a`
  ${sharedStyles}
`;
const SocialButton = styled.a`
  ${sharedStyles}
`;

export default ScrollToTopButton;

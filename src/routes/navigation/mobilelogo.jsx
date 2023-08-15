// MobileLogo.js

import React, { useEffect, useState } from "react"; // Don't forget to import React
import styled from "styled-components";
import { Link } from "react-router-dom";

const MobileLogoContainer = styled.div`
  margin-left: 75px;
  padding-top: 5px;
  display: none;
  width: auto; /* Set the width to a suitable size for the mobile logo container */
  height: 70px; /* Set the height to a suitable size for the mobile logo container */
  /* Apply other container styles as needed */

  /* Apply styles for small and medium devices */
  @media (max-width: 768px) {
    display: block;
    width: auto; /* Make the mobile logo container full width on small and medium devices */
    height: 70px; /* Allow the height to adjust based on the logo size */
  }
`;

const MobileLogoImageStyled = styled.img`
  width: 50%;
  height: 90%;
  object-fit: contain; /* Ensure the image fits inside the container without stretching */
`;

const MobileLogo = () => {
  const [targetSection, setTargetSection] = useState(null);

  useEffect(() => {
    if (targetSection) {
      const scrollToSection = () => {
        const element = document.getElementById(targetSection);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
      // Delay the scroll to the section after a short interval
      const scrollTimeout = setTimeout(() => {
        scrollToSection();
        // Reset the target section to null after scrolling
        setTargetSection(null);
      }, 500); // Adjust the delay as needed
      return () => clearTimeout(scrollTimeout);
    }
  }, [targetSection]);

  // Function to handle navigation link clicks
  const handleNavLinkClick = (sectionId) => {
    // Set the target section for scrolling
    setTargetSection(sectionId);
  };

  return (
    <Link to="/">
      <MobileLogoContainer to="/" onClick={() => handleNavLinkClick("home")}>
        <MobileLogoImageStyled
          src="/assets/haydenlogohighres.png"
          alt="Mobile Logo"
        />
      </MobileLogoContainer>
    </Link>
  );
};

export default MobileLogo;

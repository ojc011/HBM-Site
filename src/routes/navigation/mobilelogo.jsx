// MobileLogo.js

import React from "react"; // Don't forget to import React
import styled from "styled-components";
import MobileLogoImage from "../../assets/logotransparent.gif"; // Import the mobile logo image

const MobileLogoContainer = styled.div`
  display: none;
  width: 150px; /* Set the width to a suitable size for the mobile logo container */
  height: 40px; /* Set the height to a suitable size for the mobile logo container */
  /* Apply other container styles as needed */

  /* Apply styles for small and medium devices */
  @media (max-width: 768px) {
    display: block;
    width: 100%; /* Make the mobile logo container full width on small and medium devices */
    height: auto; /* Allow the height to adjust based on the logo size */
  }
`;

const MobileLogoImageStyled = styled.img`
  width: 50%;
  height: 100%;
  object-fit: contain; /* Ensure the image fits inside the container without stretching */
`;

const MobileLogo = () => {
  return (
    <MobileLogoContainer>
      <MobileLogoImageStyled src={MobileLogoImage} alt="Mobile Logo" />
    </MobileLogoContainer>
  );
};

export default MobileLogo;

// MobileLogo.js

import React from "react"; // Don't forget to import React
import styled from "styled-components";
import MobileLogoImage from "../../assets/haydenlogohighres.png"; // Import the mobile logo image

const MobileLogoContainer = styled.div`
  margin-left: 50px;
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
  return (
    <MobileLogoContainer>
      <MobileLogoImageStyled src={MobileLogoImage} alt="Mobile Logo" />
    </MobileLogoContainer>
  );
};

export default MobileLogo;

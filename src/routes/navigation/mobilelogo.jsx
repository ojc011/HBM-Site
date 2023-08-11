// MobileLogo.js

import React from "react"; // Don't forget to import React
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
  return (
    <Link to="/">
      <MobileLogoContainer to="/">
        <MobileLogoImageStyled
          src="/assets/haydenlogohighres.png"
          alt="Mobile Logo"
        />
      </MobileLogoContainer>
    </Link>
  );
};

export default MobileLogo;

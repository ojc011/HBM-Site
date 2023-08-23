import styled from "styled-components";
import { Link } from "react-router-dom";

const smallDeviceQuery = "@media (max-width: 480px)";
const mediumDeviceQuery = "@media (min-width: 481px) and (max-width: 768px)";
const largeDeviceQuery = "@media (min-width: 769px)";

export const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledBackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
`;

// Use the $ sign to indicate that imageUrl is a transient prop
StyledBackgroundImage.defaultProps = {
  $imageUrl: "none",
};

// Define the shouldForwardProp function to filter out transient props
const shouldForwardProp = (prop) => {
  return prop !== "$imageUrl";
};

// Wrap the StyledBackgroundImage component with StyleSheetManager and use shouldForwardProp
export const BackgroundImage = styled(StyledBackgroundImage).withConfig({
  shouldForwardProp,
})``;

export const BodyLink = styled(Link)`
  height: 50px;
  padding: 5px; /* Reduce padding for better space utilization */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: black;
  opacity: 0.6;
  position: absolute;
  border-radius: 10px;
  text-align: center; /* Center text in the link */

  h2 {
    font-weight: bold;
    margin: 0;
    font-size: 14px; /* Reduce font size for heading on small/mobile devices */
    color: white;
    text-transform: uppercase;
    line-height: 1.1; /* Improve line height for better text fitting */
  }

  p {
    font-weight: lighter;
    font-size: 10px; /* Reduce font size for paragraph on small/mobile devices */
    color: white;
    line-height: 1.2; /* Improve line height for better text fitting */
  }

  ${smallDeviceQuery} {
    height: 60px; /* Reduce height on small/mobile devices */
    h2 {
      font-size: 12px; /* Further reduce font size for heading on small/mobile devices */
    }
    p {
      font-size: 9px; /* Further reduce font size for paragraph on small/mobile devices */
    }
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 0.6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    ${BodyLink} {
      opacity: 0.9;
    }
  }

  ${smallDeviceQuery} {
    min-width: 100%; /* Adjust width to full-width on small/mobile devices */
    height: 160px; /* Further reduce height on small/mobile devices */
    margin-bottom: 5px;
  }

  ${mediumDeviceQuery} {
    min-width: 50%; /* Adjust width on medium devices */
    height: 200px; /* Adjust height on medium devices */
    margin: 0 3.75px 7.5px;
  }

  ${largeDeviceQuery} {
    margin: 0 3.75px 7.5px;
  }
`;

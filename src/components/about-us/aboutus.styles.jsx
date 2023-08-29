import { Link } from "react-router-dom";
import styled from "styled-components";

const smallDeviceQuery = "@media (max-width: 480px)";
const mediumDeviceQuery = "@media (min-width: 481px) and (max-width: 768px)";
const largeDeviceQuery = "@media (min-width: 769px)";

export const MPContainer = styled.div`
  border-radius: 5px;
  margin-bottom: 7.5px;
  border: 5px solid #ca2236;
  color: #ffffff;
  font-family: Arial, sans-serif;
`;

export const LeftContainer = styled.div`
  background-color: #222a57;
  opacity: 0.98;
  padding: 20px;

  ${mediumDeviceQuery} {
    padding: 15px;
  }

  ${smallDeviceQuery} {
    padding: 10px;
  }
`;

export const DescriptionContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;
  font-size: 18px;
  margin-bottom: 25px;
  padding: 20px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }

  h1 {
    opacity: 1;
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    opacity: 1;
    font-size: 16px;
    line-height: 1.5;
    width: 85%;
    margin: 10px auto;
  }
`;

export const CompanyPicContainer = styled.div`
  position: relative; /* Add this line to make sure the button is positioned relative to this container */
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;

  ${largeDeviceQuery} {
    width: 85%;
    margin: 20px auto;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

export const CompanyPic = styled.div`
  img {
    opacity: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
  }
`;

export const RightContainer = styled.div`
  background-color: #222a57;
  opacity: 0.98;
  padding: 20px;
  text-align: center; /* Center text on large devices */
  font-size: 18px; /* Increase font size by 2 points on large devices */

  ${mediumDeviceQuery} {
    padding: 15px;
  }

  ${smallDeviceQuery} {
    padding: 10px;
  }
`;

export const ServiceType = styled.div`
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out;
  width: 85%;
  margin: 10px auto;
  &:hover {
    transform: scale(1.05);
  }

  h3 {
    opacity: 1;
    font-size: 24px;
    margin-bottom: 10px;
    ${largeDeviceQuery} {
      font-size: 26px; /* Increase font size by 2 points on large devices */
    }
  }

  p {
    opacity: 1;
    font-size: 16px;
    line-height: 1.5;
    ${largeDeviceQuery} {
      font-size: 18px; /* Increase font size by 2 points on large devices */
    }
  }
`;

export const LinkButton = styled(Link)`
  position: absolute;
  top: 5px;
  left: 5px;
  padding: 5px 10px;
  background-color: rgba(34, 42, 87);
  border-radius: 5px;
  color: white;
  text-decoration: none;
  border-top-right-radius: 5px;
  z-index: 9999;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #a11a2b;
  }
  ${smallDeviceQuery} {
    padding: 5px 10px;
    font-size: 9px;
  }
`;

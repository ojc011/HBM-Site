import styled from "styled-components";

export const MPContainer = styled.div`
  border-radius: 5px;
  display: flex;
  padding: 20px;
  width: 100%;
  background-color: #ca2236; /* Dark blue background color */
  color: #ffffff; /* White text color */
  font-family: Arial, sans-serif; /* Choose a readable font-family */
`;

export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #222a57; /* Blue box */
  padding: 20px;
`;

export const DescriptionContainer = styled.div`
  margin-bottom: 20px;
  h1 {
    font-size: 28px;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    line-height: 1.6; /* Improved line height for readability */
  }
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Scale up by 5% on hover */
  }
`;

export const CompanyPicContainer = styled.div`
  flex: 1;
`;

export const CompanyPic = styled.div`
  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  }
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Scale up by 5% on hover */
  }
`;

export const RightContainer = styled.div`
  flex: 1;
  background-color: #222a57; /* Red box */
  padding: 20px;
`;

export const ServiceType = styled.div`
  margin-bottom: 20px;
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    line-height: 1.6; /* Improved line height for readability */
  }
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Scale up by 5% on hover */
  }
`;

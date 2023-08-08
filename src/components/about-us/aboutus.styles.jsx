import styled from "styled-components";

const smallDeviceQuery = "@media (max-width: 480px)";
const mediumDeviceQuery = "@media (min-width: 481px) and (max-width: 768px)";

export const MPContainer = styled.div`
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap on small/mobile devices */
  padding: 20px;
  width: 100%;
  background-color: #ca2236;
  color: #ffffff;
  font-family: Arial, sans-serif;
`;

export const LeftContainer = styled.div`
  flex: 1;
  background-color: #222a57;
  padding: 20px;

  ${mediumDeviceQuery} {
    padding: 10px; /* Reduce padding on medium devices */
  }

  ${smallDeviceQuery} {
    padding: 5px; /* Further reduce padding on small devices */
  }
`;

export const DescriptionContainer = styled.div`
  margin-bottom: 20px;
  h1 {
    font-size: 28px;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    line-height: 1.6;
  }
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  ${smallDeviceQuery} {
    h1 {
      font-size: 24px; /* Reduce font size on small devices */
    }
    p {
      font-size: 16px;
    }
  }
`;

export const CompanyPicContainer = styled.div`
  flex: 1;
  margin-top: 20px; /* Add margin for spacing on small devices */
`;

export const CompanyPic = styled.div`
  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const RightContainer = styled.div`
  flex: 1;
  background-color: #222a57;
  padding: 20px;

  ${mediumDeviceQuery} {
    padding: 10px; /* Reduce padding on medium devices */
  }

  ${smallDeviceQuery} {
    padding: 5px; /* Further reduce padding on small devices */
  }
`;

export const ServiceType = styled.div`
  margin-bottom: 20px;
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    line-height: 1.6;
  }
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  ${smallDeviceQuery} {
    h3 {
      font-size: 20px; /* Reduce font size on small devices */
    }
    p {
      font-size: 14px;
    }
  }
`;

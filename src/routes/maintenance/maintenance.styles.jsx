import styled from "styled-components";

const smallDeviceQuery = "@media (max-width: 480px)";
const mediumDeviceQuery = "@media (min-width: 481px) and (max-width: 768px)";
const largeDeviceQuery = "@media (min-width: 769px)";

export const DescriptionContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  border-radius: 5px;
  width: 33%;
  height: 100vh;
  right: 0;
  overflow-y: auto;

  ${smallDeviceQuery} {
    width: 50%;
  }
`;

export const OuterImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  width: 66%;
  height: 100vh;
  padding-left: 20px;
  overflow-y: auto;

  ${smallDeviceQuery} {
    width: 50%;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: stretch;
  height: 88vh;
  overflow-y: auto; /* Enable vertical scrolling within this component */
  padding: 10px;
`;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
  max-width: 90%;
  margin: 0 auto;

  ${smallDeviceQuery} {
    font-size: 15px;
    margin-bottom: 1cqh;
    padding: 5px;
  }

  ${mediumDeviceQuery} {
    font-size: 20px;
    margin-bottom: 15px;
    padding: 10px;
  }

  ${largeDeviceQuery} {
    font-size: 22px;
    margin-bottom: 15px;
    padding: 10px;
  }
`;

export const ServiceDescription = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${smallDeviceQuery} {
    padding: 5px;
  }

  ${mediumDeviceQuery} {
    padding: 15px;
  }

  ${largeDeviceQuery} {
    padding: 20px;
  }
`;

export const ServiceType = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${smallDeviceQuery} {
    font-size: 12px;
    padding: 5px;
  }

  ${mediumDeviceQuery} {
    padding: 10px;
  }

  ${largeDeviceQuery} {
    padding: 15px;
  }
`;

export const ServiceList = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  ${smallDeviceQuery} {
    font-size: 12px;
    padding: 5px;
  }

  ${mediumDeviceQuery} {
    font-size: 16px;
    padding: 15px;
  }

  ${largeDeviceQuery} {
    font-size: 22px;
    padding: 10px;
  }
`;

export const SubServiceList = styled.ul`
  list-style-type: none;
  padding-left: 10px;
  margin-top: 10px;
  text-align: center;

  ${smallDeviceQuery} {
    padding-left: 5px;
    margin-top: 10px;
  }
`;

export const SubServiceItem = styled.li`
  font-size: 16px;
  margin-bottom: 5px;
  padding-bottom: 5px;

  ${smallDeviceQuery} {
    font-size: 12px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 75%;
  margin: 0 auto;
`;

export const EnlargableImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  border: 1px solid black;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    border: 2px solid black;
  }
`;

export const EnlargedImageWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EnlargedImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

import styled from "styled-components";

export const Container = styled.div`
  opacity: 0.98;
  border: 2px solid #222a57;
  font-family: Arial, sans-serif;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    /* Adjust styles for screens with width <= 768px (e.g., mobile devices) */
    padding: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
  @media (max-width: 768px) {
    /* Adjust styles for screens with width <= 768px (e.g., mobile devices) */
    font-size: 24px;
    margin-bottom: 5px;
  }
`;

export const Section = styled.div`
  margin-top: 20px;
`;

export const PolicyTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #555;
`;

export const PurposeTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #555;
`;

export const ListItem = styled.li`
  margin-bottom: 8px;
`;

/* Add padding around the entire container */
export const StyledSafetyComponent = styled.div`
  width: 100%;
  padding: 10px;
`;

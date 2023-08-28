import styled from "styled-components";

export const KPContainer = styled.div`
  padding: 10px 0;
  background-color: #f5f5f5;
  text-align: center; /* Add this line to center-align the content */
  border-radius: 5px;
`;

export const PersonnelContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const PersonnelTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const PersonnelInfo = styled.p`
  font-size: 1rem;
  color: #667;
`;

export const PersonnelCard = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

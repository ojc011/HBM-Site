import styled from "styled-components";

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
  color: black; /* Set Title text color to black */
  text-align: center;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 8px;
  width: 100%; /* Make Title span the entire width */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ParentContainer = styled.div`
  gap: 20px;
  padding: 10px 5px; /* Add more horizontal padding for mobile */
  display: flex;
  transition: transform 0.3s ease;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(
      5,
      1fr
    ); /* Display five items per row on large screens */
  }

  @media (max-width: 1023px) {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* Display three items per row on medium screens */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Display one item per row on small screens */
  }

  grid-template-areas:
    "item"
    "item"
    "item";

  justify-items: center;
  align-items: center;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  min-width: 33.33%; /* Set width to fit three cards */
  flex: 0 0 auto;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 8px;
  width: 90%; /* Reduce the width on small screens */
  max-width: 300px; /* Limit the maximum width for consistency */
  transition: transform 0.3s ease; /* Add a transition for the hover effect */

  &:hover {
    cursor: pointer;
    transform: scale(1.05); /* Increase the size on hover */
  }

  @media (max-width: 480px) {
    width: 100%; /* Take full width on small screens */
  }
`;

export const ItemImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: contain;
  margin-bottom: 10px;
`;

export const ItemTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ItemDescription = styled.p`
  font-size: 14px;
`;

export const SlideButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
  margin: 20px auto;
`;

export const SlideButton = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

export const SlideCard = styled(ItemContainer)`
  width: 100%;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

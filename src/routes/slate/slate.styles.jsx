import styled from "styled-components";

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
  border-radius: 5px;
  max-width: 75%;
  margin: 0 auto; /* Center the title horizontally */
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 75%; /* Adjust the maximum width on large screens */
  margin: 0 auto; /* Center the container */
`;

export const EnlargableImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  border: 1px solid black;
  cursor: pointer;
  margin-bottom: 10px; /* Add vertical spacing between images */

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
  z-index: 1000;
`;

export const EnlargedImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 40px;
  color: #ff0000;
  cursor: pointer;
`;

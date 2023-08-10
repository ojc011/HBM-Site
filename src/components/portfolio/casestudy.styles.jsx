import styled from "styled-components";

export const TestimonialsContainer = styled.div`
  background-color: #f3f3f3;
  padding: 20px;
  border: 2px solid #000000;
  border-radius: 5px;
  margin-bottom: 7.5px;
`;

export const TestimonialsTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

export const TestimonialsSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TestimonialContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

export const TestimonialCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  text-align: center;
`;

export const TestimonialCompany = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const TestimonialDescription = styled.p`
  font-size: 14px;
  margin-bottom: 15px; /* Fixed typo in margin value */
`;

export const TestimonialText = styled.blockquote`
  font-size: 16px;
`;

export const ArrowButtonContainer = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArrowButton = styled.button`
  width: 25%;
  height: 25%;
  color: black;
  border: none;
  padding: 0;
  cursor: pointer;
  border-radius: 5px;
  font-size: 24px;
`;

export const LeftArrowButton = styled(ArrowButton)`
  justify-self: flex-start;
`;

export const RightArrowButton = styled(ArrowButton)`
  justify-self: flex-end;
`;

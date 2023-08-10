import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import {
  Container,
  Title,
  ParentContainer,
  ItemImage,
  ItemTitle,
  ItemDescription,
  SlideButtonsContainer,
  SlideButton,
  SlideCard,
  BackgroundComponent,
} from "./approvedby.styles";

const ApprovedBy = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextSlide,
    onSwipedRight: handlePrevSlide,
  });

  return (
    <BackgroundComponent>
      <Container id="portfolio" {...swipeHandlers}>
        <Title>Approved By</Title>
        <ParentContainer
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {items.map((item, index) => (
            <SlideCard key={index}>
              <ItemImage src={item.imageSrc} alt={item.title} />
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDescription>{item.description}</ItemDescription>
            </SlideCard>
          ))}
        </ParentContainer>
        <SlideButtonsContainer>
          <SlideButton onClick={handlePrevSlide}>Previous</SlideButton>
          <SlideButton onClick={handleNextSlide}>Next</SlideButton>
        </SlideButtonsContainer>
      </Container>
    </BackgroundComponent>
  );
};

export default ApprovedBy;

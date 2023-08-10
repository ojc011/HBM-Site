// Testimonials.js
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import {
  TestimonialsContainer,
  TestimonialsTitle,
  TestimonialsSlider,
  TestimonialCard,
  TestimonialCompany,
  TestimonialDescription,
  TestimonialText,
  LeftArrowButton,
  RightArrowButton,
  TestimonialContentContainer,
} from "./casestudy.styles"; // Update the import path to your styles
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import arrow icons

const Testimonials = ({ items }) => {
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

  const currentItem = items[currentIndex];

  return (
    <TestimonialsContainer>
      <TestimonialsTitle>Testimonials</TestimonialsTitle>
      <TestimonialsSlider>
        <LeftArrowButton onClick={handlePrevSlide}>
          <FaArrowLeft />
        </LeftArrowButton>
        <TestimonialContentContainer {...swipeHandlers}>
          <TestimonialCard>
            <TestimonialCompany>{currentItem.Company}</TestimonialCompany>
            <TestimonialDescription>
              {currentItem.Description}
            </TestimonialDescription>
            <TestimonialText>{currentItem.Testimonial}</TestimonialText>
          </TestimonialCard>
        </TestimonialContentContainer>
        <RightArrowButton onClick={handleNextSlide}>
          <FaArrowRight />
        </RightArrowButton>
      </TestimonialsSlider>
    </TestimonialsContainer>
  );
};

export default Testimonials;

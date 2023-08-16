import React, { useEffect, useState } from "react";
import {
  CloseButton,
  EnlargableImage,
  EnlargedImage,
  EnlargedImageWrapper,
  ImageContainer,
  ServiceDescription,
  ServiceList,
  ServiceType,
  SubServiceItem,
  SubServiceList,
  Title,
} from "./slate.styles";

const Slate = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Simulate loading images
    const loadImages = async () => {
      // Load image filenames and add to images state
      const imageFilenames = [];

      setImages(imageFilenames);
    };

    loadImages();
  }, []);

  const handleImageClick = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  const handleCloseButtonClick = () => {
    setEnlargedImage(null);
  };

  return (
    <>
      <Title>Slate Roofing</Title>
      <ServiceDescription>
        <ServiceType></ServiceType>
        <ServiceList>
          <SubServiceList>
            <SubServiceItem></SubServiceItem>
            <SubServiceItem></SubServiceItem>
            <SubServiceItem></SubServiceItem>
            <SubServiceItem></SubServiceItem>
            <SubServiceItem>
              Applications:
              <SubServiceList>
                <SubServiceItem></SubServiceItem>
                <SubServiceItem></SubServiceItem>
                <SubServiceItem></SubServiceItem>
                <SubServiceItem></SubServiceItem>
              </SubServiceList>
            </SubServiceItem>
          </SubServiceList>
        </ServiceList>
      </ServiceDescription>
      ;
      <ImageContainer>
        {images.map((filename, index) => (
          <EnlargableImage
            key={index}
            src={`/assets/slate/${filename}`}
            alt={`Image ${index + 1}`}
            onClick={() =>
              handleImageClick(
                process.env.PUBLIC_URL + `/assets/slate/${filename}`
              )
            }
          />
        ))}
      </ImageContainer>
      {enlargedImage && (
        <EnlargedImageWrapper>
          <CloseButton onClick={handleCloseButtonClick}>&times;</CloseButton>
          <EnlargedImage
            src={enlargedImage}
            alt="Enlarged"
            onClick={handleCloseButtonClick}
          />
        </EnlargedImageWrapper>
      )}
    </>
  );
};

export default Slate;

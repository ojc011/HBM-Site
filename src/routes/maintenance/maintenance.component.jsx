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
} from "./maintenance.styles";

const Maintenance = () => {
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
      <Title>Preventative Maintenance</Title>
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
      <ImageContainer>
        {images.map((filename, index) => (
          <EnlargableImage
            key={index}
            src={`/assets/maintenance/${filename}`}
            alt={`Image ${index + 1}`}
            onClick={() =>
              handleImageClick(
                process.env.PUBLIC_URL + `/assets/maintenance/${filename}`
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

export default Maintenance;

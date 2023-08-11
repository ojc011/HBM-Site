import React, { useEffect, useState } from "react";
import {
  CloseButton,
  EnlargableImage,
  EnlargedImage,
  EnlargedImageWrapper,
  ImageContainer,
  Title,
} from "./sar.styles";

const SteepArchRoofing = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Simulate loading images
    const loadImages = async () => {
      // Load image filenames and add to images state
      const imageFilenames = [
        "BJaysGlenOaksNY-min.jpg",
        "DJI_0143-min.JPG",
        "DJI_0144-min.JPG",
        "DJI_0145-min.JPG",
        "DJI_0146-min.JPG",
        "DJI_0147-min.JPG",
        "DJI_0148-min.JPG",
        "DJI_0149-min.JPG",
        "DJI_0150-min.JPG",
        "DJI_0151-min.JPG",
        "DJI_0154-min.jpg",
        "DJI_0159-2-min.jpg",
        "DJI_0161-min.jpg",
        "DJI_0175-min.jpg",
        "DJI_0176-min.jpg",
        "DJI_0194-min.jpg",
        "DJI_0199-min.jpg",
        "DJI_0218-min.jpg",
        "DJI_0221-min.jpg",
        "DJI_0226-min.jpg",
        "DJI_0227-min.jpg",
        "DJI_0249-min.jpg",
        "DJI_0250-min.jpg",
        "DJI_0251-min.jpg",
        "DJI_0262-min.jpg",
        "DJI_0263-min.jpg",
        "DJI_0264-min.jpg",
        "DJI_0265-min.jpg",
        "DJI_0266-min.jpg",
        "DJI_0267-min.jpg",
        "DJI_0272-min.jpg",
        "DJI_0273-min.jpg",
        "DJI_0274-min.jpg",
        "DJI_0275-min.jpg",
        "DJI_0278-min.jpg",
        "DJI_0280-min.jpg",
        "DJI_0281-min.jpg",
        "DJI_0282-min.jpg",
        "DJI_0283-min.jpg",
        "DJI_0284-min.jpg",
        "DJI_0285-min.jpg",
        "NewOrleans073-min.jpg",
        "NewOrleans117-min.jpg",
        "NewOrleans118-min.jpg",
        "NewOrleans173-min.jpg",
        "NewOrleans175-min.jpg",
        "P1040948-min.JPG",
        "P1040949-min.JPG",
        "P1040952-min.JPG",
        "P1040955-min.JPG",
        "P1040958-min.JPG",
      ];

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
      <Title>Steep Architectural Roofing</Title>
      <ImageContainer>
        {images.map((filename, index) => (
          <EnlargableImage
            key={index}
            src={`/assets/steeparchroofing/${filename}`}
            alt={`Image ${index + 1}`}
            onClick={() =>
              handleImageClick(
                process.env.PUBLIC_URL + `/assets/steeparchroofing/${filename}`
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

export default SteepArchRoofing;

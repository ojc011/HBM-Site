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
} from "./masonry.styles";

const Masonry = () => {
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
      <Title>Masonry Restoration</Title>
      <ServiceDescription>
        <ServiceType>
          Hayden can serve all of your commercial and industrial building
          envelope needs. We are confident that you will be very satisfied with
          our commercial and industrial masonry restoration, waterproofing and
          concrete services. Our waterproofing systems protect your investment &
          facility from structural deterioration and damage as a result of water
          infiltration. Our process of waterproofing and sealing exterior
          concrete and masonry work is unsurpassed. Hayden presents various
          solutions when designing waterproofing systems.
          <br />
          <br />
          The masonry division of Hayden is dedicated to the restoration and
          preservation of historic, commercial, governmental, industrial,
          institutional and residential buildings. Our professional staff has a
          comprehensive background in masonry construction, traditional
          materials and state of the art techniques for safely restoring,
          repointing or cleaning historic masonry work. We have developed a
          unique array of trade and professional skills and can assemble the
          most comprehensive integrated project teams for masonry restoration or
          historic preservation. Through the changes in building technologies
          and styles, our commitment to service, innovation and craftsmanship
          stays constant. Preservation is a team effort and we offer our unique
          expertise and services to architects, owners and preservation
          professionals.
        </ServiceType>
        <ServiceList>
          <SubServiceList>
            <SubServiceItem>
              Masonry Pointing – Sealing and Caulking
            </SubServiceItem>
            <SubServiceItem>
              Facade Restoration / NYC Local Law 11 Experts
            </SubServiceItem>
            <SubServiceItem>Waterproofing</SubServiceItem>
            <SubServiceItem>
              Parapet Walls Restored – Balcony Restoration
            </SubServiceItem>
            <SubServiceItem>All types of painting and coating</SubServiceItem>
            <SubServiceItem>
              Parking Lot / Plaza Deck waterproofing – Parking Garage
              Restoration
            </SubServiceItem>
            <SubServiceItem>Building Cleaning</SubServiceItem>
            <SubServiceItem>Steel Remediation</SubServiceItem>
            <SubServiceItem>Misc. General Construction</SubServiceItem>
            <SubServiceItem>Structural Carpentry</SubServiceItem>
          </SubServiceList>
        </ServiceList>
      </ServiceDescription>
      <ImageContainer>
        {images.map((filename, index) => (
          <EnlargableImage
            key={index}
            src={`/assets/masonry/${filename}`}
            alt={`Image ${index + 1}`}
            onClick={() =>
              handleImageClick(
                process.env.PUBLIC_URL + `/assets/masonry/${filename}`
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

export default Masonry;

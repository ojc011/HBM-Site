import React, { useEffect, useState } from "react";
import {
  DescriptionContainer,
  Title,
  ServiceDescription,
  ServiceType,
  ServiceList,
  SubServiceList,
  SubServiceItem,
  EnlargableImage,
  EnlargedImageWrapper,
  EnlargedImage,
  CloseButton,
  MainContainer,
  OuterImageContainer,
} from "./masonry.styles";
const Masonry = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const imageFilenames = [
        "20110623-_MAD7432-min.jpg",
        "20110623-_MAD7444-min.jpg",
        "20110623-_MAD7453-min.jpg",
        "20110623-_MAD7458-min.jpg",
        "20110623-_MAD7465-min.jpg",
        "20110623-_MAD7468-min.jpg",
        "20110623-_MAD7475-min.jpg",
        "20110623-_MAD7477-min.jpg",
        "20110623-_MAD7493-min.jpg",
        "20110623-_MAD7499-min.jpg",
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
    <MainContainer>
      <DescriptionContainer>
        <ServiceDescription>
          <Title>Masonry Restoration</Title>
          <ServiceType>
            Hayden addresses your masonry needs comprehensively, from historical
            to commercial and residential structures. Our adept team employs
            traditional expertise and modern techniques to ensure secure
            restoration, including repointing and cleaning. With diverse trade
            skills, we assemble effective project teams for restoration. Amid
            changing technologies, our commitment to service and craftsmanship
            perseveres. We collaborate with architects, owners, and
            preservationists to ensure successful masonry preservation.
          </ServiceType>
          <ServiceList>
            Hayden offers the following services:
            <SubServiceList>
              <SubServiceItem>Masonry Restoration</SubServiceItem>
              <SubServiceItem>
                Masonry Pointing – Sealing and Caulking
              </SubServiceItem>
              <SubServiceItem>
                Facade Restoration / NYC Local Law 11 Experts
              </SubServiceItem>
              <SubServiceItem>Waterproofing</SubServiceItem>
              <SubServiceItem>
                Applications:
                <SubServiceList>
                  <SubServiceItem>
                    Parapet Walls Restoration – Balcony Restoration
                  </SubServiceItem>
                  <SubServiceItem>
                    All types - Painting and coating
                  </SubServiceItem>
                  <SubServiceItem>Parking Garage Restoration</SubServiceItem>
                  <SubServiceItem>Building Cleaning</SubServiceItem>
                  <SubServiceItem>Steel Remediation</SubServiceItem>
                  <SubServiceItem>Structural Carpentry</SubServiceItem>
                </SubServiceList>
              </SubServiceItem>
            </SubServiceList>
          </ServiceList>
        </ServiceDescription>
      </DescriptionContainer>
      <OuterImageContainer>
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
      </OuterImageContainer>
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
    </MainContainer>
  );
};

export default Masonry;

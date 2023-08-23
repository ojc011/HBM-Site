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
} from "./waterproofing.styles";
const Waterproofing = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
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
    <MainContainer>
      <DescriptionContainer>
        <ServiceDescription>
          <Title>Flat Commercial Roofing</Title>
          <ServiceType>
            Hayden Building Maintenance Corp. has been installing quality
            roofing systems since 1973 in the Tri-state NY area. A recognized
            leader in the commercial roofing industry, Hayden specializes in
            turn-key solutions for commercial, institutional, industrial, and
            residential flat roofing applications of all sizes. The roofing
            crews are experienced and certified installers trained in a variety
            of flat roof products and applications. The professionals at Hayden
            have the experience and knowledge to handle any project, regardless
            of size or complexity.
          </ServiceType>
          <ServiceList>
            Hayden offers the following services:
            <SubServiceList>
              <SubServiceItem>Reroofing Projects</SubServiceItem>
              <SubServiceItem>New Construction</SubServiceItem>
              <SubServiceItem>Repairs</SubServiceItem>
              <SubServiceItem>
                Applications:
                <SubServiceList>
                  <SubServiceItem>
                    Hot Asphalt (BUR) Roofing Systems
                  </SubServiceItem>
                  <SubServiceItem>Modified Roofing Systems</SubServiceItem>
                  <SubServiceItem>
                    Thermoplastic Polyolefin (TPO)
                  </SubServiceItem>
                  <SubServiceItem>Rubber (EPDM) Roofing Systems</SubServiceItem>
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
            src={`/assets/flatcommercialroofing/${filename}`}
            alt={`Image ${index + 1}`}
            onClick={() =>
              handleImageClick(
                process.env.PUBLIC_URL +
                  `/assets/flatcommercialroofing/${filename}`
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

export default Waterproofing;

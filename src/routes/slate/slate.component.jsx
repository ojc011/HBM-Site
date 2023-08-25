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
} from "./slate.styles";
const Slate = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const imageFilenames = [
        "DSC_0291.jpg",
        "DSC_0292.jpg",
        "DSC_0303.jpg",
        "DSC_0305.jpg",
        "DSC_0309.jpg",
        "DSC_0314.jpg",
        "DSC_0326.jpg",
        "DSC_0339.jpg",
        "SEP_6274.jpg",
        "SEP_6282.jpg",
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
          <Title>Slate Roofing</Title>
          <ServiceType>
            Hayden Building Maintenance excels in delivering exquisite
            residential slate roofing installations. Our specialized expertise,
            honed over years of dedicated service, ensures unparalleled
            craftsmanship in every slate roofing project. With a commitment to
            high-end solutions, we bring timeless beauty and durability to your
            residential roofing needs. Our skilled team's proficiency in slate
            roofing is matched only by our dedication to customer satisfaction.
            Choose Hayden for distinguished slate roofing services that combine
            elegance, longevity, and unmatched skill.
          </ServiceType>
          <ServiceList>
            Hayden offers the following slate roofing services:
            <SubServiceList>
              <SubServiceItem>
                Residential/Commercial High-End Slate Roofing Installations
              </SubServiceItem>
              <SubServiceItem>
                Slate Roof Repairs and Maintenance
              </SubServiceItem>
              <SubServiceItem>
                Slate Roof Inspections and Consultations
              </SubServiceItem>
              <SubServiceItem>
                Applications:
                <SubServiceList>
                  <SubServiceItem>
                    Custom Slate Patterns and Designs
                  </SubServiceItem>
                  <SubServiceItem>Slate Roof Replacement</SubServiceItem>
                  <SubServiceItem>Slate Roof Restoration</SubServiceItem>
                  <SubServiceItem>
                    Expert Slate Selection and Sourcing
                  </SubServiceItem>
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
            src={`/assets/slate/${filename}`}
            alt={`Image ${index + 1}`}
            onClick={() =>
              handleImageClick(
                process.env.PUBLIC_URL + `/assets/slate/${filename}`
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

export default Slate;

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
} from "./maintenance.styles";
const Maintenance = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const imageFilenames = [
        "DSC_1876.jpg",
        "DSC_1889.jpg",
        "DSC_1899.jpg",
        "DSC_1909.jpg",
        "DSC_1915.jpg",
        "DSC_1933.jpg",
        "DSC_1956.jpg",
        "MEN LAYING MEMBRANE.jpg",
        "PICT0014.JPG",
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
            src={`/assets/maintenance/${filename}`}
            alt={`Image ${index + 1}`}
            onClick={() =>
              handleImageClick(
                process.env.PUBLIC_URL + `/assets/maintenance/${filename}`
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

export default Maintenance;

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
        "SEP_6304.jpg",
        "SEP_6333.jpg",
        "SEP_6345.jpg",
        "SEP_6350.jpg",
        "SEP_6355.jpg",
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

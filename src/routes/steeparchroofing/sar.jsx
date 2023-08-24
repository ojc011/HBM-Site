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
} from "./sar.styles";
const SteepArchRoofing = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const imageFilenames = [
        "DSC_1634-min.JPG",
        "DSC_1639-min.JPG",
        "DSC_1641-min.JPG",
        "DSC_1643-min.JPG",
        "DSC_1650-min.JPG",
        "DSC_1662-min.JPG",
        "DSC_1663-min.JPG",
        "DSC_1795.JPG",
        "DSC_1798.JPG",
        "DSC_1799.JPG",
        "DSC_1802.JPG",
        "DSC_1805.JPG",
        "DSC_1811.JPG",
        "DSC_1812.JPG",
        "DSC_1813.JPG",
        "DSC_1816.JPG",
        "DSC_1820.JPG",
        "DSC_1824.JPG",
        "DSC_1826-min.JPG",
        "DSC_1828-min.JPG",
        "DSC_1832-min.JPG",
        "DSC_1836-min.JPG",
        "DSC_1837-min.JPG",
        "DSC_1843-min.JPG",
        "DSC_1847-min.JPG",
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
            src={`/assets/sar/${filename}`}
            alt={`Image ${index + 1}`}
            onClick={() =>
              handleImageClick(
                process.env.PUBLIC_URL + `/assets/sar/${filename}`
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

export default SteepArchRoofing;

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
          <Title>Steep Architectural Roofing</Title>
          <ServiceType>
            Superior roofs are crafted by the finest roofers. With 50+ years
            of unwavering reliability, Hayden Building Maintenance Corp. stands
            as your foremost roofing expert. We specialize exclusively in
            residential and steep-slope roofing solutions. Our adept team of
            extensively trained professionals comprehends the significance of
            your residential or commercial investment, striving to surpass your
            anticipations. Backed by comprehensive expertise, our professionals
            are well-versed in a variety of roofing materials. Entrust your
            roofing project to us for unmatched excellence and enduring value.
          </ServiceType>
          <ServiceList>
            Hayden offers the following roofing options:
            <SubServiceList>
              <SubServiceItem>Tile – clay and concrete</SubServiceItem>
              <SubServiceItem>
                Wood Shake – cedar, pine and cypress
              </SubServiceItem>
              <SubServiceItem>Copper/Metal</SubServiceItem>
              <SubServiceItem>Gutters & Leaders</SubServiceItem>
              <SubServiceItem>Snow Guards</SubServiceItem>
              <SubServiceItem>Asphalt Shingle</SubServiceItem>
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

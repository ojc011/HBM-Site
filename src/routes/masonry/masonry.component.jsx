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
        "20110623-_MAD7515-min.jpg",
        "20110623-_MAD7520-min.jpg",
        "20110623-_MAD7522-min.jpg",
        "20110623-_MAD7530-min.jpg",
        "20110623-_MAD7533-min.jpg",
        "20110623-_MAD7538-min.jpg",
        "20110623-_MAD7546-min.jpg",
        "20110623-_MAD7548-min.jpg",
        "20110623-_MAD7555-min.jpg",
        "20110623-_MAD7560-min.jpg",
        "20110623-_MAD7572-min.jpg",
        "20110623-_MAD7577-min.jpg",
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

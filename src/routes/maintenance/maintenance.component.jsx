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
          <Title>Maintenance</Title>
          <ServiceType>
            Hayden Building Maintenance Corp. goes beyond excellence by
            providing round-the-clock, 24/7 maintenance services for the diverse
            range of solutions we've meticulously discussed. Our commitment
            extends to every facet of your roofing, masonry, and construction
            needs, ensuring prompt assistance at any hour. With an unwavering
            dedication to quality and customer satisfaction, our responsive team
            stands ready to address emergency repairs, routine maintenance, and
            inquiries, day or night. Trust in Hayden's comprehensive support,
            available every moment, to safeguard your investments, preserve the
            integrity of your structures, and deliver peace of mind, whenever
            you need it.
          </ServiceType>
          <ServiceList>
            Hayden offers the following services:
            <SubServiceList>
              <SubServiceItem>
                24/7 Emergency Roofing Repairs and Maintenance
              </SubServiceItem>
              <SubServiceItem>
                24/7 Masonry Restoration Support and Solutions
              </SubServiceItem>
              <SubServiceItem>
                24/7 Building Envelope Maintenance
              </SubServiceItem>
              <SubServiceItem>
                Applications:
                <SubServiceList>
                  <SubServiceItem>
                    Immediate Response to Roof Leaks and Damage
                  </SubServiceItem>
                  <SubServiceItem>
                    Continuous Monitoring and Care for Masonry Structures
                  </SubServiceItem>
                  <SubServiceItem>
                    Ongoing Assessment and Preservation of Building Envelopes
                  </SubServiceItem>
                  <SubServiceItem>
                    Round-the-Clock Customer Support for All Services
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

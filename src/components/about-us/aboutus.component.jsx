import React from "react";
import {
  MPContainer,
  LeftContainer,
  DescriptionContainer,
  CompanyPicContainer,
  CompanyPic,
  RightContainer,
  ServiceType,
} from "./aboutus.styles";

const MainPage = () => {
  return (
    <MPContainer id="aboutus">
      <LeftContainer>
        <DescriptionContainer>
          <h1>
            Hayden Building Maintenance Corporation, The Roofing Specialist
          </h1>
          <p>
            Hayden Building Maintenance Corporation, or HMBC, The Roofing
            Specialist, is an industry leader in commercial roofing,
            waterproofing, and restoration. In addition to a significant number
            of governmental and military facilities on a national scale, HBMC
            has worked with numerous prestigious companies including Wal-Mart,
            Xerox, Feil Organization, Federal Express, Stop & Shop, Kohl’s,
            Coca-Cola Bottling Company, Pyramid Company, UPS, Baxter Healthcare,
            Toys ‘R’ Us, and Verizon Wireless to name a few. Hayden Building
            Maintenance Corp. specializes in job-specific expertise to match our
            clients’ distinctive needs in each of the categories in which we
            operate.
          </p>
        </DescriptionContainer>
        <CompanyPicContainer>
          <CompanyPic>
            <img alt="" src="/assets/staffpic.png" />
          </CompanyPic>
        </CompanyPicContainer>
      </LeftContainer>
      <RightContainer>
        <ServiceType>
          <h3>FLAT COMMERCIAL ROOFING</h3>
          <p>
            Hayden specializes in turn-key solutions for commercia flat roofing
            applications of all sizes. Our experienced and certified roofing
            crews are trained in a variety of flat roof products and
            applications, ensuring high-quality installations and long-lasting
            solutions for your roofing needs.
          </p>
        </ServiceType>
        <ServiceType>
          <h3>STEEP ARCHITECTURAL ROOFING</h3>
          <p>
            Hayden is devoted entirely to your steep sloped roofing needs. Our
            team of highly qualified and well-trained professionals understands
            the significance of your commercial investment, and we are committed
            to delivering exceptional roofing services that exceed your
            expectations in terms of quality and craftsmanship.
          </p>
        </ServiceType>
        <ServiceType>
          <h3>MASONRY RESTORATION</h3>
          <p>
            Hayden can serve all of your commercial and industrial building
            envelope needs. We are confident that you will be very satisfied
            with our commercial and industrial masonry restoration,
            waterproofing, and concrete services. Our dedicated team brings
            years of experience and expertise to ensure that your building's
            envelope is well-maintained and protected against the elements.
          </p>
        </ServiceType>
        <ServiceType>
          <h3>SLATE ROOFING</h3>
          <p>
            Hayden specializes in high-end slate roofing installations. We take
            pride in our meticulous craftsmanship and attention to detail,
            ensuring that your slate roofing project is completed with precision
            and elegance. Schedule a meeting with us to review and discuss your
            upcoming project, and let us turn your vision into reality.
          </p>
        </ServiceType>
      </RightContainer>
    </MPContainer>
  );
};

export default MainPage;

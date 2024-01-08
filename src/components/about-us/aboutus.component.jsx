import React from "react";
import {
  MPContainer,
  LeftContainer,
  DescriptionContainer,
  CompanyPicContainer,
  CompanyPic,
  RightContainer,
  ServiceType,
  LinkButton,
} from "./aboutus.styles";
import { Link } from "react-router-dom";

const MainPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <MPContainer id="aboutus">
      <LeftContainer>
        <DescriptionContainer>
          <h1>HAYDEN BUILDING MAINTENANCE CORPORATION</h1>
          <p>
            Hayden Building Maintenance Corporation (HBMC), stands as an
            industry frontrunner in the fields of commercial roofing,
            waterproofing, and restoration. With an impressive portfolio that
            spans across national governmental and military facilities, our
            reach extends to partnering with esteemed entities such as Wal-Mart,
            Xerox, Feil Organization, Federal Express, Stop & Shop, Kohl’s,
            Coca-Cola Bottling Company, Pyramid Company, UPS, Baxter Healthcare,
            Toys ‘R’ Us, and Verizon Wireless, among others. Our reputation for
            excellence is grounded in an unwavering commitment to precision and
            quality, as exemplified by our meticulous workmanship and
            time-tested expertise. By tailoring our solutions to meet the unique
            demands of each project, Hayden Building Maintenance Corp. has
            established itself as a specialist in delivering bespoke services
            across all aspects of the industry.
          </p>
        </DescriptionContainer>
        <Link
          to="/keypersonnel"
          onClick={() => {
            scrollToTop();
          }}
        >
          {" "}
          {/* Add Link component here */}
          <CompanyPicContainer>
            <CompanyPic>
              <LinkButton
                to="/keypersonnel"
                onClick={() => {
                  scrollToTop();
                }}
              >
                Key Personnel
              </LinkButton>
              <img alt="" src="/assets/staffpic.png" />
            </CompanyPic>
          </CompanyPicContainer>
        </Link>
      </LeftContainer>
      <RightContainer>
        <ServiceType>
          <h3>FLAT COMMERCIAL ROOFING</h3>
          <p>
            Hayden specializes in turn-key solutions for commercial flat roofing
            applications of all sizes. Our experienced and certified roofing
            crews are trained in a variety of flat roof products and
            applications, ensuring high-quality installations and long-lasting
            solutions for your roofing needs. From EPDM to TPO, we offer a wide
            range of materials to suit your project's requirements, providing
            exceptional insulation and weather resistance for your business.
          </p>
        </ServiceType>
        <ServiceType>
          <h3>STEEP ARCHITECTURAL ROOFING</h3>
          <p>
            Hayden is devoted entirely to your steep sloped roofing needs. Our
            team of highly qualified and well-trained professionals understands
            the significance of your commercial investment, and we are committed
            to delivering exceptional roofing services that exceed your
            expectations in terms of quality and craftsmanship. Whether it's
            shingle, metal, or tile roofing, we bring decades of experience to
            ensure your roofing solution not only enhances the aesthetics of
            your property but also provides unparalleled protection against the
            elements.
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
            envelope is well-maintained and protected against the elements. From
            repairing deteriorating brickwork to ensuring seamless
            waterproofing, we prioritize the longevity and resilience of your
            building's structure.
          </p>
        </ServiceType>
        <ServiceType>
          <h3>SLATE ROOFING</h3>
          <p>
            Hayden specializes in high-end slate roofing installations. We take
            pride in our meticulous craftsmanship and attention to detail,
            ensuring that your slate roofing project is completed with precision
            and elegance. Our team of skilled artisans carefully selects and
            installs each slate tile, creating a timeless and sophisticated
            roofing solution that enhances both the aesthetic appeal and
            durability of your property. With our slate roofing services, your
            investment is not only a testament to quality but also a statement
            of architectural elegance.
          </p>
        </ServiceType>
      </RightContainer>
    </MPContainer>
  );
};

export default MainPage;

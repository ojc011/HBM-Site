import React from "react";
import MainPage from "../../components/about-us/aboutus.component";
import SafetyComponent from "../../components/safety/safety.component";
import ApprovedBy from "../../components/portfolio/slideshow.component";
import ContactForm from "../../components/contact/contact-form.component";
import { Fragment } from "react";
import Footer from "../../components/footer/footer.component";
import ScrollToTopButton from "./scrolltotopbutton.component";
import {
  BackgroundImage,
  DirectoryItemContainer,
  BodyLink,
  DirectoryContainer,
} from "./home.component.styles";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div id="home">
      <Fragment>
        <DirectoryContainer>
          {/* Masonry Restoration */}
          <DirectoryItemContainer key={3} id="services">
            <BackgroundImage imageurl="https://i.imgur.com/R0yh6TC.jpg" />
            <BodyLink to={`/masonry`}>
              <div>
                <h2>Masonry Restoration</h2>
              </div>
            </BodyLink>
          </DirectoryItemContainer>

          {/* Slate Roofing */}
          <DirectoryItemContainer key={4} id="services">
            <BackgroundImage imageurl="https://i.imgur.com/xRIVxHC.jpg" />
            <BodyLink to={`/slate`}>
              <div>
                <h2>Slate Roofing</h2>
              </div>
            </BodyLink>
          </DirectoryItemContainer>
          {/* Emergency Maintenance */}
          <DirectoryItemContainer key={6} id="services">
            <BackgroundImage imageurl="https://i.imgur.com/55uJioc.jpg" />
            <BodyLink to={`/maintenance`}>
              <div>
                <h2>Emergency Maintenance</h2>
              </div>
            </BodyLink>
          </DirectoryItemContainer>
          {/* Flat Commercial Roofing */}
          <DirectoryItemContainer key={1} id="services">
            <BackgroundImage imageurl="https://i.imgur.com/nrnVNtm.jpg" />
            <BodyLink to={`/fcr`}>
              <div>
                <h2>Flat Commercial Roofing</h2>
              </div>
            </BodyLink>
          </DirectoryItemContainer>
          {/* Steep Architectural Roofing */}
          <DirectoryItemContainer key={2} id="services">
            <BackgroundImage imageurl="https://i.imgur.com/ZptgJFH.jpg" />
            <BodyLink to={`/sar`}>
              <div>
                <h2>Steep Architectural Roofing</h2>
              </div>
            </BodyLink>
          </DirectoryItemContainer>
        </DirectoryContainer>

        {/* Add meta tags */}
        <Helmet>
          <title>Hayden Building Maintenance Corporation</title>
          <meta
            name="description"
            content="Leading the industry in commercial roofing, waterproofing, masonry, and restoration services. Proudly serving Rockland County, NY, and beyond with exceptional craftsmanship and tailored solutions for your building's needs."
          />
          <meta
            name="keywords"
            content="commercial roofing, waterproofing, restoration, Rockland County, NY, Roofing Specialist, Commercial Roofing Solutions, Steep Sloped Roofing, Flat Roof Installation, Roofing Services in Rockland County, NY, Professional Roofing Contractors, Roof Repair and Restoration, High-Quality Roofing Materials, Top-Rated Roofing Company, Waterproofing and Masonry Services, Experienced Roofing Crews, Trusted Roofing Partner, Building Envelope Maintenance, Slate Roofing Installation, Emergency Roof Repairs, Industry-Leading Roofing Solutions, Quality Craftsmanship, Expert Roofing Solutions, Turn-Key Roofing Services, Roofing Installation Experts"
          />
          <meta name="geo.region" content="US-NY" />
          <meta name="geo.placename" content="Rockland County" />
          <meta name="geo.position" content="41.0907;-74.0151" />
        </Helmet>

        <MainPage />
        <ContactForm />
        <ApprovedBy />
        <SafetyComponent />
        <Footer />
        <ScrollToTopButton />
      </Fragment>
    </div>
  );
};

export default Home;

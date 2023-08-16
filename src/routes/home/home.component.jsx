import Directory from "../../components/our-services/directory.component";
import MainPage from "../../components/about-us/aboutus.component";
import SafetyComponent from "../../components/safety/safety.component";
import ApprovedBy from "../../components/portfolio/slideshow.component";
import ContactForm from "../../components/contact/contact-form.component";
import { Fragment } from "react";
import Footer from "../../components/footer/footer.component";
import ScrollToTopButton from "./scrolltotopbutton.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Flat Commercial Roofing",
      imageurl: "https://i.imgur.com/nrnVNtm.jpg",
    },
    {
      id: 2,
      title: "Steep Architectural Roofing",
      imageurl: "https://i.imgur.com/ZptgJFH.jpg",
    },
    {
      id: 3,
      title: "Masonry Restoration",
      imageurl: "https://i.imgur.com/R0yh6TC.jpg",
    },
    {
      id: 4,
      title: "Slate Roofing",
      imageurl: "https://i.imgur.com/xRIVxHC.jpg",
    },
    {
      id: 5,
      title: "Waterproofing",
      imageurl: "https://i.imgur.com/XBkbK5Y.jpg",
    },
    {
      id: 6,
      title: "Emergency Maintenance",
      imageurl: "https://i.imgur.com/55uJioc.jpg",
    },
  ];
  return (
    <div id="home">
      <Fragment>
        <Directory categories={categories} />
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

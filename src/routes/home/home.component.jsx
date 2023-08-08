import Directory from "../../components/our-services/directory.component";
import HomePage from "../../components/about-us/aboutus.component";
import SafetyComponent from "../../components/safety/safety.component";
import ApprovedBy from "../../components/portfolio/portfolio.component";
import ContactForm from "../../components/contact/contact-form.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Flat Commercial Roofing",
      imageUrl: "https://i.imgur.com/nrnVNtm.jpg",
    },
    {
      id: 2,
      title: "Steep Architectural Roofing",
      imageUrl: "https://i.imgur.com/ZptgJFH.jpg",
    },
    {
      id: 3,
      title: "Masonry Restoration",
      imageUrl: "https://i.imgur.com/R0yh6TC.jpg",
    },
    {
      id: 4,
      title: "Slate Roofing",
      imageUrl: "https://i.imgur.com/xRIVxHC.jpg",
    },
    {
      id: 5,
      title: "Waterproofing",
      imageUrl: "https://i.imgur.com/XBkbK5Y.jpg",
    },
    {
      id: 6,
      title: "Emergency Maintenance",
      imageUrl: "https://i.imgur.com/55uJioc.jpg",
    },
  ];
  return (
    <div>
      <Directory categories={categories} />
      <HomePage />
      <ContactForm />
      <ApprovedBy />
      <SafetyComponent />
    </div>
  );
};

export default Home;

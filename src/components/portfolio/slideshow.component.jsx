import React from "react";
import Slideshow from "./approvedby.component"; // Update the path to the Slideshow component
import Testimonials from "./casestudy.component";

const items = [
  {
    imageSrc: "https://i.imgur.com/IrTo414.png",
    title: "Sika",
    description:
      "Sika manufactures thermoplastic (PVC), single ply, commercial roofing and waterproofing membranes. Sika roofing and waterproofing systems, products and services are designed to precisely fit your specific projects needs. With more than 40 years of roofing and waterproofing order propecia online experience in locations all over the world.",
  },
  {
    imageSrc: "https://i.imgur.com/5wvcLJn.png",
    title: "GAF Material Corporation",
    description:
      "Founded in 1886, GAF Materials Corporation has grown to be one of the largest building products companies in North America—as well as the largest commercial and residential roofing manufacturer (approaching $2 billion in sales). Their success has been fueled by delivering on two simple promises.",
  },
  {
    imageSrc: "https://i.imgur.com/G84Jhyw.png",
    title: "Johns Manville",
    description:
      "Johns Manville, a Berkshire Hathaway company, is a leading manufacturer and marketer of premium-quality building insulation, commercial roofing, roof insulation, and specialty products for commercial, industrial, and residential applications. JM’s product offerings include: formaldehyde-free fiber glass building insulation, commercial roofing membranes and roof insulations, filtration media, and mats and reinforcements.",
  },
  {
    imageSrc: "https://i.imgur.com/Gh195SG.jpg",
    title: "Firestone Building Products",
    description:
      "Today Firestone operate 13 manufacturing facilities throughout North America, producing single-ply and asphalt-based roofing membranes, polyiso insulation, and a full line of roofing accessories. From research and development through product manufacturing, they follow stringent quality control guidelines to ensure each component of a Firestone Roofing System meets or exceeds industry standards. And, Firestone’s environmental policy impacts they commitment to quality manufacturing.",
  },
  {
    imageSrc: "https://i.imgur.com/b1nQVuu.png",
    title: "Carlisle SynTec",
    description:
      "Carlisle pioneered the U.S. production of sheet membrane roofing materials and after more than 40 years, is still committed to providing the best long-term single-ply roofing systems, services and warranties in the commercial and industrial marketplace.",
  },
  {
    imageSrc: "https://i.imgur.com/mB1Ma2N.jpg",
    title: "Siplast",
    description:
      "For more than 35 years, Siplast has been a leader in the development and manufacture of the world’s most advanced roofing and waterproofing systems. A member of the Icopal Group, one of the world’s largest commercial roofing manufacturers, Siplast has a history of innovation. In the late 1960s, Siplast Research and Development, working in conjunction with Shell Chemical of Europe, developed SBS (styrene-butadiene-styrene) modified bitumens. We found that by properly modifying asphalt with SBS, we could produce a highly durable elastomeric blend with exceptional elongation/recovery properties over a wide range of temperatures.",
  },
  {
    imageSrc: "https://i.imgur.com/KHCXrvp.gif",
    title: "Tremco",
    description:
      "Since 1928, Tremco Incorporated has been the leading innovator and provider of roofing and weatherproofing solutions. Tremco offers the most comprehensive roofing and weatherproofing products for new construction, roofing maintenance, replacement solutions, restoration and repair services.",
  },
  {
    imageSrc: "https://i.imgur.com/fIJUwH3.png",
    title: "Soprema",
    description:
      "Soprema offers a comprehensive line of roofing, waterproofing, wall protection and civil engineering solutions combining superior products and systems with decades of proven performance.",
  },
  {
    imageSrc: "https://i.imgur.com/1Zy3spM.png",
    title: "Derbigum",
    description:
      "Derbigum is a global manufacturer of high quality modified bitumen roofing systems. We have over 35 years of proven performance in the United States and over 40 years worldwide in all climatic conditions. They produce sustainable roofing systems installed by select, trained roofing contractors that add value to the building owner and provide long term waterproofing service life.        ",
  },
  {
    imageSrc: "https://i.imgur.com/aVkKuJZ.png",
    title: "American Hydrotech        ",
    description:
      "American Hydrotech is recognized asl a leader in the development, production and distribution of premium waterproofing and roofing products. The company was founded in 1977 after acquiring The United States distribution rights for Monolithic Membrane 6125. The membrane has been installed worldwide on over 2 billion square feet of roof decks, plaza decks, vertical foundations, reflecting pools and other structures in over 45 countries.        ",
  },
  {
    imageSrc: "https://i.imgur.com/57riNgx.png",
    title: "Tamko",
    description:
      "Since 1944, Tamko has been one of innovation, quality and long standing customer relationships. Though a lot has changed since they introduced the first shingle 70 years ago to the wide variety of building products.        ",
  },
  {
    imageSrc: "https://i.imgur.com/sFjaWu0.png",
    title: "Fibertite",
    description:
      "Since 1979 Fibertite roofing systems has demonstrated unmatched resistance to puncture, tear, UV rays and chemicals. Product options are numerous, including: Fibertite Hybrid, combining single ply with modified bitumen technology for extreme performance.        ",
  },
  {
    imageSrc: "https://i.imgur.com/thW7hZK.png",
    title: "Certain Teed        ",
    description:
      "Certain Teed has helped shape the building products industry for more than 110 years. Founded in 1904 as General Roofing Manufacturing Company, today Certain Teed is North America’s leading brand of exterior and interior building products, including siding, fence, decking, railing, trim, insulation, gypsum and ceilings.        ",
  },
  {
    imageSrc: "https://i.imgur.com/MiUGFaP.png",
    title: "Neogard",
    description:
      "Neogard products have been specified and used on prestigious projects around the world by leading architects, engineers and consultants for over 50 years. Coating systems protects the building envelope through vehicular and pedestrian traffic coatings.        ",
  },
  {
    imageSrc: "https://i.imgur.com/rMcJ8dh.png",
    title: "DaVinci",
    description:
      "Da Vinci has been the leader in composite roofing for nearly two decades.  Their commitment to creating durable, beautiful roofing tiles is unparalleled.  You won’t find a more realistic or better performing roofing product anywhere.  With DaVinci, you can retain all the character your home was intended to have without worrying about time – consuming and costly maintenance.  Whether you’re replacing an existing roof or looking for the crowning touch on a new construction project, just leave it to Da Vinci.        ",
  },
];
const items2 = [
  {
    Company: "Sandvik Group",
    Description:
      "An engineering group in tooling, materials technology, mining, and construction.",
    Testimonial: '"One roofing company and system stood out from the rest."',
  },
  {
    Company: "Culinary Institute of America (CIA)",
    Description:
      "An American private not-for-profit college specializing in culinary, baking, and pastry arts education. The primary campus is located in Hyde Park, NY.",
    Testimonial:
      '"Both crews were excellent... made sure that there was no scrap of paper or debris left at the end of each work day."',
  },
  {
    Company: "Redeeming Love Christian Center (RLCC)",
    Description:
      "A bible-believing, Jesus-focused, family church with a diverse congregation.",
    Testimonial:
      '"Thank you for the professional and quality service you have provided on repairing the roof of our facility."',
  },
  {
    Company: "C & S Wholesale Grocers",
    Description:
      "The second largest food wholesaler, serving over 5,000 stores from over 70 locations in 12 states.",
    Testimonial: '"The entire project went smoothly and made my job easier."',
  },
  {
    Company: "Mack-Cali Realty Corporation",
    Description:
      "A leading real estate investment trust (REIT) with a portfolio of office and office/flex properties in the Northeast and Mid-Atlantic regions.",
    Testimonial:
      '"Preferred contractors based on the quality of workmanship... exceptional service they provide."',
  },
  {
    Company: "George A. Held, AIA, and Associates",
    Description:
      "A company specializing in Accessibility/ADA, Architecture, Construction Management, Landscape Architecture, and Planning.",
    Testimonial:
      '"The job was meticulously planned and organized from start to completion."',
  },
  {
    Company: "Clarkstown Central School District",
    Description:
      "Approximately 9,200 pupils are enrolled in its schools, including elementary, middle, special education, and senior high schools.",
    Testimonial:
      '"They always respond in a timely manner and the quality of work is excellent."',
  },
  {
    Company: "DorCal Associates",
    Description:
      "Specializing in renovation of commercial buildings and operators of shopping centers.",
    Testimonial:
      '"I highly recommend Hayden for any roofing or maintenance work."',
  },
  {
    Company: "Riverdale Country School",
    Description:
      "An independent day school with a continuous coeducational program located in New York City, NY.",
    Testimonial:
      '"I look forward to working with Hayden for many years to come."',
  },
  {
    Company: "County of Rockland Department of General Services",
    Description: '"We have found Hayden’s service to be excellent."',
  },
  {
    Company: "Habitat for Humanity of Rockland",
    Description:
      "A non-profit organization providing decent, safe, and affordable housing.",
    Testimonial: '"Hayden donates labor for Habitat Home in Hillburn, NY."',
  },
  {
    Company: "Par Pharmaceutical Inc.",
    Description:
      "Develops, manufactures, and distributes pharmaceuticals to improve patient quality of life.",
    Testimonial:
      '"The diligence displayed each and every day by your employee’s is nothing shy of sensational."',
  },
  {
    Company: "St. Thomas Aquinas College",
    Description:
      "An independent 4-year liberal arts & sciences college located in Rockland County, NY.",
    Testimonial:
      '"We would like to thank you for your continued standards of excellence."',
  },
  {
    Company: "Times Herald Record",
    Description:
      "The primary source for news, information, and lifestyles for the Hudson Valley and Catskills in New York.",
    Testimonial:
      '"It is always a pleasure dealing with your company, you are well represented."',
  },
  {
    Company: "Whalen Moving & Storage",
    Description:
      "Offers moving services for business & residential furniture, books, files, etc. along the east coast.",
    Testimonial:
      '"From the presentation of the quote to the final handshake, your staff represented themselves and your company extremely well."',
  },
  {
    Company: "Rockland County YMCA",
    Description:
      "Works to ensure everyone, regardless of age, income, or background, has the opportunity to learn, grow, and thrive.",
    Testimonial:
      '"We would be happy to recommend Hayden Building Maintenance Corp for any masonry and roofing projects based on your integrity and the high quality of your work."',
  },
  {
    Company: "Sika Liquid Plastics",
    Description:
      "Manufactures quality, seamless, cold applied liquid systems and coatings for the waterproofing of flat roofs, associated walls, balconies, and walkways.",
    Testimonial:
      '"I felt it necessary to call your attention to the exemplary work being done by your project team at Vassar College."',
  },
  {
    Company: "Christ Church, Pompton Lakes NJ",
    Description: "A church with a challenging roofing job.",
    Testimonial:
      '"I know it was a difficult job. We are pleased with the results. The whole church is delighted with your work."',
  },
  {
    Company: "Gingerbread House, Long Branch NJ",
    Description:
      "A project that moved seamlessly from initial meeting to completion.",
    Testimonial:
      '"The project moved seamlessly from the initial meeting with the estimator through completion."',
  },
];

const SlideShow = () => {
  return (
    <div>
      <Slideshow items={items} />
      <Testimonials items={items2} />
    </div>
  );
};

export default SlideShow;

import { ItemContainer, ItemImage, ItemTitle, ItemDescription, ParentContainer, Title, Container } from "./portfolio.styles";
import React, {  } from 'react';

const items = [
    {
        imageSrc: 'https://i.imgur.com/LSMQ4g5.png',
        title: 'GAF Material Corporation',
        description: 'Founded in 1886, GAF Materials Corporation has grown to be one of the largest building products companies in North America—as well as the largest commercial and residential roofing manufacturer (approaching $2 billion in sales). Their success has been fueled by delivering on two simple promises.',
      },
      {
        imageSrc: 'https://i.imgur.com/J8bWHLn.png',
        title: 'Johns Manville',
        description: 'Johns Manville, a Berkshire Hathaway company, is a leading manufacturer and marketer of premium-quality building insulation, commercial roofing, roof insulation, and specialty products for commercial, industrial, and residential applications. JM’s product offerings include: formaldehyde-free fiber glass building insulation, commercial roofing membranes and roof insulations, filtration media, and mats and reinforcements.',
      },
      {
        imageSrc: 'https://i.imgur.com/Gh195SG.jpg',
        title: 'Firestone Building Products',
        description: 'Today Firestone operate 13 manufacturing facilities throughout North America, producing single-ply and asphalt-based roofing membranes, polyiso insulation, and a full line of roofing accessories. From research and development through product manufacturing, they follow stringent quality control guidelines to ensure each component of a Firestone Roofing System meets or exceeds industry standards. And, Firestone’s environmental policy impacts they commitment to quality manufacturing.',
      },
      {
        imageSrc: 'https://i.imgur.com/b1nQVuu.png',
        title: 'Carlisle SynTec',
        description: 'Carlisle pioneered the U.S. production of sheet membrane roofing materials and after more than 40 years, is still committed to providing the best long-term single-ply roofing systems, services and warranties in the commercial and industrial marketplace.',
      },
      {
        imageSrc: 'https://i.imgur.com/mB1Ma2N.jpg',
        title: 'Siplast',
        description: 'For more than 35 years, Siplast has been a leader in the development and manufacture of the world’s most advanced roofing and waterproofing systems. A member of the Icopal Group, one of the world’s largest commercial roofing manufacturers, Siplast has a history of innovation. In the late 1960s, Siplast Research and Development, working in conjunction with Shell Chemical of Europe, developed SBS (styrene-butadiene-styrene) modified bitumens. We found that by properly modifying asphalt with SBS, we could produce a highly durable elastomeric blend with exceptional elongation/recovery properties over a wide range of temperatures.',
      },
      {
        imageSrc: 'https://i.imgur.com/KHCXrvp.gif',
        title: 'Tremco',
        description: 'Since 1928, Tremco Incorporated has been the leading innovator and provider of roofing and weatherproofing solutions. Tremco offers the most comprehensive roofing and weatherproofing products for new construction, roofing maintenance, replacement solutions, restoration and repair services.',
      },
      {
        imageSrc: 'https://i.imgur.com/fIJUwH3.png',
        title: 'Soprema',
        description: 'Soprema offers a comprehensive line of roofing, waterproofing, wall protection and civil engineering solutions combining superior products and systems with decades of proven performance.',
      },
      {
        imageSrc: 'https://i.imgur.com/IrTo414.png',
        title: 'Sika',
        description: 'Sika manufactures thermoplastic (PVC), single ply, commercial roofing and waterproofing membranes. Sika roofing and waterproofing systems, products and services are designed to precisely fit your specific projects needs. With more than 40 years of roofing and waterproofing order propecia online experience in locations all over the world.',
      },
      {
        imageSrc: 'https://i.imgur.com/1Zy3spM.png',
        title: 'Derbigum',
        description: 'Derbigum is a global manufacturer of high quality modified bitumen roofing systems. We have over 35 years of proven performance in the United States and over 40 years worldwide in all climatic conditions. They produce sustainable roofing systems installed by select, trained roofing contractors that add value to the building owner and provide long term waterproofing service life.        ',
      },
      {
        imageSrc: 'https://i.imgur.com/VB5rN5v.png',
        title: 'American Hydrotech        ',
        description: 'American Hydrotech is recognized asl a leader in the development, production and distribution of premium waterproofing and roofing products. The company was founded in 1977 after acquiring The United States distribution rights for Monolithic Membrane 6125. The membrane has been installed worldwide on over 2 billion square feet of roof decks, plaza decks, vertical foundations, reflecting pools and other structures in over 45 countries.        ',
      },
      {
        imageSrc: 'https://i.imgur.com/57riNgx.png',
        title: 'Tamko',
        description: 'Since 1944, Tamko has been one of innovation, quality and long standing customer relationships. Though a lot has changed since they introduced the first shingle 70 years ago to the wide variety of building products.        ',
      },
      {
        imageSrc: 'https://i.imgur.com/jtPsMYV.jpg',
        title: 'Fibertite',
        description: 'Since 1979 Fibertite roofing systems has demonstrated unmatched resistance to puncture, tear, UV rays and chemicals. Product options are numerous, including: Fibertite Hybrid, combining single ply with modified bitumen technology for extreme performance.        ',
      },
      {
        imageSrc: 'https://i.imgur.com/thW7hZK.png',
        title: 'Certain Teed        ',
        description: 'Certain Teed has helped shape the building products industry for more than 110 years. Founded in 1904 as General Roofing Manufacturing Company, today Certain Teed is North America’s leading brand of exterior and interior building products, including siding, fence, decking, railing, trim, insulation, gypsum and ceilings.        ',
      },
      {
        imageSrc: 'https://i.imgur.com/ATzNDBe.gif',
        title: 'Neogard',
        description: 'Neogard products have been specified and used on prestigious projects around the world by leading architects, engineers and consultants for over 50 years. Coating systems protects the building envelope through vehicular and pedestrian traffic coatings.        ',
      },
      {
        imageSrc: 'https://i.imgur.com/Fg8I8AJ.jpg',
        title: 'DaVinci',
        description: 'Da Vinci has been the leader in composite roofing for nearly two decades.  Their commitment to creating durable, beautiful roofing tiles is unparalleled.  You won’t find a more realistic or better performing roofing product anywhere.  With DaVinci, you can retain all the character your home was intended to have without worrying about time – consuming and costly maintenance.  Whether you’re replacing an existing roof or looking for the crowning touch on a new construction project, just leave it to Da Vinci.        ',
      },
  ];
  
  const ApprovedBy = () => {
    return (
        <Container>
          <Title>Approved By</Title>
          <ParentContainer>
            {items.map((item, index) => (
              <ItemContainer key={index}>
                <ItemImage src={item.imageSrc} alt={item.title} />
                <ItemTitle>{item.title}</ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </ItemContainer>
            ))}
          </ParentContainer>
        </Container>
      );
    };
    
    export default ApprovedBy;
    
    
    
    
    
    
  
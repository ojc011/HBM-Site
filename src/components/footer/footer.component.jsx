import React from "react";
import {
  FooterContainer,
  ContactInfo,
  ContactItem,
  ContactTitle,
  ContactDetails,
  FooterClickableLink,
  FooterClickablePhoneNumber,
} from "./footer.styles.jsx";

const Footer = () => {
  return (
    <FooterContainer>
      <ContactInfo>
        <ContactItem>
          <ContactTitle>HEADQUARTERS</ContactTitle>
          <ContactDetails>169 Western Highway</ContactDetails>
          <ContactDetails>West Nyack, NY 10994</ContactDetails>
          <ContactDetails>
            Phone:{" "}
            <FooterClickablePhoneNumber href="tel:800-807-0878">
              800-807-0878
            </FooterClickablePhoneNumber>
          </ContactDetails>
          <ContactDetails>Fax: 845-353-3451</ContactDetails>
          <ContactDetails>
            Email:{" "}
            <FooterClickableLink href="mailto:info@roofline.com">
              info@roofline.com
            </FooterClickableLink>
          </ContactDetails>
        </ContactItem>
      </ContactInfo>
    </FooterContainer>
  );
};

export default Footer;

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
        <ContactItem>
          <ContactTitle>LOUISIANA OFFICE</ContactTitle>
          <ContactDetails>5600 Jefferson Highway</ContactDetails>
          <ContactDetails>W4 Suite 122</ContactDetails>
          <ContactDetails>Harahan, LA 70123</ContactDetails>
          <ContactDetails>
            Phone:{" "}
            <FooterClickablePhoneNumber href="tel:504-736-0800">
              504-736-0800
            </FooterClickablePhoneNumber>
          </ContactDetails>
          <ContactDetails>
            Fax:{" "}
            <FooterClickablePhoneNumber href="tel:504-734-2640">
              504-734-2640
            </FooterClickablePhoneNumber>
          </ContactDetails>
        </ContactItem>
        <ContactItem>
          <ContactTitle>FLORIDA OFFICE</ContactTitle>
          <ContactDetails>3259 SW 14th Place</ContactDetails>
          <ContactDetails>Boynton Beach, FL 33426</ContactDetails>
          <ContactDetails>
            Phone:{" "}
            <FooterClickablePhoneNumber href="tel:561-423-1552">
              561-423-1552
            </FooterClickablePhoneNumber>
          </ContactDetails>
        </ContactItem>
      </ContactInfo>
    </FooterContainer>
  );
};

export default Footer;

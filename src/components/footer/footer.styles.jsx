import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;
  border-top: 5px solid #ca2236;
  border-bottom: 5px solid #222a57;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  align-items: center; /* Center the items horizontally */
  justify-content: center; /* Center the items vertically */

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const ContactItem = styled.div`
  padding: 10px;
  align-items: center;
  text-align: center;
  display: flex; /* Added flex display */
  flex-direction: column; /* Added flex-direction column */
  justify-content: center; /* Center the content vertically */

  @media (min-width: 768px) {
    flex-basis: calc(33.33% - 20px);
  }
`;

export const ContactTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const ContactDetails = styled.p`
  font-size: 14px;
  margin: 5px 0;
`;

export const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const FooterClickableLink = styled(FooterLink)`
  cursor: pointer;
`;

export const FooterClickablePhoneNumber = styled(FooterClickableLink)`
  &:hover {
    text-decoration: none;
  }
`;

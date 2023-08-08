import React from 'react';
import { Container, Title, Subtitle, Section, PolicyTitle, PurposeTitle, ListItem } from './safety.styles';

const SafetyComponent = () => {
    return (
        <Container>
          <Title>Hazcom Policy and Safety</Title>
          <Subtitle>Home / Hazcom Policy and Safety / Policy</Subtitle>
    
          <Section>
            <PolicyTitle>Policy</PolicyTitle>
            <p>
              Employees are our organization’s most important assets and their safety and health are our greatest responsibility. It is the policy of this organization that every employee is entitled to a safe and healthful place to work.
            </p>
            <p>
              When employees enter our employ, they have a right to know what hazardous chemicals they work with or could be exposed to, and what they can do to avoid injury or illness when working with these chemicals. We provide information and training in order to reduce the possibility of accidental exposure and to comply with the OSHA Hazard Communication Standard.
            </p>
          </Section>
    
          <Section>
            <PurposeTitle>Purpose</PurposeTitle>
            <p>
              The Occupational Safety and Health Administration Hazard Communication Standard (29 CFR 1926.59) requires that all employers develop and implement a “written hazard communication program”. Our program, as put together in our HazCom plan document, is designed to implement the OSHA Hazard Communication Standard requirements in this organization.
            </p>
            <p>
              OSHA’s primary intent in issuing this standard is to ensure that employees will receive as much information as needed concerning the hazards in their workplace. In our organization, this information will be presented to our employees prior to starting work, when changing jobs which change the hazardous substances to which they are exposed, or when new hazards are introduced into their work area.
            </p>
            <p>
              The purpose of this program is to ensure that:
            </p>
            <ul>
              <ListItem>All employees are aware of our Hazard Communication Program and that it is available to all employees, their designated representatives, and OSHA.</ListItem>
              <ListItem>Material Safety Data Sheets (MSDS) are available for all hazardous chemicals. All hazardous chemicals used in the workplace are labeled, and that a list of chemicals is maintained.</ListItem>
              <ListItem>Hayden Building maintenance Corp.’s HAZCOM program has been established through the National Roofing Contractors Association (NRCA) pilot program. Michael McWeeney functions as our HAZCOM Administrator.</ListItem>
            </ul>
          </Section>
    
          <Section>
            <PurposeTitle>OSHA Hazard Communication Standards</PurposeTitle>
            <p>
              Our organization complies with the OSHA Hazard Communication Standards to ensure a safe working environment for all employees. This includes providing necessary training and information about hazardous substances, maintaining Material Safety Data Sheets (MSDS), and labeling all hazardous chemicals used in the workplace.
            </p>
          </Section>
        </Container>
      );
    };

export default SafetyComponent;

// ContactForm.jsx
import React, { useState } from "react";
import Autocomplete from "react-google-autocomplete";
import {
  Title,
  SubmitButton,
  OtherTextInput,
  Select,
  Label,
  FormGroup,
  TextArea,
  Input,
  Form,
  ContactContainer,
  PageContainer,
  VideoBackground,
} from "./contact-form.styles";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "", // Added companyName field
    address: "",
    typeOfService: "",
    comment: "",
    howDidYouHear: "Referal", // Default option
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, you can use formData state to access the form data
    console.log(formData);
  };

  return (
    <PageContainer id="contact">
      <Title>Contact Form</Title>
      <ContactContainer>
        <VideoBackground autoPlay muted loop>
          <source src="http://localhost:3000/dronevid.mp4" type="video/mp4" />
          {/* Add more <source> elements for different video formats */}
        </VideoBackground>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Name:</Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Email:</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Phone Number:</Label>
            <Input
              type="tel"
              name="phoneNumber"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Company Name:</Label>
            <Input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </FormGroup>
          <Autocomplete
            apiKey={process.env.REACT_APP_GOOGLE_API_KEY} // Network setting prohibiting me from running "npm i dotenv"
            onPlaceSelected={(place) => console.log(place)}
            style={{
              padding: "10px",
              borderRadius: "4px",
              width: "100%",
              fontSize: "16px",
              color: "black",
              border: "1px solid #ccc",
            }}
          />
          <FormGroup>
            <Label>Type of Service Required (Optional):</Label>
            <TextArea
              name="typeOfService"
              value={formData.typeOfService}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Comment (Optional):</Label>
            <TextArea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>How did you hear about us?</Label>
            <Select
              name="howDidYouHear"
              value={formData.howDidYouHear}
              onChange={handleChange}
            >
              <option value="Referal">Referal</option>
              <option value="Online search">Online search</option>
              <option value="Social Media">Social Media</option>
              <option value="Advertisement">Advertisement</option>
              <option value="Other">Other</option>
            </Select>
            {formData.howDidYouHear === "Other" && (
              <OtherTextInput
                type="text"
                name="otherText"
                value={formData.otherText}
                onChange={handleChange}
              />
            )}
          </FormGroup>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </ContactContainer>
    </PageContainer>
  );
};

export default ContactForm;

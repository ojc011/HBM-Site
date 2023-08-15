import React, { useState } from "react";
import axios from "axios";
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
  SubmittedFormContainer,
} from "./contact-form.styles";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    userEmail: "",
    phoneNumber: "",
    companyName: "",
    address: "",
    typeOfService: "",
    comment: "",
    howDidYouHear: "Referal",
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/send-email",
        { ...formData, destinationEmail: process.env.EMAIL_ACC }
      );
      console.log(response.data.message);
      setSubmissionStatus("success"); // Set submission status to "success"
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmissionStatus("error"); // Set submission status to "error"
    }
    console.log(formData);
  };

  return (
    <PageContainer id="contact">
      <Title>Contact Form</Title>
      <ContactContainer>
        <VideoBackground autoPlay muted loop>
          <source src="assets/dronevid.mp4" type="video/mp4" />
          {/* Add more <source> elements for different video formats */}
        </VideoBackground>
        <div style={{ position: "relative" }}>
          {submissionStatus === "success" ? (
            <SubmittedFormContainer>
              <p>Form Submitted Successfully</p>
              {/* You can include additional content here */}
            </SubmittedFormContainer>
          ) : (
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
                  name="userEmail" // Make sure this matches the server-side field name
                  value={formData.userEmail}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Phone Number:</Label>
                <Input
                  type="tel"
                  name="phoneNumber"
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
              <FormGroup>
                <Label>Address (Street, City, State + Zip):</Label>
                <Input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </FormGroup>
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
          )}
        </div>
      </ContactContainer>
    </PageContainer>
  );
};

export default ContactForm;

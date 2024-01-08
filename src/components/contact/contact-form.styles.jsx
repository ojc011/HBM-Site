import styled from "styled-components";

const largeDeviceQuery = "@media (min-width: 992px)";
const mediumDeviceQuery = "@media (min-width: 768px)";
const smallDeviceQuery = "@media (max-width: 767px)";

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  padding-right: auto;
  width: 30%;
  white-space: nowrap; /* Prevent text from breaking into multiple lines */
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 7.5px;
  overflow: hidden; /* Add this line to hide any overflow content */

  ${mediumDeviceQuery} {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.5;
      z-index: -1;
    }
  }
`;

export const ContactContainer = styled.div`
  background-color: rgba(34, 42, 87, 0.7);
  padding: 10px; /* Reduced padding */
  width: 100%;

  ${mediumDeviceQuery} {
    width: 50%; /* Reduced width for medium devices */
  }

  ${largeDeviceQuery} {
    width: 30%; /* Reduced width for large devices */
  }

  ${smallDeviceQuery} {
    width: 100%;
  }
`;

export const VideoBackground = styled.video`
  position: fixed; /* Change position to fixed */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;

  /* Disable fullscreen on mobile */
  @media (max-width: 767px) {
    pointer-events: none;
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

export const Label = styled.label`
  font-weight: bold;
  color: #ffff;
`;

export const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  margin-top: 5px;
  width: 100%;
  height: 40px;
`;

export const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  margin-top: 5px;
  width: 100%;
  height: 100px;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  margin-top: 5px;
  width: 100%;
  height: 40px;
`;

export const OtherTextInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  margin-top: 5px;
  width: 100%;
  height: 40px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 40px;
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmittedFormContainer = styled.div`
  color: #ffff;
  text-align: center;
  width: 100%;
  position: relative; /* Add position property */
  z-index: 1; /* Increase z-index to make it appear above the video background */
`;

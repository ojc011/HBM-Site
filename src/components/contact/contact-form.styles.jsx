import styled from "styled-components";

const largeDeviceQuery = "@media (min-width: 992px)";
const mediumDeviceQuery = "@media (min-width: 768px)";
const smallDeviceQuery = "@media (max-width: 767px)";

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 5px;
  border-radius: 5px;
  width: 33%;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 7.5px;
  border-radius: 5px;

  @media (min-width: 768px) {
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
  }
`;

export const ContactContainer = styled.div`
  background-color: rgba(34, 42, 87, 0.7);
  padding: 20px;
  border-radius: 8px;
  width: 100%; /* Initially take 100% width on all devices */

  ${mediumDeviceQuery} {
    width: 66%; /* Take up 66% width on medium devices */
  }

  ${largeDeviceQuery} {
    width: 33%; /* Take up 33% width on large devices */
  }

  ${smallDeviceQuery} {
    width: 100%; /* Take up 100% width on small or mobile devices */
  }
`;

export const VideoBackground = styled.video`
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

export const Form = styled.form`
  display: grid;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-weight: bold;
  color: #ffff;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
  width: 100%;
  height: 40px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
  width: 100%;
  height: 120px;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
  width: 100%;
  height: 40px;
`;

export const OtherTextInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
  width: 100%;
  height: 40px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
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
  ${mediumDeviceQuery} {
    width: 66%; /* Take up 66% width on medium devices */
  }

  ${largeDeviceQuery} {
    width: 33%; /* Take up 33% width on large devices */
  }

  ${smallDeviceQuery} {
    width: 100%; /* Take up 100% width on small or mobile devices */
  }
`;

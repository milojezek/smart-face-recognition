import React from "react";
import styled from "styled-components";

const FormText = styled.p`
  font-size: 1.5rem;
`
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`

const FormContent = styled.div`
  display: flex;
  justify-content: center;
  width: 700px;
  padding: 2rem;
  border-radius: .25rem;
  box-shadow: 0px 0px 8px 2px rgba( 0, 0, 0, 0.2 );
  background-color: darkgoldenrod;
`

const InputField = styled.input`
  width: 70%;
  margin-right: auto;
  margin-left: auto;
  font-size: 1.25rem;
  padding: .5rem;
  border-radius: .25rem;
`

const DetectButton = styled.button`
  display: inline-block;
  width: 30%;
  color: white;
  background-color: purple;
  font-size: 1.25rem;
  text-decoration: none;
  padding: .5rem 1rem .5rem;
  border-radius: .25rem;
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`

const ImageLinkForm = () => {
  return (
    <div>
      <FormText>
        {"This Magic Brain will detect faces in your pictures. Give it a try..."}
      </FormText>
      <FormContainer>
        <FormContent>
          <InputField type="text" />
          <DetectButton>Detect</DetectButton>
        </FormContent>
      </FormContainer>
    </div>
  );
}

export default ImageLinkForm;
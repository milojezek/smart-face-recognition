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
  background:
    radial-gradient(black 3px, transparent 4px),
    radial-gradient(black 3px, transparent 4px),
    linear-gradient(#fff 4px, transparent 0),
    linear-gradient(45deg, transparent 74px, transparent 75px, #a4a4a4 75px, #a4a4a4 76px, transparent 77px, transparent 109px),
    linear-gradient(-45deg, transparent 75px, transparent 76px, #a4a4a4 76px, #a4a4a4 77px, transparent 78px, transparent 109px),
    #fff;
    background-size: 109px 109px, 109px 109px,100% 6px, 109px 109px, 109px 109px;
    background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
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
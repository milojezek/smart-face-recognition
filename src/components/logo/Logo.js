import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import brain from "./brain-icon.png";

const Container = styled.div`
  margin: 2rem;
  margin-top: 0;
`

const TiltContent = styled.div`
  height: 150px;
  width: 150px;
  background: linear-gradient(89deg, #FF5EDF 0%, #04C8DE 100%);
  border-radius: .25rem;
  box-shadow:0px 0px 8px 2px rgba( 0, 0, 0, 0.2 );
  display: flex;
  justify-content: center;
`

const LogoImage = styled.img`
  padding: 1rem;
`

const Logo = () => {
  return (
    <Container>
      <Tilt tiltReverse="true" tiltMaxAngleX={15} tiltMaxAngleY={5}>
        <TiltContent>
          <LogoImage alt="logo" src={brain} />
        </TiltContent>
      </Tilt>
    </Container>
  );
}

export default Logo;
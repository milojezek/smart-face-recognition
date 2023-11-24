import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
`

const NavText = styled.p`
  font-size: 1.5rem;
  color: black;
  text-decoration:underline;
  padding: 1rem;
  transition:color .15s ease-in;
  opacity: 1;
  transition:opacity .15s ease-in;
  cursor: pointer;
`

const Navigation = () => {
  return (
    <StyledNav>
      <NavText>Sign Out</NavText>
    </StyledNav>
  );
}

export default Navigation;
import React from "react";
import styled from "styled-components";


const IntroText = styled.div`
  color: white;
  font-size: 1.5rem;
`

const RankResult = styled.div`
  color: white;
  font-size: 3rem;
`

const Rank = () => {
  return (
    <div>
      <IntroText>
        {"Milek, your current rank is..."}
      </IntroText>
      <RankResult>
        {"#5"}
      </RankResult>
    </div>
  );
}

export default Rank;
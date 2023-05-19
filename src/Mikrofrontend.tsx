import React from "react";
import App from "./App";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  @media (min-width: 648px) {
    max-width: 444px;
  }
`;

const Mikrofrontend = () => {
  return (
    <Wrapper>
      <App />
    </Wrapper>
  );
};

export default Mikrofrontend;

import React from "react";
import App from "./App";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 444px;
  margin: 15rem auto;
`;

const Mikrofrontend = () => {
  return (
    <Wrapper>
      <App />
    </Wrapper>
  );
};

export default Mikrofrontend;

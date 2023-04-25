import React from "react";
import App from "./App";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: auto;
  max-width: 444px;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
`;

const Mikrofrontend = () => {
  return (
    <Wrapper>
      <App />
    </Wrapper>
  );
};

export default Mikrofrontend;

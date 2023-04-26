import React from "react";
import App from "./App";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 444px;
`;

const Mikrofrontend = () => {
  return (
    <Wrapper>
      <App />
    </Wrapper>
  );
};

export default Mikrofrontend;

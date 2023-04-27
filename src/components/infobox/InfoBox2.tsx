import styled from "styled-components";
import React, { ReactNode } from "react";

interface StylingProps {
  background: string;
}

export const StyledBoks = styled.div<StylingProps>`
  display: flex;
  padding: 16px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border-radius: 4px;
  background: ${(props) => props.background};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
  gap: 0.5rem;
`;

interface Props {
  background: string;
  children: ReactNode;
}

export const InfoBox2 = ({ background, children }: Props) => {
  return (
    <StyledBoks background={background}>
      <Content>{children}</Content>
    </StyledBoks>
  );
};

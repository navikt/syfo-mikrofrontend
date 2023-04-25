import styled from "styled-components";
import { BodyShort } from "@navikt/ds-react";
import React, { ReactElement } from "react";

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
  flex-wrap: nowrap;
  gap: 0.5rem;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
`;

interface Props {
  icon: ReactElement;
  text: string;
  background: string;
}

export const InfoBox = ({ icon, text, background }: Props) => {
  return (
    <StyledBoks background={background}>
      <Content>
        <IconWrapper>{icon}</IconWrapper>
        <BodyShort size={"small"}>{text}</BodyShort>
      </Content>
    </StyledBoks>
  );
};

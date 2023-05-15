import { BodyShort, LinkPanel } from "@navikt/ds-react";
import React from "react";
import styled from "styled-components";

export const StyledLinkPanel = styled(LinkPanel)`
  background: var(--a-gray-200) !important;
`;

interface Props {
  text: string;
  href: string;
  onClick(): void;
}

export const LinkBox = ({ text, href, onClick }: Props) => {
  return (
    <StyledLinkPanel href={href} onClick={onClick} border={false}>
      <BodyShort size={"small"}>{text}</BodyShort>
    </StyledLinkPanel>
  );
};

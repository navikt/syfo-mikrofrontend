import React, { ReactNode } from "react";
import styled from "styled-components";
import { LinkPanel } from "@navikt/ds-react";

const StyledLinkPanel = styled(LinkPanel)`
  .navds-link-panel__content {
    width: 100% !important;
  }
  background-color: #f7f7f7 !important;
  border-radius: 0.5rem !important;
`;

const LinkPanelContent = styled.div`
  display: flex;
  flex-direction: row;
`;

interface Props {
  href: string;
  children: ReactNode;
  onClick(): void;
}
export const BaseLinkPanel = ({ href, onClick, children }: Props) => {
  return (
    <StyledLinkPanel href={href} border={false} onClick={onClick}>
      <LinkPanelContent>{children}</LinkPanelContent>
    </StyledLinkPanel>
  );
};

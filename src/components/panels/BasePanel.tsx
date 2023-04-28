import { dialogmoteUrl } from "../../api/urls";
import React, { ReactNode } from "react";
import styled from "styled-components";
import { LinkPanel } from "@navikt/ds-react";

const StyledLinkPanel = styled(LinkPanel)`
  .navds-link-panel__content {
    width: 100%; !important;
  }
  background-color: #f7f7f7; !important;
  border-radius: 0.5rem; !important;
`;

const LinkPanelContent = styled.div`
  display: flex;
  flex-direction: row;
`;

interface Props {
  children: ReactNode;
}
export const BasePanel = ({ children }: Props) => {
  return (
    <StyledLinkPanel href={`${dialogmoteUrl}/moteinnkalling`} border={false}>
      <LinkPanelContent>{children}</LinkPanelContent>
    </StyledLinkPanel>
  );
};

import { dialogmoteUrl } from "../../api/urls";
import React, { ReactNode } from "react";
import styled from "styled-components";
import { LinkPanel } from "@navikt/ds-react";
import { logEvent } from "../../amplitude/amplitude";
import { BrevType } from "../../types/client/brev";

const StyledLinkPanel = styled(LinkPanel)`
  .navds-link-panel__content {
    width: 100%;
  }
  background-color: #f7f7f7;
  border-radius: 0.5rem;
`;

const LinkPanelContent = styled.div`
  display: flex;
  flex-direction: row;
`;

type Svar = "KOMMER" | "ONSKER_AVLYSE" | "ONSKER_ENDRING" | "IKKE_SVART";

interface Props {
  children: ReactNode;
  svar: Svar;
  brevType: BrevType;
}
export const BasePanel = ({ children, svar, brevType }: Props) => {
  return (
    <StyledLinkPanel
      href={`${dialogmoteUrl}/moteinnkalling`}
      border={false}
      onClick={() => logEvent("Navigerer til møtebehov", { svar: svar, brevType: brevType })}
    >
      <LinkPanelContent>{children}</LinkPanelContent>
    </StyledLinkPanel>
  );
};

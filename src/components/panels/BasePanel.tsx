import { dialogmoteUrl } from "../../api/urls";
import React, { ReactNode } from "react";
import styled from "styled-components";
import { LinkPanel } from "@navikt/ds-react";
import { BrevType } from "../../types/client/brev";
import { logEvent } from "../../amplitude/amplitude";

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

type Svar = "KOMMER" | "ONSKER_AVLYSE" | "ONSKER_ENDRING" | "IKKE_SVART";

interface Props {
  svar: Svar;
  brevType: BrevType;
  children: ReactNode;
}
export const BasePanel = ({ svar, brevType, children }: Props) => {
  return (
    <StyledLinkPanel
      href={`${dialogmoteUrl}/moteinnkalling`}
      border={false}
      onClick={() => logEvent("Navigerer til møteinnkalling", { svar: svar, brevType: brevType })}
    >
      <LinkPanelContent>{children}</LinkPanelContent>
    </StyledLinkPanel>
  );
};

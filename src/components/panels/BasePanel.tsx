import React, { ReactNode } from "react";
import styled from "styled-components";
import { Panel } from "@navikt/ds-react";

const StyledPanel = styled(Panel)`
  width: 100% !important;
  background-color: #f7f7f7 !important;
  border-radius: 0.5rem !important;
`;

const PanelContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: var(--a-spacing-4);

  @media (min-width: 648px) {
    flex-direction: row;
    flex-wrap: nowrap;
    gap: normal;
  }
`;

interface Props {
  children: ReactNode;
}
export const BasePanel = ({ children }: Props) => {
  return (
    <StyledPanel border={false}>
      <PanelContent>{children}</PanelContent>
    </StyledPanel>
  );
};

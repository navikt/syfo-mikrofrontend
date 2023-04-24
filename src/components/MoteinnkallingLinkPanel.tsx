import { Heading, LinkPanel } from "@navikt/ds-react";
import { dialogmoteUrl } from "../api/urls";
import { ReactNode } from "react";
import styled from "styled-components";

const StyledLinkPanel = styled(LinkPanel)`
  background-color: #f7f7f7;
  border: none;
  border-radius: 0.5rem;
`;

const LinkPanelContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

interface Props {
  header: string;
  children: ReactNode;
}
export const MoteinnkallingLinkPanel = ({ header, children }: Props) => {
  return (
    <StyledLinkPanel href={`${dialogmoteUrl}/moteinnkalling`} border>
      <LinkPanelContent>
        <Heading size={"small"} level={"2"}>
          {header}
        </Heading>
        {children}
      </LinkPanelContent>
    </StyledLinkPanel>
  );
};

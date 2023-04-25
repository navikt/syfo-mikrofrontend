import { SvarTypeDTO } from "../schema/brevSchema";
import styled from "styled-components";
import { BodyShort, Heading, LinkPanel } from "@navikt/ds-react";
import { dialogmoteUrl } from "../api/urls";
import React from "react";
import { AttendingDialogmote } from "./deltakelseBoks/AttendingDialogmote";
import { StedBoks } from "./stedBoks/StedBoks";
import { Column } from "./Column";

const StyledLinkPanel = styled(LinkPanel)`
  .navds-link-panel__content {
    width: 100%;
  }
  background-color: #f7f7f7;
  border: none;
  border-radius: 0.5rem;
`;

const LinkPanelContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const BottomAlignedBodyShort = styled(BodyShort)`
  margin-top: auto;
`;

interface Props {
  header: string;
  date: string;
  time: string;
  place: string;
  attending: SvarTypeDTO | null;
}

export const DialogmotePanel = ({ header, date, time, place, attending }: Props) => {
  return (
    <StyledLinkPanel href={`${dialogmoteUrl}/moteinnkalling`} border>
      <LinkPanelContent>
        <Column>
          <Heading size={"small"} level={"2"}>
            {header}
          </Heading>
          <Heading size={"large"} level={"2"}>
            {date}
          </Heading>
          <BottomAlignedBodyShort>Klokka: {time}</BottomAlignedBodyShort>
        </Column>

        <Column gap={"0.5rem"}>
          <AttendingDialogmote attending={attending} />
          <StedBoks sted={place} />
        </Column>
      </LinkPanelContent>
    </StyledLinkPanel>
  );
};

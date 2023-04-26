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

const HeadingLighter = styled(Heading)`
  font-weight: var(--a-font-weight-regular);
`;

const HeadingSpacing = styled(Heading)`
  padding-right: 1rem;
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
          <HeadingSpacing size={"small"} level={"2"}>
            {header}
          </HeadingSpacing>
          <HeadingLighter size={"large"} level={"2"}>
            {date}
          </HeadingLighter>
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

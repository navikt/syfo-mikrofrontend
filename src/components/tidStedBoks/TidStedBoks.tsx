import { CalendarIcon, PinIcon } from "@navikt/aksel-icons";
import React from "react";
import { InfoBox2 } from "../infobox/InfoBox2";
import { BodyShort } from "@navikt/ds-react";
import { IconWrapper } from "../icon/IconWrapper";
import { getLongDateFormat } from "../../utils/dateUtils";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

interface Props {
  sted: string;
  tid: string;
}

export const TidStedBoks = ({ sted, tid }: Props) => {
  return (
    <InfoBox2 background={"var(--a-gray-200)"}>
      <Row>
        <IconWrapper>
          <CalendarIcon title="a11y-title" fontSize="1.5rem" />
        </IconWrapper>
        <BodyShort size={"small"}>{getLongDateFormat(tid)}</BodyShort>
      </Row>
      <Row>
        <IconWrapper>
          <PinIcon title="a11y-title" fontSize="1.5rem" />
        </IconWrapper>
        <BodyShort size={"small"}>{sted}</BodyShort>
      </Row>
    </InfoBox2>
  );
};

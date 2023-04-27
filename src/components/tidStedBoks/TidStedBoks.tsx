import { CalendarIcon, PinIcon } from "@navikt/aksel-icons";
import React from "react";
import { BodyShort } from "@navikt/ds-react";
import { IconWrapper } from "../icon/IconWrapper";
import { getLongDateFormat } from "../../utils/dateUtils";
import { BaseBox } from "../infobox/BaseBox";
import { Row } from "../row/Row";

interface Props {
  sted: string;
  tid: string;
}

export const TidStedBoks = ({ sted, tid }: Props) => {
  return (
    <BaseBox background={"var(--a-gray-200)"}>
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
    </BaseBox>
  );
};

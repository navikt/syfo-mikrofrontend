import { CalendarIcon } from "@navikt/aksel-icons";
import React from "react";
import { BodyShort } from "@navikt/ds-react";
import { IconWrapper } from "../icon/IconWrapper";
import { getLongDateFormat } from "../../utils/dateUtils";
import { BaseBox } from "../infobox/BaseBox";
import { Row } from "../row/Row";

interface Props {
  tid: string;
}

export const TidBoks = ({ tid }: Props) => {
  return (
    <BaseBox background={"var(--a-gray-200)"}>
      <Row>
        <IconWrapper>
          <CalendarIcon title="a11y-title" fontSize="1.5rem" />
        </IconWrapper>
        <BodyShort size={"small"}>{getLongDateFormat(tid)}</BodyShort>
      </Row>
    </BaseBox>
  );
};

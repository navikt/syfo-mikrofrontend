import { BodyShort } from "@navikt/ds-react";
import React, { ReactElement } from "react";
import { BaseBox } from "./BaseBox";
import { IconWrapper } from "../icon/IconWrapper";
import { Row } from "../row/Row";

interface Props {
  icon: ReactElement;
  text: string;
  background: string;
}

export const InfoBox = ({ icon, text, background }: Props) => {
  return (
    <BaseBox background={background}>
      <Row>
        <IconWrapper>{icon}</IconWrapper>
        <BodyShort size={"small"}>{text}</BodyShort>
      </Row>
    </BaseBox>
  );
};

import { Column } from "./Column";
import React from "react";
import { HeadingSpacing } from "../typography/typography";
import { BodyLong } from "@navikt/ds-react";

interface Props {
  text: string;
}

export const HeadingAndTextColumn = ({ text }: Props) => {
  return (
    <Column>
      <HeadingSpacing size={"small"} level={"2"}>
        Dialogmøte
      </HeadingSpacing>
      <BodyLong>{text}</BodyLong>
    </Column>
  );
};

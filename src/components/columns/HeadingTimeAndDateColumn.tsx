import { Column } from "./Column";
import React from "react";
import { BottomAlignedBodyShort, HeadingLighter, HeadingSpacing } from "../typography/typography";
import { getFormattedMonth, getFormattedTime } from "../../utils/dateUtils";

interface Props {
  date: string;
}

export const HeadingTimeAndDateColumn = ({ date }: Props) => {
  return (
    <Column>
      <HeadingSpacing size={"small"} level={"2"}>
        Dialogmøte
      </HeadingSpacing>
      <HeadingLighter size={"large"} level={"2"}>
        {getFormattedMonth(date)}
      </HeadingLighter>
      <BottomAlignedBodyShort>Klokka: {getFormattedTime(date)}</BottomAlignedBodyShort>
    </Column>
  );
};

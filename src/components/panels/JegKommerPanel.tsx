import { BasePanel } from "./BasePanel";
import { Column } from "../columns/Column";
import { StedBoks } from "../stedBoks/StedBoks";
import React from "react";
import { HeadingTimeAndDateColumn } from "../columns/HeadingTimeAndDateColumn";
import { JegDeltarBoks } from "../deltakelseBoks/JegDeltarBoks";

interface Props {
  date: string;
  place: string;
}

export const JegKommerPanel = ({ date, place }: Props) => {
  return (
    <BasePanel>
      <HeadingTimeAndDateColumn date={date} />

      <Column gap={"0.5rem"}>
        <JegDeltarBoks />
        <StedBoks sted={place} />
      </Column>
    </BasePanel>
  );
};

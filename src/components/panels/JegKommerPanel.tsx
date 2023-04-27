import { BasePanel } from "./BasePanel";
import { Column } from "../columns/Column";
import React from "react";
import { JegDeltarBoks } from "../deltakelseBoks/JegDeltarBoks";
import { TidStedBoks } from "../tidStedBoks/TidStedBoks";
import { HeadingAndTextColumn } from "../columns/HeadingAndTextColumn";

interface Props {
  infoText: string;
  date: string;
  place: string;
}

export const JegKommerPanel = ({ infoText, date, place }: Props) => {
  return (
    <BasePanel>
      <HeadingAndTextColumn text={infoText} />

      <Column gap={"0.5rem"}>
        <JegDeltarBoks />
        <TidStedBoks sted={place} tid={date} />
      </Column>
    </BasePanel>
  );
};

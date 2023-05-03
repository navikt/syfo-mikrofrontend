import { BasePanel } from "./BasePanel";
import { Column } from "../columns/Column";
import React from "react";
import { JegDeltarBoks } from "../deltakelseBoks/JegDeltarBoks";
import { TidBoks } from "../tidBoks/TidBoks";
import { LeftColumn } from "../columns/LeftColumn";

interface Props {
  date: string;
}

export const JegKommerPanel = ({ date }: Props) => {
  return (
    <BasePanel>
      <LeftColumn text={"Innkalling til dialogmøte"} />

      <Column gap={"0.5rem"}>
        <JegDeltarBoks />
        <TidBoks tid={date} />
      </Column>
    </BasePanel>
  );
};

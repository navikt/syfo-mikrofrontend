import { BasePanel } from "./BasePanel";
import { Column } from "../columns/Column";
import React from "react";
import { JegDeltarBoks } from "../deltakelseBoks/JegDeltarBoks";
import { TidBoks } from "../tidBoks/TidBoks";
import { LeftColumn } from "../columns/LeftColumn";
import { BrevType } from "../../types/client/brev";

interface Props {
  date: string;
  brevType: BrevType;
}

export const JegKommerPanel = ({ date, brevType }: Props) => {
  return (
    <BasePanel svar={"KOMMER"} brevType={brevType}>
      <LeftColumn text={"Innkalling til dialogmøte"} />

      <Column gap={"0.5rem"}>
        <JegDeltarBoks />
        <TidBoks tid={date} />
      </Column>
    </BasePanel>
  );
};

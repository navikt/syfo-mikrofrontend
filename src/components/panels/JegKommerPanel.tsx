import { BasePanel } from "./BasePanel";
import { Column } from "../columns/Column";
import React from "react";
import { JegDeltarBoks } from "../deltakelseBoks/JegDeltarBoks";
import { TidStedBoks } from "../tidStedBoks/TidStedBoks";
import { HeadingAndTextColumn } from "../columns/HeadingAndTextColumn";
import { BrevType } from "../../types/client/brev";

interface Props {
  infoText: string;
  date: string;
  place: string;
  brevType: BrevType;
}

export const JegKommerPanel = ({ infoText, date, place, brevType }: Props) => {
  return (
    <BasePanel svar={"KOMMER"} brevType={brevType}>
      <HeadingAndTextColumn text={infoText} />

      <Column gap={"0.5rem"}>
        <JegDeltarBoks />
        <TidStedBoks sted={place} tid={date} />
      </Column>
    </BasePanel>
  );
};

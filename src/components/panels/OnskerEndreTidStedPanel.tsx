import { BasePanel } from "./BasePanel";
import { Column } from "../columns/Column";
import React from "react";
import { ForesporselSendtBoks } from "../deltakelseBoks/ForesporselSendtBoks";
import { LeftColumn } from "../columns/LeftColumn";
import { TidBoks } from "../tidBoks/TidBoks";
import { BrevType } from "../../types/client/brev";

interface Props {
  date: string;
  brevType: BrevType;
}

export const OnskerEndreTidStedPanel = ({ date, brevType }: Props) => {
  return (
    <BasePanel svar={"ONSKER_ENDRING"} brevType={brevType}>
      <LeftColumn text="Du ønsker å endre tid eller sted" />

      <Column gap={"0.5rem"}>
        <ForesporselSendtBoks />
        <TidBoks tid={date} />
      </Column>
    </BasePanel>
  );
};

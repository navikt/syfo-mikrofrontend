import { BasePanel } from "./BasePanel";
import { Column } from "../columns/Column";
import React from "react";
import { ForesporselSendtBoks } from "../deltakelseBoks/ForesporselSendtBoks";
import { HeadingAndTextColumn } from "../columns/HeadingAndTextColumn";
import { TidStedBoks } from "../tidStedBoks/TidStedBoks";
import { BrevType } from "../../types/client/brev";

interface Props {
  place: string;
  date: string;
  brevType: BrevType;
}

export const OnskerEndreTidStedPanel = ({ place, date, brevType }: Props) => {
  return (
    <BasePanel svar={"ONSKER_ENDRING"} brevType={brevType}>
      <HeadingAndTextColumn text="Du har bedt om å endre tid eller sted" />

      <Column gap={"0.5rem"}>
        <ForesporselSendtBoks />
        <TidStedBoks sted={place} tid={date} />
      </Column>
    </BasePanel>
  );
};

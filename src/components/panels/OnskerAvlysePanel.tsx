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

export const OnskerAvlysePanel = ({ date, brevType }: Props) => {
  return (
    <BasePanel svar={"ONSKER_AVLYSE"} brevType={brevType}>
      <LeftColumn text="Du ønsker å avlyse møtet" />

      <Column gap={"0.5rem"}>
        <ForesporselSendtBoks />
        <TidBoks tid={date} />
      </Column>
    </BasePanel>
  );
};

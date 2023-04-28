import { BasePanel } from "./BasePanel";
import { Column } from "../columns/Column";
import React from "react";
import { ForesporselSendtBoks } from "../deltakelseBoks/ForesporselSendtBoks";
import { LeftColumn } from "../columns/LeftColumn";
import { TidBoks } from "../tidStedBoks/TidBoks";

interface Props {
  date: string;
}

export const OnskerAvlysePanel = ({ date }: Props) => {
  return (
    <BasePanel>
      <LeftColumn text="Du ønsker å avlyse møtet" />

      <Column gap={"0.5rem"}>
        <ForesporselSendtBoks />
        <TidBoks tid={date} />
      </Column>
    </BasePanel>
  );
};

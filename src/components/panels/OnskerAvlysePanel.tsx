import { BasePanel } from "./BasePanel";
import { Column } from "../columns/Column";
import React from "react";
import { ForesporselSendtBoks } from "../deltakelseBoks/ForesporselSendtBoks";
import { HeadingAndTextColumn } from "../columns/HeadingAndTextColumn";
import { TidStedBoks } from "../tidStedBoks/TidStedBoks";

interface Props {
  place: string;
  date: string;
}

export const OnskerAvlysePanel = ({ place, date }: Props) => {
  return (
    <BasePanel>
      <HeadingAndTextColumn text="Du har bedt om å avlyse Dialogmøtet" />

      <Column gap={"0.5rem"}>
        <ForesporselSendtBoks />
        <TidStedBoks sted={place} tid={date} />
      </Column>
    </BasePanel>
  );
};

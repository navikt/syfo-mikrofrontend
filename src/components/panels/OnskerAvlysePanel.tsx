import { BasePanel } from "./BasePanel";
import { Column } from "../columns/Column";
import { StedBoks } from "../stedBoks/StedBoks";
import React from "react";
import { ForesporselSendtBoks } from "../deltakelseBoks/ForesporselSendtBoks";
import { HeadingAndTextColumn } from "../columns/HeadingAndTextColumn";

interface Props {
  place: string;
}

export const OnskerAvlysePanel = ({ place }: Props) => {
  return (
    <BasePanel>
      <HeadingAndTextColumn text="Du har bedt om å avlyse Dialogmøtet." />

      <Column gap={"0.5rem"}>
        <ForesporselSendtBoks />
        <StedBoks sted={place} />
      </Column>
    </BasePanel>
  );
};

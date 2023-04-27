import { BasePanel } from "./BasePanel";
import { Column } from "../columns/Column";
import React from "react";
import { ForesporselSendtBoks } from "../deltakelseBoks/ForesporselSendtBoks";
import { HeadingAndTextColumn } from "../columns/HeadingAndTextColumn";

export const OnskerEndreTidStedPanel = () => {
  return (
    <BasePanel>
      <HeadingAndTextColumn text="Du har bedt om å endre tid eller sted." />

      <Column gap={"0.5rem"}>
        <ForesporselSendtBoks />
      </Column>
    </BasePanel>
  );
};

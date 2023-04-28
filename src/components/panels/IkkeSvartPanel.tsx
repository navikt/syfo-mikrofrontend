import { BasePanel } from "./BasePanel";
import { Column } from "../columns/Column";
import React from "react";
import { IkkeSvartBoks } from "../deltakelseBoks/IkkeSvartBoks";
import { TidBoks } from "../tidStedBoks/TidBoks";
import { LeftColumn } from "../columns/LeftColumn";

interface Props {
  infoText: string;
  date: string;
}

export const IkkeSvartPanel = ({ infoText, date }: Props) => {
  return (
    <BasePanel>
      <LeftColumn text={infoText} />

      <Column gap={"0.5rem"}>
        <IkkeSvartBoks />
        <TidBoks tid={date} />
      </Column>
    </BasePanel>
  );
};

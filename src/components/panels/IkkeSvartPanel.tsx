import { BasePanel } from "./BasePanel";
import { Column } from "../columns/Column";
import React from "react";
import { IkkeSvartBoks } from "../deltakelseBoks/IkkeSvartBoks";
import { TidStedBoks } from "../tidStedBoks/TidStedBoks";
import { HeadingAndTextColumn } from "../columns/HeadingAndTextColumn";

interface Props {
  infoText: string;
  date: string;
  place: string;
}

export const IkkeSvartPanel = ({ infoText, date, place }: Props) => {
  return (
    <BasePanel>
      <HeadingAndTextColumn text={infoText} />

      <Column gap={"0.5rem"}>
        <IkkeSvartBoks />
        <TidStedBoks sted={place} tid={date} />
      </Column>
    </BasePanel>
  );
};

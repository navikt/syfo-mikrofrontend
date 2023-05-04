import { BasePanel } from "./BasePanel";
import { Column } from "../columns/Column";
import React from "react";
import { IkkeSvartBoks } from "../deltakelseBoks/IkkeSvartBoks";
import { TidStedBoks } from "../tidStedBoks/TidStedBoks";
import { HeadingAndTextColumn } from "../columns/HeadingAndTextColumn";
import { BrevType } from "../../types/client/brev";

interface Props {
  infoText: string;
  date: string;
  place: string;
  brevType: BrevType;
}

export const IkkeSvartPanel = ({ infoText, date, place, brevType }: Props) => {
  return (
    <BasePanel svar={"IKKE_SVART"} brevType={brevType}>
      <HeadingAndTextColumn text={infoText} />

      <Column gap={"0.5rem"}>
        <IkkeSvartBoks />
        <TidStedBoks sted={place} tid={date} />
      </Column>
    </BasePanel>
  );
};

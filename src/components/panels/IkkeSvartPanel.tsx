import { BasePanel } from "./BasePanel";
import { Column } from "../columns/Column";
import React from "react";
import { IkkeSvartBoks } from "../deltakelseBoks/IkkeSvartBoks";
import { TidBoks } from "../tidBoks/TidBoks";
import { LeftColumn } from "../columns/LeftColumn";
import { BrevType } from "../../types/client/brev";

const innkallingText = "Innkalling til dialogmøte";
const motetErFlyttetText = "Møtet med NAV er flyttet";

interface Props {
  date: string;
  brevType: BrevType;
}

export const IkkeSvartPanel = ({ date, brevType }: Props) => {
  const infoText = brevType === "INNKALT" ? innkallingText : motetErFlyttetText;

  return (
    <BasePanel svar={"IKKE_SVART"} brevType={brevType}>
      <LeftColumn text={infoText} />

      <Column gap={"0.5rem"}>
        <IkkeSvartBoks />
        <TidBoks tid={date} />
      </Column>
    </BasePanel>
  );
};

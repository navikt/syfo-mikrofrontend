import { BasePanel } from "./BasePanel";
import { Column } from "../columns/Column";
import { StedBoks } from "../stedBoks/StedBoks";
import React from "react";
import { HeadingTimeAndDateColumn } from "../columns/HeadingTimeAndDateColumn";
import { IkkeSvartBoks } from "../deltakelseBoks/IkkeSvartBoks";

interface Props {
  date: string;
  place: string;
}

export const IkkeSvartPanel = ({ date, place }: Props) => {
  return (
    <BasePanel>
      <HeadingTimeAndDateColumn date={date} />

      <Column gap={"0.5rem"}>
        <IkkeSvartBoks />
        <StedBoks sted={place} />
      </Column>
    </BasePanel>
  );
};

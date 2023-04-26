import { QuestionmarkDiamondIcon } from "@navikt/aksel-icons";
import { InfoBox } from "../InfoBox";
import React from "react";

export const NyttTidStedBoks = () => {
  return (
    <InfoBox
      text="Du har bedt om å endre tid eller sted"
      icon={<QuestionmarkDiamondIcon title="a11y-title" fontSize="1.5rem" />}
      background={"var(--surface-warning-subtle-hover, #FFD799);"}
    />
  );
};

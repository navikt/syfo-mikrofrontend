import { XMarkOctagonIcon } from "@navikt/aksel-icons";
import { InfoBox } from "../InfoBox";
import React from "react";

export const KommerIkkeBoks = () => {
  return (
    <InfoBox
      text="Du har svart at det ikke passer"
      icon={<XMarkOctagonIcon title="a11y-title" fontSize="1.5rem" />}
      background={"var(--surface-danger-subtle, #FFC2C2);"}
    />
  );
};

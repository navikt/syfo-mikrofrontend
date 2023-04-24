import { ExclamationmarkTriangleIcon } from "@navikt/aksel-icons";
import { InfoBox } from "../InfoBox";
import React from "react";

export const KommerIkkeBoks = () => {
  return (
    <InfoBox
      text="Kan ikke komme"
      icon={<ExclamationmarkTriangleIcon title="a11y-title" fontSize="1.5rem" />}
      background={"background: var(--surface-warning-subtle-hover, #FFD799);"}
    />
  );
};

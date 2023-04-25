import { ExclamationmarkTriangleIcon } from "@navikt/aksel-icons";
import { InfoBox } from "../InfoBox";
import React from "react";

export const NyttTidStedBoks = () => {
  return (
    <InfoBox
      text="Ønsker å endre tid eller sted"
      icon={<ExclamationmarkTriangleIcon title="a11y-title" fontSize="1.5rem" />}
      background={"var(--surface-warning-subtle, #FFECCC);"}
    />
  );
};

import { ExclamationmarkTriangleIcon } from "@navikt/aksel-icons";
import { InfoBox } from "../InfoBox";
import React from "react";

export const IkkeSvartBoks = () => {
  return (
    <InfoBox
      text="Du har ikke svart"
      icon={<ExclamationmarkTriangleIcon title="a11y-title" fontSize="1.5rem" />}
      background={"var(--surface-warning-subtle, #FFECCC);"}
    />
  );
};

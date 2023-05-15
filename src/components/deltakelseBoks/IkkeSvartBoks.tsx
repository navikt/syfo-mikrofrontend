import { ExclamationmarkTriangleIcon } from "@navikt/aksel-icons";
import { InfoBox } from "../infobox/InfoBox";
import React from "react";

export const IkkeSvartBoks = () => {
  return (
    <InfoBox
      text="Du har ikke svart"
      icon={<ExclamationmarkTriangleIcon title="Ikke svart på innkalling" fontSize="1.5rem" />}
      background={"var(--surface-warning-subtle-hover, #FFD799);"}
    />
  );
};

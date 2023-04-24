import { InfoBox } from "../InfoBox";
import React from "react";
import { CheckmarkCircleIcon } from "@navikt/aksel-icons";

export const JegDeltarBoks = () => {
  return (
    <InfoBox
      text="Ja, jeg deltar"
      icon={<CheckmarkCircleIcon title="a11y-title" fontSize="1.5rem" />}
      background={"var(--surface-success-subtle-hover, #99dead)"}
    />
  );
};

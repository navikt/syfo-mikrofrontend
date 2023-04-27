import { PaperplaneIcon } from "@navikt/aksel-icons";
import { InfoBox } from "../infobox/InfoBox";
import React from "react";

export const ForesporselSendtBoks = () => {
  return (
    <InfoBox
      text="Forespørsel sendt"
      icon={<PaperplaneIcon title="Forespørsel sendt" fontSize="1.5rem" />}
      background={"var(--surface-alt-3-subtle, #CCE2F0);"}
    />
  );
};

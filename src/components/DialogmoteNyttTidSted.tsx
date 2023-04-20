import { BodyLong } from "@navikt/ds-react";
import React from "react";
import { MoteinnkallingLinkPanel } from "./MoteinnkallingLinkPanel";

export const DialogmoteNyttTidSted = () => {
  return (
    <MoteinnkallingLinkPanel header="Dialogmøtet med NAV er flyttet">
      <BodyLong>NAV trenger å vite om du kan komme til møtet</BodyLong>
    </MoteinnkallingLinkPanel>
  );
};

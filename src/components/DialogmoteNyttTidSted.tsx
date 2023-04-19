import { Brev } from "../types/shared/brev";
import { BodyLong, Panel } from "@navikt/ds-react";
import { DialogmoteLink } from "./DialogmoteLink";
import React from "react";

interface Props {
  brev: Brev;
}

export const DialogmoteNyttTidSted = ({ brev }: Props) => {
  return (
    <Panel border>
      <BodyLong spacing>Dialogmøtet med NAV er flyttet</BodyLong>
      <DialogmoteLink linkText={"Gå til møteinnkallingen for å svare om du kan komme"} brevUuid={brev.uuid} />
    </Panel>
  );
};

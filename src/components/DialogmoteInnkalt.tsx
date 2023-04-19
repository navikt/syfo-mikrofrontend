import { Brev } from "../types/shared/brev";
import { BodyLong, Panel } from "@navikt/ds-react";
import React from "react";
import { DialogmoteLink } from "./DialogmoteLink";
import DittSvarPaaInnkalling from "./DittSvarPaaInnkalling";

interface Props {
  brev: Brev;
}

export const DialogmoteInnkalt = ({ brev }: Props) => {
  if (brev.svar) {
    return (
      <Panel className="flex flex-col space-y-4" border>
        <DittSvarPaaInnkalling svarType={brev.svar.svarType} />
        <DialogmoteLink linkText={"Gå til møteinnkallingen"} brevUuid={brev.uuid} />
      </Panel>
    );
  }

  return (
    <Panel border>
      <BodyLong spacing>Du er innkalt til dialogmøte</BodyLong>
      <DialogmoteLink linkText={"Gå til møteinnkallingen for å svare om du kan komme"} brevUuid={brev.uuid} />
    </Panel>
  );
};

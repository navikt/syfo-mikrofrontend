import { Brev } from "../types/shared/brev";
import { BodyLong } from "@navikt/ds-react";
import React from "react";
import DittSvarPaaInnkalling from "./DittSvarPaaInnkalling";
import { MoteinnkallingLinkPanel } from "./MoteinnkallingLinkPanel";
import { getLongDateFormat } from "../utils/dateUtils";

interface Props {
  brev: Brev;
}

export const DialogmoteInnkalt = ({ brev }: Props) => {
  if (brev.svar) {
    return (
      <MoteinnkallingLinkPanel header={`Du er innkalt til dialogmøte ${getLongDateFormat(brev.tid)}`}>
        <DittSvarPaaInnkalling svarType={brev.svar.svarType} />
      </MoteinnkallingLinkPanel>
    );
  }

  return (
    <MoteinnkallingLinkPanel header="Du er innkalt til dialogmøte">
      <BodyLong>NAV trenger å vite om du kan komme til møtet</BodyLong>
    </MoteinnkallingLinkPanel>
  );
};

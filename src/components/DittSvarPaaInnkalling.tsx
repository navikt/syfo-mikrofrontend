import React, { ReactElement } from "react";
import { BodyLong } from "@navikt/ds-react";
import { SvarType } from "../types/shared/brev";

const texts = {
  svartKommer: "Du har svart at du kommer til dette dialogmøtet.",
  svartVilEndre:
    "Du har svart at du ønsker å endre tidspunkt eller sted for dette dialogmøtet.\n\nNAV-kontoret vil vurdere ønsket ditt. Du får et nytt varsel hvis møtet endres. Hvis du ikke får et nytt varsel, er det fortsatt tidspunktet og stedet i denne innkallingen som gjelder.",
  svartKommerIkke:
    "Du har svart at du ønsker å avlyse dette dialogmøtet.\n\nNAV-kontoret vil vurdere ønsket ditt. Du får et nytt varsel hvis møtet avlyses. Hvis du ikke får noe nytt varsel, må du fortsatt stille til møtet i denne innkallingen.\n\nSelv om du ønsker å avlyse, kan det hende NAV-kontoret likevel konkluderer med at et møte er nødvendig.",
};

interface SvarProps {
  svarType: SvarType;
}

const DittSvarPaaInnkalling = ({ svarType }: SvarProps): ReactElement | null => {
  switch (svarType) {
    case "KOMMER":
      return <BodyLong>{texts.svartKommer}</BodyLong>;
    case "NYTT_TID_STED":
      return <BodyLong>{texts.svartVilEndre}</BodyLong>;
    case "KOMMER_IKKE":
      return <BodyLong>{texts.svartKommerIkke}</BodyLong>;
    default:
      return null;
  }
};

export default DittSvarPaaInnkalling;

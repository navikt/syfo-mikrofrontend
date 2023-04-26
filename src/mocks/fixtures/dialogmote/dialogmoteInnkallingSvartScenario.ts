import { BrevBuilder } from "../builders/brevBuilder";
import { Brev } from "../../../types/shared/brev";
import { moteinnkallingDocument } from "./brev/moteinnkallingDocument";
import { leggTilDagerPaDato } from "../../../utils/dateUtils";

const innkallingsBrevMedSvar = new BrevBuilder()
  .witUuid("125")
  .withBrevtype("INNKALT")
  .withCreatedAt(leggTilDagerPaDato(new Date(), -7))
  .withTid(leggTilDagerPaDato(new Date(), 40))
  .withDocument(moteinnkallingDocument)
  .withSvar({ svarType: "KOMMER", svarTekst: "Jeg kommer ikke!", svarTidspunkt: new Date().toISOString() })
  .build();

export const dialogmoteInnkallingSvartScenario: Brev[] = [innkallingsBrevMedSvar];

import { BrevBuilder } from "../builders/brevBuilder";
import { Brev } from "../../../types/shared/brev";
import { moteinnkallingDocument } from "./brev/moteinnkallingDocument";
import { nyttTidStedDocument } from "./brev/nyttTidStedDocumens";

const innkallingsBrev = new BrevBuilder()
  .witUuid("125")
  .withBrevtype("INNKALT")
  .withCreatedAt(new Date(2026, 2, 20))
  .withTid(new Date(2026, 3, 29))
  .withDocument(moteinnkallingDocument)
  .build();

const nyttTidStedBrev = new BrevBuilder()
  .witUuid("126")
  .withBrevtype("NYTT_TID_STED")
  .withCreatedAt(new Date(2026, 3, 28))
  .withTid(new Date(2026, 4, 17))
  .withSted("Slottsplassen 1")
  .withDocument(nyttTidStedDocument)
  .withSvar({ svarType: "KOMMER", svarTekst: "Jeg kommer ikke!", svarTidspunkt: new Date().toISOString() })
  .build();

export const dialogmoteNyttTidStedScenario: Brev[] = [innkallingsBrev, nyttTidStedBrev];

import { BrevBuilder } from "../builders/brevBuilder";
import { Brev } from "../../../types/shared/brev";
import { referatDocument } from "./brev/referatDocument";
import { moteinnkallingDocument } from "./brev/moteinnkallingDocument";
import { leggTilDagerPaDato } from "../../../utils/dateUtils";

const referatBrev = new BrevBuilder()
  .witUuid("123")
  .withBrevtype("REFERAT")
  .withCreatedAt(new Date(2021, 3, 3))
  .withTid(new Date(2021, 3, 3))
  .withDocument(referatDocument)
  .build();

const innkallingsBrev = new BrevBuilder()
  .witUuid("125")
  .withBrevtype("INNKALT")
  .withCreatedAt(leggTilDagerPaDato(new Date(), -7))
  .withTid(leggTilDagerPaDato(new Date(), 40))
  .withDocument(moteinnkallingDocument)
  .build();

export const dialogmoteInnkallingScenario: Brev[] = [referatBrev, innkallingsBrev];

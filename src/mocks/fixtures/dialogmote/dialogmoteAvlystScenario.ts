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

const avlystBrev = new BrevBuilder()
  .witUuid("125")
  .withBrevtype("AVLYST")
  .withCreatedAt(leggTilDagerPaDato(new Date(), -7))
  .withTid(leggTilDagerPaDato(new Date(), 40))
  .withDocument(moteinnkallingDocument)
  .build();

export const dialogmoteAvlystScenario: Brev[] = [referatBrev, avlystBrev];

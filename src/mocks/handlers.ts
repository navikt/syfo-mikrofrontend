import { http, HttpResponse } from "msw";
import { motebehovUtenSvar } from "./fixtures/dialogmote/motebehovUtenSvar";
import {
  createAvlysningsBrev,
  createInnkallingsBrev,
  createReferatBrev,
  createReferatEndretBrev,
} from "./fixtures/factories/brev";
import { leggTilDagerPaDato } from "../utils/dateUtils";

export const handlers = [
  http.get("api/dialogmote", () => {
    return HttpResponse.json([
      createInnkallingsBrev({ createdAt: leggTilDagerPaDato(new Date(), -10).toISOString() }),
      createAvlysningsBrev({ createdAt: leggTilDagerPaDato(new Date(), -6).toISOString() }),
      createInnkallingsBrev({ createdAt: leggTilDagerPaDato(new Date(), -5).toISOString() }),
      // createReferatBrev({ createdAt: leggTilDagerPaDato(new Date(), -4).toISOString() }),
      createReferatEndretBrev({ createdAt: leggTilDagerPaDato(new Date(), -103).toISOString() }),
    ]);
  }),
  http.get("api/motebehov", () => {
    return HttpResponse.json(motebehovUtenSvar);
  }),
];

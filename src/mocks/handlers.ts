import { http, HttpResponse } from "msw";
import { motebehovUtenSvar } from "./fixtures/dialogmote/motebehovUtenSvar";
import { createInnkallingsBrev } from "./fixtures/factories/brev";

export const handlers = [
  http.get("api/dialogmote", () => {
    return HttpResponse.json([createInnkallingsBrev()]);
  }),
  http.get("api/motebehov", () => {
    return HttpResponse.json(motebehovUtenSvar);
  }),
];

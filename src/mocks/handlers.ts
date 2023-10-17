import { rest } from "msw";
import { motebehovUtenSvar } from "./fixtures/dialogmote/motebehovUtenSvar";
import { createInnkallingsBrev } from "./fixtures/factories/brev";

export const handlers = [
  rest.get("*/api/v2/arbeidstaker/brev", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([createInnkallingsBrev()]));
  }),
  rest.get("*/syfomotebehov/api/v3/arbeidstaker/motebehov/all", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(motebehovUtenSvar));
  }),
];

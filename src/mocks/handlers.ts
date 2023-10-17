import { rest } from "msw";
import { motebehovUtenSvar } from "./fixtures/dialogmote/motebehovUtenSvar";
import { createInnkallingsBrev } from "./fixtures/factories/brev";

export const handlers = [
  rest.get("*/api/dialogmote", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([createInnkallingsBrev()]));
  }),
  rest.get("*/api/motebehov", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(motebehovUtenSvar));
  }),
];

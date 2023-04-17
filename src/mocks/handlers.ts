import { rest } from "msw";
import { dialogmoteInnkallingScenario } from "./fixtures/dialogmote/dialogmoteInnkallingScenario";

export const handlers = [
  rest.get("*/api/v2/arbeidstaker/brev", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dialogmoteInnkallingScenario));
  }),
];

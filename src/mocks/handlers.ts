import { rest } from "msw";
import { dialogmoteInnkallingSvartScenario } from "./fixtures/dialogmote/dialogmoteInnkallingSvartScenario";
import { dialogmoteInnkallingScenario } from "./fixtures/dialogmote/dialogmoteInnkallingScenario";
import { dialogmoteNyttTidStedScenario } from "./fixtures/dialogmote/dialogmoteEndretScenario";

export const handlers = [
  rest.get("*/api/v2/arbeidstaker/brev", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dialogmoteNyttTidStedScenario));
  }),
];

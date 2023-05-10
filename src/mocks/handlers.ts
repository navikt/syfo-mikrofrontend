import { rest } from "msw";
import { createEndringsBrev, createReferatBrev } from "./fixtures/factories/brev";

export const handlers = [
  rest.get("*/api/v2/arbeidstaker/brev", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([createEndringsBrev(), createReferatBrev()]));
  }),
];

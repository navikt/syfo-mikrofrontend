import { rest } from "msw";
export const handlers = [
  rest.get("/api/dialogmote", (req, res, ctx) => {
    //todo finn ut hva vi skal returnere, om vi skal lage nytt endepunkt eller hva
    return res(
      ctx.status(200),
      ctx.json({
        harKommendeDialogmote: false,
      })
    );
  }),
];

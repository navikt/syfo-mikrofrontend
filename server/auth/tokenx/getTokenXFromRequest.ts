import getIdportenToken from "../idporten/idportenToken";
import { getIsDialogmoteTokenX } from "../../../src/utils/tokenX";
import http from "node:http";

export const getIsDialogmoteTokenFromRequest = async (req: http.IncomingMessage): Promise<string> => {
  const idPortenToken = await getIdportenToken(req);
  return await getIsDialogmoteTokenX(idPortenToken);
};

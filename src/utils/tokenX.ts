import { getTokenX } from "../../server/auth/tokenx";

export const getIsDialogmoteTokenX = async (idportenToken: string | null): Promise<string> => {
  if (!idportenToken) {
    throw new Error("Invalid idporten token.");
  }

  return await getTokenX(idportenToken, process.env.ISDIALOGMOTE_CLIENT_ID || "");
};

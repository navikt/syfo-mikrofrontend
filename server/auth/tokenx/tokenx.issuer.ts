import { Issuer } from "openid-client";

let _issuer: Issuer;

export async function getIssuer(): Promise<Issuer> {
  if (_issuer) return _issuer;
  _issuer = await Issuer.discover(process.env.TOKEN_X_WELL_KNOWN_URL || "");
  return _issuer;
}

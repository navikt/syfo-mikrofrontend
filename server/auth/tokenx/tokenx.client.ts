import { Client } from "openid-client";
import { getIssuer } from "./tokenx.issuer";

let _client: Client;

export async function getClient(): Promise<Client> {
  if (_client) return _client;

  const issuer = await getIssuer();

  _client = new issuer.Client(
    {
      client_id: process.env.TOKEN_X_CLIENT_ID || "",
      token_endpoint_auth_method: "private_key_jwt",
      token_endpoint_auth_signing_alg: "RS256",
    },
    { keys: [JSON.parse(process.env.TOKEN_X_PRIVATE_JWK || "")] }
  );

  return _client;
}

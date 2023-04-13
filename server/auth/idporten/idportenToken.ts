import { validateToken } from "./verifyIdportenToken";
import http from "node:http";

async function getIdportenToken(req: http.IncomingMessage) {
  const bearerToken = req.headers["authorization"];

  if (!bearerToken) {
    throw new Error("Missing auth token");
  }

  if (!(await validateToken(bearerToken))) {
    throw Error("Failed to validate bearer token");
  }

  return bearerToken.replace("Bearer ", "");
}

export default getIdportenToken;

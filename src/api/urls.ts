const isProduction = window.location.href.includes("www.nav.no");
const isDevelopment = window.location.href.includes("intern.dev.nav.no");

export const getEnvironment = () => {
  if (isProduction) {
    return "production";
  }

  if (isDevelopment) {
    return "development";
  }

  return "local";
};

type EnvUrl = { development: string; production: string; local: string };

const FARO_TELEMETRY_URL: EnvUrl = {
  local: "NOT_USED",
  development: "https://telemetry.ekstern.dev.nav.no/collect",
  production: "https://telemetry.nav.no/collect",
};

const ISDIALOGMOTE_API_URL: EnvUrl = {
  local: "http://localhost:3000/api/dialogmote",
  development: `https://www.intern.dev.nav.no/esyfo-proxy/api/dialogmote`,
  production: `https://www.nav.no/esyfo-proxy/api/dialogmote`,
};

const SYFOMOTEBEHOV_API_URL: EnvUrl = {
  local: "http://localhost:3000/api/motebehov",
  development: `https://www.intern.dev.nav.no/esyfo-proxy/api/motebehov`,
  production: `https://www.nav.no/esyfo-proxy/api/motebehov`,
};

const DIALOGMOTE_URL: EnvUrl = {
  local: "http://localhost:3000/syk/dialogmoter/sykmeldt",
  development: `https://www.ekstern.dev.nav.no/syk/dialogmoter/sykmeldt`,
  production: `https://www.nav.no/syk/dialogmoter/sykmeldt`,
};

export const dialogmoteUrl = DIALOGMOTE_URL[getEnvironment()];
export const isdialogmoteApiUrl = ISDIALOGMOTE_API_URL[getEnvironment()];
export const syfomotebehovApiUrl = SYFOMOTEBEHOV_API_URL[getEnvironment()];

export const faroTelemetryUrl = FARO_TELEMETRY_URL[getEnvironment()];

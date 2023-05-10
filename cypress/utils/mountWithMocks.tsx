import { mount } from "cypress/react18";
import { SWRConfig } from "swr";
import { Brev } from "../../src/types/shared/brev";

export interface StubResponses {
  dialogmoteResponse: Brev[];
}

export const mountWithStubs = (componentUnderTest: JSX.Element, stubResponses: StubResponses) => {
  cy.intercept("/api/v2/arbeidstaker/brev", stubResponses.dialogmoteResponse).as("hentBrev");

  return mount(<SWRConfig value={{ provider: () => new Map() }}>{componentUnderTest}</SWRConfig>);
};

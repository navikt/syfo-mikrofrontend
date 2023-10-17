import { mount } from "cypress/react18";
import { SWRConfig } from "swr";
import { MotebehovDTO } from "../../src/schema/motebehovSchema";
import { ingenMotebehov } from "../../src/mocks/fixtures/dialogmote/ingenMotebehov";
import { BrevDTO } from "../../src/schema/brevSchema";

export interface StubResponses {
  dialogmoteResponse?: BrevDTO[];
  motebehovResponse?: MotebehovDTO;
}

export const mountWithStubs = (componentUnderTest: JSX.Element, stubResponses: StubResponses) => {
  cy.intercept("/api/dialogmote", stubResponses.dialogmoteResponse || []).as("hentBrev");

  cy.intercept("/api/motebehov", stubResponses.motebehovResponse || ingenMotebehov).as("hentMotebehov");

  return mount(<SWRConfig value={{ provider: () => new Map() }}>{componentUnderTest}</SWRConfig>);
};

import React from "react";
import App from "./App";
import { createAvlysningsBrev, createEndringsBrev, createInnkallingsBrev } from "./mocks/fixtures/factories/brev";

describe("<App />", () => {
  it("Displays brev of type INNKALLING", () => {
    cy.mountWithStubs(<App />, { dialogmoteResponse: [createInnkallingsBrev()] });

    cy.contains("Dialogmøte");
    cy.contains("Innkalling til dialogmøte");
    cy.contains("Du har ikke svart");
  });

  it("Displays brev of type NYTT_TID_STED", () => {
    cy.mountWithStubs(<App />, { dialogmoteResponse: [createEndringsBrev()] });

    cy.contains("Dialogmøte");
    cy.contains("Møtet med NAV er flyttet");
    cy.contains("Du har ikke svart");
  });

  it("Does not display brev of type AVLYST", () => {
    cy.mountWithStubs(<App />, { dialogmoteResponse: [createAvlysningsBrev()] });

    cy.contains("Dialogmøte").should("not.exist");
  });
});

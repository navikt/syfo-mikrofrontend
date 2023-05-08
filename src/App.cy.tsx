import React from "react";
import App from "./App";
import { dialogmoteInnkallingScenario } from "./mocks/fixtures/dialogmote/dialogmoteInnkallingScenario";
import { dialogmoteNyttTidStedScenario } from "./mocks/fixtures/dialogmote/dialogmoteEndretScenario";
import { dialogmoteAvlystScenario } from "./mocks/fixtures/dialogmote/dialogmoteAvlystScenario";

describe("<App />", () => {
  it("Displays brev of type INNKALLING", () => {
    cy.mountWithStubs(<App />, { dialogmoteResponse: dialogmoteInnkallingScenario });

    cy.contains("Dialogmøte");
    cy.contains("Innkalling til dialogmøte");
    cy.contains("Du har ikke svart");
  });

  it("Displays brev of type NYTT_TID_STED", () => {
    cy.mountWithStubs(<App />, { dialogmoteResponse: dialogmoteNyttTidStedScenario });

    cy.contains("Dialogmøte");
    cy.contains("Møtet med NAV er flyttet");
    cy.contains("Du har ikke svart");
  });

  it("Does not display brev of type AVLYST", () => {
    cy.mountWithStubs(<App />, { dialogmoteResponse: dialogmoteAvlystScenario });

    cy.contains("Dialogmøte").should("not.exist");
  });
});

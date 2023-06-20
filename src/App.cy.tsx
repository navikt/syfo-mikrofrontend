import React from "react";
import App from "./App";
import { createAvlysningsBrev, createEndringsBrev, createInnkallingsBrev } from "./mocks/fixtures/factories/brev";
import { motebehovUtenSvar } from "./mocks/fixtures/dialogmote/motebehovUtenSvar";
import { motebehovMedSvar } from "./mocks/fixtures/dialogmote/motebehovMedSvar";

describe("<App />", () => {
  it("Displays brev of type INNKALLING", () => {
    cy.mountWithStubs(<App />, { dialogmoteResponse: [createInnkallingsBrev()] });

    cy.contains("Dialogmøte med NAV");
    cy.contains("Du har ikke svart");
  });

  it("Displays brev of type NYTT_TID_STED", () => {
    cy.mountWithStubs(<App />, { dialogmoteResponse: [createEndringsBrev()] });

    cy.contains("Dialogmøte med NAV");
    cy.contains("Møtet med NAV er flyttet");
    cy.contains("Se endringene og svar");
  });

  it("Does not display brev of type AVLYST", () => {
    cy.mountWithStubs(<App />, { dialogmoteResponse: [createAvlysningsBrev()] });

    cy.contains("Dialogmøte").should("not.exist");
  });

  it("Displays svar møtebehov if no upcoming Dialogmøte", () => {
    cy.mountWithStubs(<App />, { dialogmoteResponse: [], motebehovResponse: motebehovUtenSvar });

    cy.contains("Trenger du et dialogmøte?");
  });

  it("Does not display svar møtebehov if user has upcoming Dialogmøte", () => {
    cy.mountWithStubs(<App />, { dialogmoteResponse: [createInnkallingsBrev()], motebehovResponse: motebehovUtenSvar });

    cy.contains("Trenger du et dialogmøte?").should("not.exist");
  });

  it("Does not display svar møtebehov if user has sent svar", () => {
    cy.mountWithStubs(<App />, { motebehovResponse: motebehovMedSvar });

    cy.contains("Trenger du et dialogmøte?").should("not.exist");
  });
});

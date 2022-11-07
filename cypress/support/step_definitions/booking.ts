/// <reference types="cypress-xpath" />

import {
  Given,
  And,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
import { booking } from "../pages/booking_obj";
const malta = new booking();
Given("I am on airmalta", () => {
  cy.visit(`/`);
  malta.routeOrigin().should(`be.visible`);
});
When("I input my preferred depart from location", () => {
  malta.routeOrigin().type(`VIE`);
  malta.airportOptions().first().click();
  malta.routeOrigin().should(`have.have`, `vienna`);
});
And("I input my preferred flyimg to location", () => {
  malta.routeDestination().type(`MAL`);
  malta.airportOptions().click().wait(500);
});
And("I select preferred date", () => {
  malta.startDate().click().wait(2500);
  malta.dayPicker().click({ force: true }).wait(500).wait(500);
  malta.startDate().should(`have.attr`, `value`);
  malta.flightButton().should(`not.be.enabled`);
  malta.endDate().click().wait(500);
  malta.dayPickerNavNext().click({ force: true });
  malta
    .selectedEndDay()
    .realTouch({ position: "left" })

    .wait(500);
  malta.endDate().should(`have.attr`, `value`);
});
And("I click find flight button", () => {
  malta.flightButton().should(`be.enabled`).click();
  malta.flexibleDates().click();
});
Then("I should see available flight calendar and price", () => {
  cy.contains(`Outbound`).should(`not.have.text`, `No flight`);
});

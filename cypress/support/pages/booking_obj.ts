/// <reference types="cypress" />

export class booking {
  routeOrigin() {
    return cy.get(".route-selection-origin .ellipsis");
  }
  routeDestination() {
    return cy.get(".route-selection-destination .ellipsis");
  }
  airportOptions() {
    return cy.get(".airport-option ");
  }
  startDate() {
    return cy.get("[name='DepartureDate1']");
  }
  dayPicker() {
    return cy.get(".DayPicker-Day--today");
  }
  flightButton() {
    return cy.contains("Find flights");
  }
  dayPickerNavNext() {
    return cy.get(".DayPicker-NavButton--next");
  }
  endDate() {
    return cy.get("[name='DepartureDate2']");
  }
  flexibleDates() {
    return cy.contains("Flexible dates");
  }
  selectedEndDay() {
    return cy.get(
      ':nth-child(1) >.DayPicker-Body > :nth-child(1) > [tabindex="0"]'
    );
  }
}

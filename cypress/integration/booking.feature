@booking
Feature: Booking Module

    This feature is to validate getting the first available  flight price from vienna internatiomnal to malta

    Background: : Precondition
        Given I am on airmalta
    @regression @e2e @sanity
    Scenario: User should be able to VIEW available flight price
        When I input my preferred depart from location
        And  I input my preferred flyimg to location
        And  I select preferred date
        And I click find flight button
        Then I should see available flight calendar and price


export class IbanValidationScreenAssertions {
  ibanValidDisplayed() {
    cy.contains("Iban Valid");
  }
}

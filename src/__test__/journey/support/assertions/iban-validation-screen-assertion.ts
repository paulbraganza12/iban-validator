export class IbanValidationScreenAssertions {
  ibanValidDisplayed() {
    cy.contains("Valid IBAN").should("be.visible");
    cy.contains("Positive operation history").should("be.visible");
    cy.contains("Complies with Payment Services Directive (PSD2)").should("be.visible");
  }
}

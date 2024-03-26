export class IbanValidationScreenAssertions {
  ibanValidDisplayed() {
    cy.contains("Iban Valid").should("be.visible");
    cy.contains("Trusted bank").should("be.visible");
    cy.contains("Accepts instant payments").should("be.visible");
    cy.contains("Positive operation history").should("be.visible");
    cy.contains("No security claims").should("be.visible");
    cy.contains("Complies with Payment Services Directive (PSD2)").should("be.visible");
  }
}

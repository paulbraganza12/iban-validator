import { when } from "../support/actions";
import { given } from "../support/arrangments/given";
import { then } from "../support/assertions";
import { iban } from "../support/data";

describe("Iban validator", () => {
  it("should return true for valid iban", () => {
    given().withBff((bff) => {
      const testIBan = iban.validIban;
      bff.respondsWithIbanValidationResult(testIBan);
    });

    when()
      .launchApp()
      .onIbanValidationScreen((screen) => {
        screen.enterIban(iban.validIban);
      });

    then().onIbanValidationScreen((screen) => {
      screen.ibanValidDisplayed();
    });
  });

  it("should return false for invalid iban", () => {});
});

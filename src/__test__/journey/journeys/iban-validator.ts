import { when } from "../support/actions";
import { given } from "../support/arrangments/given";
import { then } from "../support/assertions";
import { iban } from "../support/data";

describe("Iban validator", () => {
  it("Valid iban journey", () => {
    given().withBff((bff) => {
      const testIBan = iban.validIban;
      bff.respondsWithIbanValidationResult(testIBan);
    });

    when()
      .launchApp()
      .onIbanValidationScreen((screen) => {
        screen.enterIban(iban.validIban);
        screen.submitIban();
      });

    then().onIbanValidationScreen((screen) => {
      screen.ibanValidDisplayed();
    });
  });

  it("Invalid iban journey", () => {
    given().withBff((bff) => {
      bff.respondsWithIbanValidationError();
    });
    when()
      .launchApp()
      .onIbanValidationScreen((screen) => {
        screen.enterIban(iban.invalidIban);
        screen.submitIban();
      });

    then().onIbanValidationScreen((screen) => {
      screen.ibanInvalidDisplayed();
    });
  });
});

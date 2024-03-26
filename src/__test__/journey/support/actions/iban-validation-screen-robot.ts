import { getByTestId } from "../cypress";

export class IbanValidationScreenRobot {
  enterIban(iban: string) {
    this.writesIban(iban);
  }

  submitIban() {
    getByTestId("submit-button").click();
  }

  private writesIban(iban: string): void {
    getByTestId("iban-input").type(iban);
  }
}

import { getByTestId } from "../cypress";

export class IbanValidationScreenRobot {
  enterIban(iban: string) {
    this.writesIban(iban);
  }

  private writesIban(iban: string): void {
    getByTestId("iban-input").type(iban);
  }
}

import { IbanValidationScreenRobot } from "./iban-validation-screen-robot";

const url = "http://localhost:3000";

class When {
  launchApp(): When {
    cy.visit(url);
    return this;
  }

  onIbanValidationScreen(fn: (ibanValidationScreen: IbanValidationScreenRobot) => void): When {
    fn(new IbanValidationScreenRobot());
    return this;
  }
}

export const when = () => {
  return new When();
};

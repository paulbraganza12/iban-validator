import { IbanValidationScreenAssertions } from "./iban-validation-screen-assertion";

class Then {
  onIbanValidationScreen(fn: (screen: IbanValidationScreenAssertions) => void): Then {
    fn(new IbanValidationScreenAssertions());
    return this;
  }
}

export const then = () => {
  return new Then();
};

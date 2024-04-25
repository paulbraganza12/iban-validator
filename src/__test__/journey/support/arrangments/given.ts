import { registerInterceptor } from "../cypress";
import * as bffResponses from "./bff-responses";

export class Bff {
  public respondsWithIbanValidationResult(iban: string) {
    registerInterceptor(bffResponses.validateIban(iban));
  }

  public respondsWithIbanValidationError() {
    registerInterceptor(bffResponses.inValidIban());
  }
}

class Given {
  readonly bff: Bff;

  constructor() {
    this.bff = new Bff();
  }

  withBff(fn: (bff: Bff) => void): Given {
    fn(this.bff);
    return this;
  }
}

export const given = () => {
  return new Given();
};

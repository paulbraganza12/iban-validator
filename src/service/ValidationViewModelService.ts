import { ValidationApiResponse } from "./ValidationApiService";

export function createIbanValidationViewModel(validation?: ValidationApiResponse) {
  return {
    isValidationAvailable: Boolean(validation),
  };
}

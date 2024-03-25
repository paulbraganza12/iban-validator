import { Interception } from "../cypress";
import { createIbanValidationResponse } from "./responses";

export const validateIban = (iban: string): Interception => {
  return {
    id: "validateIban",
    method: "GET",
    path: "api/v1/validate-iban",
    response: {
      body: createIbanValidationResponse(iban),
      statusCode: 200,
    },
  };
};

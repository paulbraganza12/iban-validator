import { Interception } from "../cypress";
import { createIbanValidationResponse } from "./responses";

export const validateIban = (iban: string): Interception => {
  return {
    id: "validateIban",
    method: "GET",
    path: "**/validate-iban?iban=*",
    response: {
      body: createIbanValidationResponse(iban),
      statusCode: 200,
    },
  };
};

export const inValidIban = (): Interception => {
  return {
    id: "InvalidIban",
    method: "GET",
    path: "**/validate-iban?iban=*",
    response: {
      body: {},
      statusCode: 400,
    },
  };
};

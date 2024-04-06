import { ValidationApiResponse } from "./ValidationApiService";

export function createIbanValidationViewModel(validation?: ValidationApiResponse) {
  if (!validation) {
    return {
      validationResults: [],
      isValidationAvailable: false,
    };
  }
  const results = ["Valid IBAN"];
  const { bank, flags } = validation;

  if (hasTrustedBank(bank)) {
    results.push("Trusted Bank");
  }

  if (flags.includes("INSTANT")) {
    results.push("Accepts instant payments");
  }

  if (flags.includes("POSITIVE_HISTORY")) {
    results.push("Positive operation history");
  }

  if (flags.includes("SECURITY_CLAIMS")) {
    results.push("No Security Claims");
  }

  if (flags.includes("PSD2")) {
    results.push("Complies with Payment Services Directive (PSD2)");
  }
  return {
    validationResults: results,
    isValidationAvailable: Boolean(validation),
  };
}

function hasTrustedBank(bank: ValidationApiResponse["bank"]): boolean {
  console.log(bank);
  if (typeof bank?.trustScore !== "number") return false;

  return bank.trustScore > 7;
}

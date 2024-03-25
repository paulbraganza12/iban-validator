export const createIbanValidationResponse = (iban: string) => ({
  valid: true,
  iban,
});

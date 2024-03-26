export const createIbanValidationResponse = (iban: string) => ({
  iban: iban,
  flags: ["INSTANT", "POSITIVE_HISTORY", "PSD2"],
  bank: {
    trustedScore: 10,
  },
});

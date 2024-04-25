import { describe, expect, test } from "vitest";
import { createIbanValidationViewModel } from "../../service/ValidationViewModelService";

describe("validation view model retrieval", () => {
  describe("validation availability", () => {
    test("returns availability when validation is unavailable", () => {
      const validation = undefined;

      const result = createIbanValidationViewModel(validation);

      expect(result.isValidationAvailable).toBe(false);
    });

    test("returns availability when validation is available", () => {
      const validation = { iban: "x", flags: ["INSTANT"] };

      const result = createIbanValidationViewModel(validation);

      expect(result.isValidationAvailable).toBe(true);
    });

    describe("validation results", () => {
      test("returns empty when validation is unavailable", () => {
        const validation = undefined;

        const result = createIbanValidationViewModel(validation);

        expect(result.validationResults).toEqual([]);
      });

      test("returns results when validation is available", () => {
        const validation = { iban: "x", flags: [] };

        const result = createIbanValidationViewModel(validation);

        expect(result.validationResults).toEqual(["Valid IBAN"]);
      });

      test("returns results when iban belongs to trusted bank", () => {
        const validation = { iban: "x", flags: [], bank: { trustScore: 8 } };

        const result = createIbanValidationViewModel(validation);

        expect(result.validationResults).toEqual(["Valid IBAN", "Trusted Bank"]);
      });
    });

    describe("validation error", () => {
      test("return error message when iban is invalid", () => {
        const validation = undefined;
        const error = new Error();

        const result = createIbanValidationViewModel(validation, error);

        expect(result.validationError).toBe("Invalid IBAN");
      });

      test("return error message when iban is invalid", () => {
        const validation = { iban: "x", flags: [] };
        const error = undefined;

        const result = createIbanValidationViewModel(validation, error);

        expect(result.validationError).toBeUndefined();
      });
    });
  });
});

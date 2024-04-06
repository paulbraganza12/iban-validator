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
  });
});

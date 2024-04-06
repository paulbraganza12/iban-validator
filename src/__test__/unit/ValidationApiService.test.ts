import { describe, expect, test, vi } from "vitest";

import { createIbanValidationApiAdapter } from "../../service/ValidationApiService";
describe("api adapter factory", () => {
  test("returns successful response for provided iban", async () => {
    const iban = "x";
    const spy = vi.fn().mockResolvedValue({
      ok: true,
      json: () => ({ iban: "x", flags: [] }),
    });

    const adapter = createIbanValidationApiAdapter(iban, {
      request: spy,
    });
    const result = await adapter();

    expect(result).toEqual({ iban: "x", flags: [] });
    expect(spy).toHaveBeenCalledWith("http://localhost:9000/api/v1/validate-iban?iban=x", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  });

  test("throws error when request fails", async () => {
    const iban = "x";
    const mock = vi.fn().mockResolvedValue({ ok: false, json: () => "y" });

    const adapter = createIbanValidationApiAdapter(iban, {
      request: mock,
    });

    await expect(() => adapter()).rejects.toThrowError("y");
  });
});

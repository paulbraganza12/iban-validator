export type ValidationApiResponse = {
  iban: string;
  flags: ("INSTANT" | "POSITIVE_HISTORY" | "SECURITY_CLAIMS" | "PSD2")[];
  bank?: {
    trustScore: number;
  };
};

type AdapterOptions = {
  request?: typeof window.fetch;
};

export function createIbanValidationApiAdapter(
  iban: string,
  { request = window.fetch }: AdapterOptions,
) {
  return async (): Promise<ValidationApiResponse> => {
    const response = await request(`http://localhost:9000/api/v1/validate-iban?iban=${iban}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();

    if (response.ok) {
      return result;
    }

    throw result;
  };
}

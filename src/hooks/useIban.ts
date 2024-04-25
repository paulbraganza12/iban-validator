import { useQuery } from "react-query";
import {
  createIbanValidationApiAdapter,
  ValidationApiResponse,
} from "../service/ValidationApiService";

export function useIban(iban: string) {
  return useQuery<ValidationApiResponse>(
    ["validation", iban],
    createIbanValidationApiAdapter(iban, {}),
    {
      enabled: Boolean(iban),
      retry: false,
    },
  );
}

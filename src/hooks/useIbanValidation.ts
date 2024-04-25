import { FormEvent, useCallback, useState } from "react";
import { useIban } from "./useIban";
import { createIbanValidationViewModel } from "../service/ValidationViewModelService";

export function useIbanValidation() {
  const [formValue, setFormValue] = useState({ iban: "" });
  const [iban, setIban] = useState(formValue.iban);
  const { data, error } = useIban(iban);
  const model = createIbanValidationViewModel(data, error);

  const onIbanSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIban(formValue.iban);
    },
    [formValue.iban],
  );

  const onIbanChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ iban: event.target.value });
  }, []);

  return {
    ...model,
    onIbanChange,
    onIbanSubmit,
  };
}

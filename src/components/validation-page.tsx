import React, { useState } from "react";
import ValidationList from "./validation-list";
import { useQuery } from "react-query";
import {
  createIbanValidationApiAdapter,
  ValidationApiResponse,
} from "../service/ValidationApiService";
import { createIbanValidationViewModel } from "../service/ValidationViewModelService";

const ValidationPage = () => {
  const [formValue, setFormValue] = useState({ iban: "" });
  const [iban, setIban] = useState(formValue.iban);
  const { data, error } = useQuery<ValidationApiResponse>(
    ["validation", iban],
    createIbanValidationApiAdapter(iban, {}),
    {
      enabled: Boolean(iban),
      retry: false,
    },
  );

  const model = createIbanValidationViewModel(data, error);

  return (
    <div>
      <h1>Iban validator</h1>
      <form
        onSubmit={(event) => {
          setIban(formValue.iban);
          event.preventDefault();
        }}
      >
        <input
          type="text"
          name="iban"
          placeholder="Enter IBAN"
          data-testid={"iban-input"}
          onChange={(event) => {
            setFormValue({ iban: event.target.value });
          }}
        />
        <button type="submit" data-testid={"submit-button"}>
          Check
        </button>
      </form>

      {model.isValidationAvailable && <ValidationList items={model.validationResults} />}
      {model.validationError && <ValidationList items={[model.validationError]} />}
    </div>
  );
};

export default ValidationPage;

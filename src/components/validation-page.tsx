import React from "react";
import ValidationList from "./validation-list";
import { useIbanValidation } from "../hooks/useIbanValidation";

const ValidationPage = () => {
  const { onIbanChange, onIbanSubmit, isValidationAvailable, validationError, validationResults } =
    useIbanValidation();

  return (
    <div>
      <h1>Iban validator</h1>
      <form onSubmit={onIbanSubmit}>
        <input
          type="text"
          name="iban"
          placeholder="Enter IBAN"
          data-testid={"iban-input"}
          onChange={onIbanChange}
        />
        <button type="submit" data-testid={"submit-button"}>
          Check
        </button>
      </form>

      {isValidationAvailable && <ValidationList items={validationResults} />}
      {validationError && <ValidationList items={[validationError]} />}
    </div>
  );
};

export default ValidationPage;

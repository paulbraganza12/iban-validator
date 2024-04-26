import React from "react";
import ValidationList from "../ValidationList/validation-list";
import { useIbanValidation } from "../../hooks/useIbanValidation";
import "./validation.style.css";

const ValidationPage = () => {
  const {
    onIbanChange,
    onIbanSubmit,
    isValidationAvailable,
    validationError,
    validationResults,
    formValue,
  } = useIbanValidation();

  return (
    <div className="validation-container">
      <div className="validation-form-container">
        <h1>IBAN validator</h1>
        <form onSubmit={onIbanSubmit}>
          <input
            type="text"
            name="iban"
            placeholder="Enter IBAN"
            data-testid={"iban-input"}
            onChange={onIbanChange}
          />
          <button type="submit" data-testid={"submit-button"} disabled={formValue.iban.length < 3}>
            Check
          </button>
        </form>
      </div>
      {isValidationAvailable && <ValidationList items={validationResults} type="success" />}
      {validationError && <ValidationList items={[validationError]} type="error" />}
    </div>
  );
};

export default ValidationPage;

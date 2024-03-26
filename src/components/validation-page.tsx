import React, { useState } from "react";
import PositiveList from "./positive-list";

const ValidationPage = () => {
  const [formValue, setFormValue] = useState({ iban: "" });
  const [iban, setIban] = useState(formValue.iban);

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
      {iban}
      <PositiveList items={["x", "y", "z"]} />
    </div>
  );
};

export default ValidationPage;

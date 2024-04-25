import React from "react";

type Prop = {
  items: string[];
};
const ValidationList = ({ items }: Prop) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default ValidationList;

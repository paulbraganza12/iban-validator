import React from "react";

type Prop = {
  items: string[];
};
const PositiveList = ({ items }: Prop) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default PositiveList;

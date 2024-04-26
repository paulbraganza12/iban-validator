import React from "react";
import "./validation-list.style.css";

type Prop = {
  items: string[];
  type: "error" | "success";
};
const ValidationList = ({ items, type }: Prop) => {
  return (
    <ul className={type}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default ValidationList;

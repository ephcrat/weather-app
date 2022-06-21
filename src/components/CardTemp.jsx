import React from "react";

export default function CardTemp({ label, value }) {
  return (
    <div>
      <label>{label}</label>
      <span>{value}</span>
    </div>
  );
}

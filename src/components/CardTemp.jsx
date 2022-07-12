import React from "react";

export default function CardTemp({ label, value, className = "" }) {
  return (
    <div className={className}>
      <label>{label}</label>: <span>{value}</span>
    </div>
  );
}

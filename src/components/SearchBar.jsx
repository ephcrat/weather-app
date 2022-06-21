import React, { useRef } from "react";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  let textInput = useRef(null);
  const onButtonClick = (e) => {
    onSearch(textInput.current.value);
    console.log(textInput);
  };
  return (
    <div>
      <input type="text" ref={textInput} />
      <button onClick={onButtonClick}>Add</button>
    </div>
  );
}

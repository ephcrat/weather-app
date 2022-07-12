import sbstyle from "../styles/SearchBar.module.css";
import { useNavigate } from "react-router-dom";
import { FaSearchLocation } from "react-icons/fa";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  // const onButtonClick = (e) => {
  //   onSearch(textInput.current.value);
  //   console.log(textInput);
  // };

  // const handleInputChange = (e) => {
  //   console.log("handle input change");
  //   setCities(() => {
  //     return [...cities, e.target.value];
  //   });
  //   console.log(textInput.current.value);
  // };

  const navigate = useNavigate();
  function handleOnSearch() {
    const input = document.getElementById("sb-input");
    onSearch(input.value);
    input.value = "";
    navigate("/");
  }

  return (
    <div className={sbstyle.div}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className={sbstyle.input}>
          <input
            id="sb-input"
            type="text"
            placeholder="Search City, State or Country"
            autoComplete="off"
          />
          <button
            type="submit"
            className={sbstyle.btn}
            onClick={handleOnSearch}
          >
            {<FaSearchLocation />}
          </button>
        </div>
      </form>
    </div>
  );
}

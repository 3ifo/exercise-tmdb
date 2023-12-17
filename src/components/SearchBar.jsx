import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        type="text"
      />
      <button onClick={() => onSearch(inputValue)}>Cerca</button>
    </div>
  );
};

export default SearchBar;

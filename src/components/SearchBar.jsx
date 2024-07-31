import React from "react";
import products from "../Data/products.jsx";
import "./SearchBar.css";

export function SearchBar({ setCategoryValue, setSearchValue }) {
  //
  const allCategories = Array.from(
    new Set(products.map((product) => product.category))
  );

  function handleInput(e) {
    setSearchValue(e.target.value);
  }

  function handleInputCategory(e) {
    setCategoryValue(e.target.value);
  }
  return (
    <div className="flex items-center search-bar">
      <div>
        <select
          className="block w-full px-4 py-2 border rounded-full border-r-8 border-transparent focus:outline-none categories"
          name="categories"
          id="categories"
          onChange={handleInputCategory}
        >
          <option value="Tous">Tous</option>
          {allCategories.map((categ) => (
            <option key={categ} value={categ}>
              {categ}
            </option>
          ))}
        </select>
      </div>

      <div className="flex bg-[#0b9e03] rounded-full">
        <input
          type="text"
          className="block pl-4 py-2 border border-transparent rounded-full focus:outline-none"
          placeholder="Rechercher..."
          onChange={handleInput}
        />
        <div className="pr-4 text-white rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

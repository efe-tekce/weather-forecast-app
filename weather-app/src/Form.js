import React from "react";
import fetchWeather from "./api/fetchWeather";
import { useState } from "react";

function Form({ setQueryObject }) {
  const [query, setQuery] = useState("");
  const [filterType, setFilterType] = useState("city");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQueryObject({
      query,
      filterType,
    });
    setQuery("");
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form
      className='filter-card  p-12 opacity-70 bg-blue-500 w-full h-full rounded-lg flex flex-col justify-center shadow-2xl'
      onSubmit={handleSubmit}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        class='h-52 text-gray-600 m-auto'
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path
          fill-rule='evenodd'
          d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
          clip-rule='evenodd'
        />
      </svg>

      <h2 className='text-2xl text-center text-gray-300 font-bold m-3'>
        Search Location
      </h2>

      <input
        className='focus:outline-none h-8 w-full rounded-md placeholder-gray-400 text-center tracking-wide mb-10'
        type='text'
        name='Searchbar'
        id='Searchbar'
        value={query}
        onChange={handleInputChange}
      />
      <button
        className='px-2 py-2 bg-blue-600 text-gray-300 w-full rounded-lg text-md transform duration-700 hover:scale-105 hover:shadow-2xl '
        type='submit'
        disabled={query === ""}
      >
        Get Weather
      </button>
    </form>
  );
}

export default Form;

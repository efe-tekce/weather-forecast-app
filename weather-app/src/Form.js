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

  const handleSelectChange = (e) => {
    setFilterType(e.target.value);
  };

  return (
    <form
      className='p-16 bg-gray-300 w-full rounded-md flex flex-col justify-center shadow-2xl'
      onSubmit={handleSubmit}
    >
      <h2 className='text-2xl uppercase font-bold mb-3'>Select filter type</h2>
      <select
        className='w-full h-8 mb-10'
        name='type'
        id='type'
        value={filterType}
        onChange={handleSelectChange}
      >
        <option value='city'>City</option>
        <option value='country'>Country</option>
      </select>
      <h2 className='text-2xl uppercase font-bold mb-3'>
        {filterType === "city"
          ? "Enter city name"
          : "Enter country for capital"}
      </h2>
      <input
        className='focus:outline-none h-8 w-full rounded-md placeholder-gray-400 text-center tracking-wide  mb-10'
        type='text'
        name='Searchbar'
        id='Searchbar'
        value={query}
        onChange={handleInputChange}
      />
      <button
        className='px-2 py-2 bg-blue-600 text-white w-full rounded-lg text-md'
        type='submit'
      >
        Get Weather
      </button>
    </form>
  );
}

export default Form;

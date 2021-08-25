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
      className='py-16 bg-indigo-300 w-1/3 m-auto rounded-md flex flex-col justify-center shadow-xl'
      onSubmit={handleSubmit}
    >
      <h2 className='text-center mb-2'>Select filter type</h2>
      <select
        className='m-auto w-3/5 mb-5'
        name='type'
        id='type'
        value={filterType}
        onChange={handleSelectChange}
      >
        <option value='city'>City</option>
        <option value='country'>Country</option>
      </select>
      <h2 className='text-center mb-2'>
        {filterType === "city"
          ? "Enter city name"
          : "Enter country to get weather for all cities"}
      </h2>
      <input
        className='focus:outline-none h-8 w-1/2 m-auto rounded-md placeholder-gray-400 text-center tracking-wide'
        type='text'
        name='Searchbar'
        id='Searchbar'
        value={query}
        onChange={handleInputChange}
      />
      <button
        className='px-2 py-1 mt-12 bg-green-500 w-1/3 mx-auto rounded-lg text-2xl'
        type='submit'
      >
        Get Weather
      </button>
    </form>
  );
}

export default Form;

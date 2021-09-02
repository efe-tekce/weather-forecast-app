import React, { useState } from "react";
import { fetchWeather } from "./api/fetchWeather";
import Forecast from "./Forecast";
import Form from "./Form";

import "./index.css";

function App() {
  const [queryObject, setQueryObject] = useState({});
  return (
    <div className='content mt-16 mx-auto'>
      <h1 className=' font-bold font-mono text-4xl text-gray-500 text-center tracking-wide '>
        Weather Forecast App
      </h1>
      <div className='wrapper mx-auto flex-col md:flex-row md:w-full'>
        <Form setQueryObject={setQueryObject} />
        {queryObject?.query && <Forecast queryObject={queryObject} />}
      </div>
    </div>
  );
}

export default App;

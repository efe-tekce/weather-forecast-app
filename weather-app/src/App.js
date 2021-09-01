import React, { useState } from "react";
import { fetchWeather } from "./api/fetchWeather";
import Forecast from "./Forecast";
import Form from "./Form";

import "./index.css";

function App() {
  const [queryObject, setQueryObject] = useState("");

  return (
    <div className='content'>
      <h1 className='font-bold font-mono text-4xl text-center mb-12 tracking-wide '>
        Weather Forecast App
      </h1>
      <div className='wrapper'>
        <Form setQueryObject={setQueryObject} />
        <Forecast queryObject={queryObject} />
      </div>
    </div>
  );
}

export default App;

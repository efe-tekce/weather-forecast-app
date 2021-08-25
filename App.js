import React, { useState } from "react";
import { fetchWeather } from "./api/fetchWeather";
import Forecast from "./Forecast";
import Form from "./Form";

import "./index.css";

function App() {
  const [queryObject, setQueryObject] = useState("");

  return (
    <div className='body bg-indigo-700 min-h-screen'>
      <h1 className='font-bold font-mono text-4xl text-center mb-12 tracking-wide'>
        Weather Forecast App
      </h1>
      <Form setQueryObject={setQueryObject} />
      <Forecast queryObject={queryObject} />
    </div>
  );
}

export default App;

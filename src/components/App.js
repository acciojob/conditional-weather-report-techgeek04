import React from "react";
import {useState, useEffect} from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: "" });

  useEffect(() => {
    const weatherInput = { temperature: 25, conditions: "Sunny" };
    setWeather(weatherInput);
  }, []);

  return (
    <div>
        {/* Do not remove the main div */}
    <WeatherDisplay weather={weather} />
    </div>
  )
}

export default App

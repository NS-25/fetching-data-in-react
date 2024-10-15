import { useState, useEffect } from "react";

import * as weatherService from "./services/weatherService";
import WeatherSearch from "./components/WeatherSearch";
import WeatherDetails from "./components/WeatherDetails";
import "./App.css";
// src/App.jsx

const App = () => {
  const [weather, setWeather] = useState({});
  //write useEffect after useState...
  // src/App.jsx
  useEffect(() => {
    const fetchDefaultData = async () => {
      const data = await weatherService.show("New York");
      const newWeatherState = {
        location: data.location.name,
        temperature: data.current.temp_f,
        condition: data.current.condition.text
      };
      setWeather(newWeatherState);
    };

    // Call the fetch function when the page loads:
    fetchDefaultData();
  }, []);

  const fetchData = async city => {
    const data = await weatherService.show(city);
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text
    };
    setWeather(newWeatherState);
  };

  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData} />
      <WeatherDetails weather={weather} />
    </main>
  );
};

export default App;

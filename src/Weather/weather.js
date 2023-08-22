import React, { useState, useEffect } from "react";
import "./style.css";
import "./weatherCard";
import WeatherCard from "./weatherCard";
// API Key
// {
//     key : 9c32898a0742e43f3818ee6c3e9dcc26
//  Calling API Using city name : https://api.openweathermap.org/data/2.5/weather?q=pune&appid=0890b70bc1e885f112f3e9efe6765492

const Weather = () => {
  // Default city name
  const defaultCityName = "Indore";

  // Use state variables
  const [searchValue, setSearchValue] = useState(defaultCityName);
  const [weatherInfo, setWeatherInfo] = useState({});

  // Functions
  // async-await for api calls
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=0890b70bc1e885f112f3e9efe6765492`;
      const response = await fetch(url);
      const data = await response.json();
      // console.log(typeof data);

      // / Getting weather data
      // cityName
      const { name: cityName } = data;
      const { temp, humidity, pressure } = data.main;
      const { main: weatherMood } = data.weather[0];
      const { speed } = data.wind;
      const { sunset, country } = data.sys;

      const myNewWeatherInfo = {
        temp,
        weatherMood,
        cityName,
        country,
        sunset,
        humidity,
        pressure,
        speed,
      };
      console.log(myNewWeatherInfo);
      setWeatherInfo(myNewWeatherInfo);
    } catch (error) {
      // console.log(error);
    }
  };

  // For the first time we want to get weather data of default city name = Indore. So, we will use useEffect
  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus={true}
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>

      {/* Weather card Here */}
      {/* passing object through props */}
      <WeatherCard weatherInfo={weatherInfo} />
    </>
  );
};

export default Weather;

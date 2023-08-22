import React from "react";
import { useEffect } from "react";

const WeatherCard = ({ weatherInfo }) => {
  // Use state varaibles
  const [weatherState, setWeatherState] = React.useState("");
  // Getting weather data
  // cityName
  //   const { name: cityName } = data;
  //   const { temp, humidity, pressure } = data.main;
  //   const { main: weatherMood } = data.weather[0];
  //   const { speed } = data.wind;
  //   const { sunset, country } = data.sys;

  const {
    temp,
    weatherMood,
    cityName,
    country,
    sunset,
    humidity,
    pressure,
    speed,
  } = weatherInfo;

  //   console.log(weatherInfo.temp);
  //   Setting sunset time
  const sec = sunset;
  const date = new Date(sec * 1000);

  //   For displaying icon acoording to weather state\
  useEffect(() => {
    if (weatherMood) {
      switch (weatherMood) {
        case "Clouds":
          setWeatherState("wi-cloud");
          break;

        case "Haze":
          setWeatherState("wi-fog");
          break;

        case "Clear":
          setWeatherState("wi-day-sunny");
          break;

        case "Rain":
          setWeatherState("wi-rain");
          break;

        case "Mist":
          setWeatherState("wi-mist");
          break;

        case "Thunderstorm":
          setWeatherState("wi-thunderstorm");
          break;
        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weatherMood]);

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>

        {/* Weather Info */}
        <div className="weatherInfo">
          <div className="temperature">
            <span>{Math.round(temp * 10) / 10}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weatherMood}</div>
            <div className="place">
              {cityName}, {country}
            </div>
          </div>
        </div>

        {/* For date */}
        <div className="date">
          {new Date().toLocaleTimeString()} {new Date().toLocaleDateString()}
        </div>

        {/* For 4 columns */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                Sunset <br /> {date.getHours()}:{date.getMinutes()} PM
              </p>
            </div>
          </div>

          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                Humidity <br /> {humidity} %
              </p>
            </div>
          </div>

          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-cloud"}></i>
              </p>
              <p className="extra-info-leftside">
                Pressure <br /> {pressure} MMA
              </p>
            </div>
          </div>

          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"fa-solid fa-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                Wind <br />
                {speed}Km/hr
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard;

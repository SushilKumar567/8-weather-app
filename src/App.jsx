import { React, useState, useEffect } from "react";
import "./App.css";
import "./Media.css";
import Clouds from "./assets/images/clouds.png";
import Clear from "./assets/images/clear.png";
import Rain from "./assets/images/rain.png";
import Drizzle from "./assets/images/drizzle.png";
import Mist from "./assets/images/mist.png";
import Humidity from "./assets/images/humidity.png";
import Wind from "./assets/images/wind.png";

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");

  const apiKey = "17d705c3dde0852cbc7e776fb8fbc222";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const checkWeather = async (city) => {
    if (city.trim() === "") {
      alert("Please enter the city name!");
      setCity("");
      return;
    }
    try {
      const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
      const data = await response.json();
      if (!response.ok) {
        alert(data.message);
        setCity("");
        return;
      }
      // console.log(data);
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        condition: data.weather[0].main,
      });
      setCity("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkWeather("chandigarh");
  }, []);

  const getWeatherIcon = (condition) => {
    if (condition === "Clouds") {
      return Clouds;
    } else if (condition === "Clear") {
      return Clear;
    } else if (condition === "Rain") {
      return Rain;
    } else if (condition === "Drizzle") {
      return Drizzle;
    } else if (condition === "Mist") {
      return Mist;
    } else {
      return Clear;
    }
  };

  return (
    <div className="card">
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={() => checkWeather(city)}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div className="cont">
        <div className="container">
          <div className="weather-img">
            <img
              src={getWeatherIcon(weatherData.condition)}
              alt=""
              className="weather-icon"
            />
          </div>
          <div className="size">
            <p className="temp">{weatherData.temperature}°c</p>
            <p className="city">{weatherData.location}</p>
          </div>
        </div>
        <div className="details">
          <div className="col">
            <img src={Humidity} alt="" />
            <div>
              <p className="humidity">{weatherData.humidity}%</p>
              <h3>Humidity</h3>
            </div>
          </div>
          <div className="col">
            <img src={Wind} alt="" />
            <div className="size2">
              <p className="wind">{weatherData.windSpeed}km/h</p>
              <h3>Wind Speed</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

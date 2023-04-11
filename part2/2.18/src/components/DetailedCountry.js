import WeatherData from "../services/WeatherData";
import { useEffect, useState } from "react";

const DetailedCountry = (props) => {
  const [weatherData, setWeatherData] = useState([]);
  //   useEffect(() => {
  //     WeatherData.then((data) => console.log("weather",data));
  //   }, []);
  useEffect(() => {
    WeatherData(props.obj.capital).then((data) => {
      setWeatherData(data);
    });
  }, []);
  // console.log("props",props);
  //   console.log(weatherData);
  if(weatherData.weather === undefined){
    return(<div></div>)
  }
  const iconId = weatherData.weather[0].icon;
  //   console.log(iconId)
  const imgSrc = `https://openweathermap.org/img/wn/${iconId}@2x.png`;

  return (
    <div>
      <h3>{props.obj.name.official}</h3>
      <p>Capital : {props.obj.capital[0]}</p>
      <p>Area: {props.obj.area}</p>
      <img width={100} src={props.obj.flags.png} alt="CoatOfArms" />

      <div>
        <h3>Weather Data</h3>
        <p>
          {weatherData.main.temp} K in {weatherData.name}
        </p>
        <img src={imgSrc} alt="Weather Icon"></img>
        <p>Wind speed: {weatherData.wind.speed} km/h </p>
      </div>
    </div>
  );
};

export default DetailedCountry;

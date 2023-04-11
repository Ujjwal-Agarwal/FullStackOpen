import axios from "axios";
const api_key = process.env.REACT_APP_API_KEY
// const baseUrl = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${api_key}`

const WeatherData = (cityName)=>{
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}`)
    return request.then((response)=>response.data);
}
export default WeatherData;
import { Weather } from "../models/Weather.Model.js";

let Weathers = []

let createWeather = (temperature, localization,time , day, state) => {
    const newWeather =  new Weather(temperature, localization,time , day, state)
     Weathers.push(newWeather)
     return newWeather    
}



let AllWeathers = () =>{
    return Weathers
}


let deleteWeather = (temperature,localization,day) =>{
     let weather = find(item => item.temperature === temperature && item.localization === localization &&  item.day === day )
     if(weather)  {
     let weatherIndex = Weathers.findIndex( weather => weather.temeperature === temperature && weather.localization === localization && weather.day === day );
     Weathers.splice(weatherIndex,1) 
     }
}

export {createWeather, AllWeathers, deleteWeather}
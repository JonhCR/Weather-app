import {Injectable} from 'angular2/core';
import {Weather} from './weather';


@Injectable()
export class WeatherService {

  getWeather = function (city:string){
    var weather:Weather;
    if(city.toLocaleLowerCase() == "viena"){
      weather = {
        "id" : 1,
        "city" : "viena",
        "main" : "nublado",
        "description" : "Bastante nublado"
      }
    }else if (city.toLocaleLowerCase() == "london"){
      weather = {
        "id" : 2,
        "city" : "london",
        "main" : "lloviendo",
        "description" : "Lluvias torrenciales"
      }
    }
    return weather;
  }


}

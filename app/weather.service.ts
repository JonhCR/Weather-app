import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Weather} from './weather';


@Injectable()
export class WeatherService {

  private weatherApiUrl:string = "http://api.openweathermap.org/data/2.5/weather?appid=31f2d00347a206865ef7abf5dc903d78";

  constructor(private http:Http){}

  getWeatherUrl(city:string){
    return this.weatherApiUrl + "&q=" + city;
  }

  getWeather(city:string){
    return new Observable(observable => {
      this.http.get(this.getWeatherUrl(city))
        .map(res => res.json())
        .subscribe(res => {
          if (res.cod == "404"){
            observable.error(res.message);
          }else{
            var weather:Weather = res.weather[0];
            weather.city = city;
            observable.next(weather);
          }
        });

    });
  }


}

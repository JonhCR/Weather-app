import {Component} from 'angular2/core';
import {Weather} from './weather';

@Component({
    selector: 'my-app',
    template: '<input [(ngModel)] = "city" placeholder="Busca alguna ciudad" (keyup)="addCity(city , $event)"> ' +
    '<h2>Este es el clima en la ciudad : {{city}}</h2>' +
    '<ul *ngFor="#weather of weatherOfCities"> <li>' +
    '<h2>{{weather.city}}</h2>' +
    '<ul>' +
    '<li>Clima : {{weather.main}}</li><li>Descripción : {{weather.description}}</li>' +
    '</ul>' +
    '</li> </ul>'
})
export class AppComponent {

  public city:string ;
  public cities: Array<string>;
  public weatherOfCities: Array<Weather>;

  constructor(){
    this.city = "";
    this.weatherOfCities = [];
  }

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

  addCity = function (city:string , $event){
        if($event.keyCode == 13){
            var weather = this.getWeather(city);
            if(weather){
              this.weatherOfCities.push(this.getWeather(city));
            }
            this.city = "";
        }
  }
}

import {Component} from 'angular2/core';
import {Weather} from './weather';

@Component({
    selector: 'my-app',
    template: `<header><h1>Clima App</h1></header>
    <div class="content">
      <input [(ngModel)] = "city" placeholder="Busca alguna ciudad" (keyup)="addCity(city , $event)"> 
      <h2>Este es el clima en la ciudad : {{city}}</h2>
      <ul *ngFor="#weather of weatherOfCities" class="weather-card"> 
        <li>
          <h2>{{weather.city}}</h2>
          <ul>
            <li>Clima : {{weather.main}}</li>
            <li>Descripción : {{weather.description}}</li>
          </ul>
        </li> 
      </ul>
    </div> ` ,
    styles:[` 
      header h1 {
      padding: 10px;
      background: #5E9EA0;
      color: #F5F5F5;
      text-shadow: 1px 1px 4px #808080;
      }    
      .content{
      padding: 10px;
      }
      input{
      font-size: 10px;
      padding: 4px;
      }
      .weather-card{
      border-bottom: 1px solid #03D3D3;
      padding-bottom: 10px;
      }
    ` ]

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

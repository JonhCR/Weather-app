import {Component} from 'angular2/core';
import {Weather} from './weather';
import {WeatherService} from './weather.service';

@Component({
    selector: 'my-app',
    template: `<header><h1>Clima App</h1></header>
    <div class="content">
      <input [(ngModel)] = "city" placeholder="Busca alguna ciudad" (keyup)="addCity(city , $event)"> 
      <p *ngIf="errorMessage" class="error-messsage">{{errorMessage}}</p>
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
      .error-messsage{
      color: red;
      font-size: 8px;
      }
    ` ] ,
  providers : [WeatherService]

})
export class AppComponent {

  public city:string ;
  public cities: Array<string>;
  public weatherOfCities: Array<Weather>;
  public errorMessage : string;

  constructor( private weatherService:WeatherService ){
    this.city = "";
    this.weatherOfCities = [];
  }


  addCity (city:string , $event){

        if($event.keyCode == 13){
          this.weatherService.getWeather(city)
            .subscribe(weather => {
              if(weather){
                this.weatherOfCities.push(weather);
                this.errorMessage = undefined;
              }else{
                var cityWithoutWeather = city;
                this.errorMessage = "No hay datos de clima para " + cityWithoutWeather;
              }
              this.city ="";

            } , error => {
              this.city = "";
              this.errorMessage = error;
            });


        }
  }
}

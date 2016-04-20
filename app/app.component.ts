import {Component} from 'angular2/core';
import {Weather} from './weather';

@Component({
    selector: 'my-app',
    template: ' <ul> <li>Clima tipo : {{ weather.main}}</li> <li> Clima descripción : {{ weather.description }}</li>  </ul>'
})
export class AppComponent {

  city :string;
  weather:Weather;

  constructor(){
   this.weather = new Weather(1 ,"San josé" , "muy nublado" , "nublado");
  }

}

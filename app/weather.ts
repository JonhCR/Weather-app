import {IWeather} from './iweather';

export class Weather implements IWeather {

  constructor(public id:number , public city:string , public description:string , public main:string){

  }

}

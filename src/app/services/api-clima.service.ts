import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class ApiClimaService {
  ///
  busqueda = {city:null,country:null};
  clima:any;
  ///
  constructor() { }
  ///
  setBusqueda(data:any){
    this.busqueda.city = data.city;
    this.busqueda.country = data.country;
    //console.log(this.busqueda);
    this.clima = this.consultarClima(this.busqueda);
  }

  async consultarClima(data:any){
    try {
      let {city,country}=data;
      let appId = environment.API_KEY;
      let url = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`;
      let ubic:any = await axios(url);//consulta a la API para coordenadas
      let datos = ubic.data[0];
      let {lat,lon} = datos; // latitud, lonitud
      if(lat != undefined){
        let urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
        datos = await axios(urlClima); // consulta API clima
        return datos.data;
      }else{
        return null;
      }
      //console.log(datos.data)
    } catch (error) {
      console.log(error);
    }
  }
  
  async getClima(){
    return await this.clima;
  }
   
}

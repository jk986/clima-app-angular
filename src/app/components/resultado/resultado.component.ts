import { Component, OnInit } from '@angular/core';
import { ApiClimaService } from 'src/app/services/api-clima.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit{
  clima:any;
  resultado:any;
  showSpinner:boolean;
  constructor(private _apiClimaService:ApiClimaService){
    this.resultado = {
      name:'',
      main:''
    };
    this.showSpinner = false;
  }
  ngOnInit(): void {
    this.showSpinner = true;
    this.getClima();
  }
  async getClima(){
    this.clima = await this._apiClimaService.getClima();
    let {name,main} = this.clima;
    this.resultado.name = name;
    this.resultado.main = main;
    this.showSpinner = false;
    console.log(this.clima);
  }
}

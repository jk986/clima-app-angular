import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { COUNTRIES } from 'src/app/data/constants';
import { ApiClimaService } from 'src/app/services/api-clima.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  ///
  public countries:Array<any>;
  public busqueda:any;
  public message:any;
  @Output() showResultado = new EventEmitter();
  ///
  constructor(private _apiClimaService:ApiClimaService){
    this.countries = new Array();
    this.busqueda = {
      city:'',
      country:''
    };
    this.message = null;
  }
  ///
  ngOnInit(): void {
    this.countries = COUNTRIES.map(country=>country)
  }

  onSubmit(ev:any){
    ev.preventDefault();
    if(Object.values(this.busqueda).includes('')){
      this.message = 'Todos los campos son obligatorios';
      this.showResultado.emit(false);
    }else{
      this.message = null;
      this._apiClimaService.setBusqueda(this.busqueda);
      this.showResultado.emit(true)
    }
    //console.log(this.busqueda);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent {
  showResultado:any;
  constructor(){
  }
  getShowResult = (ev:any) => this.showResultado = ev;
}

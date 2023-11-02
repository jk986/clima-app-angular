import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatura'
})
export class TemperaturaPipe implements PipeTransform {
  public kelvin = 273.15;
  transform(value:any): unknown {
    let clima = value - this.kelvin;
    return parseInt(String(clima));
  }

}

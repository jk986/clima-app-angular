import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClimaComponent } from './components/clima/clima.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { AlertaComponent } from './components/alerta/alerta.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { TemperaturaPipe } from './pipes/temperatura.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    ClimaComponent,
    FormularioComponent,
    AlertaComponent,
    ResultadoComponent,
    TemperaturaPipe,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

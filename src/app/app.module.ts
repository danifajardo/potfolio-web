import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MarcoInformacionComponent } from './marco-informacion/marco-informacion.component';
import { MarcoProyectosComponent } from './marco-proyectos/marco-proyectos.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MarcoInformacionComponent,
    MarcoProyectosComponent,
    FormularioContactoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

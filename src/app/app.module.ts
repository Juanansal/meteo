import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Componente padre
import { AppComponent } from './app.component';

// Componentes globales
import { CabeceraComponent } from './global/components/cabecera/cabecera.component';
import { PieComponent } from './global/components/pie/pie.component';
import { HomeComponent } from './global/components/home/home.component';

// Componentes historico español


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

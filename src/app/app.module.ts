import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

// Componente padre
import { AppComponent } from './app.component';

// Componentes globales
import { CabeceraComponent } from './global/components/cabecera/cabecera.component';
import { PieComponent } from './global/components/pie/pie.component';
import { HomeComponent } from './global/components/home/home.component';


// Componentes historico español
import { MainHistoricoComponent } from './historico-spain/components/main-historico/main-historico.component';
import { SelectCiudadComponent } from './historico-spain/components/select-ciudad/select-ciudad.component';

// Servicios
import { AemetApiService } from './global/services/aemet-api.service';


@NgModule({
	declarations: [
		AppComponent,
		CabeceraComponent,
		PieComponent,
		HomeComponent,
		
		// Componentes historico españa
		MainHistoricoComponent,
		SelectCiudadComponent
	],
	imports: [
		BrowserModule,
		APP_ROUTING, // rutas
		HttpClientModule    // Http
	],
	providers: [AemetApiService],
	bootstrap: [AppComponent]
})
export class AppModule { }

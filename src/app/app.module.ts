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
import { SelectEstacionComponent } from './historico-spain/components/select-estacion/select-estacion.component';
import { SelectFechasComponent } from './historico-spain/components/select-fechas/select-fechas.component';
import { GraficasHistoricoComponent } from './historico-spain/components/graficas-historico/graficas-historico.component';


// Componentes historico radar
import { MainRadarComponent } from './historico-radar/components/main-radar/main-radar.component';

// Servicios
import { AemetApiService } from './global/services/aemet-api.service';
import { DataHistoricoService } from './historico-spain/services/data-historico.service';
import { DataGraficasService } from './historico-spain/services/data-graficas.service';



@NgModule({
	declarations: [
		AppComponent,
		CabeceraComponent,
		PieComponent,
		HomeComponent,
		
		// Componentes historico españa
		MainHistoricoComponent,
		SelectCiudadComponent,
		SelectEstacionComponent,
		SelectFechasComponent,
		GraficasHistoricoComponent,

		// Componentes historico radar
		MainRadarComponent
	],
	imports: [
		BrowserModule,
		APP_ROUTING, // rutas
		HttpClientModule    // Http
	],
	providers: [AemetApiService, DataHistoricoService, DataGraficasService],
	bootstrap: [AppComponent]
})
export class AppModule { }

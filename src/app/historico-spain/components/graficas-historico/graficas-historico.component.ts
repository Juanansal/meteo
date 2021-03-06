import { Component, OnInit } from '@angular/core';
import { DataHistoricoService } from '../../services/data-historico.service';

// Variable necesarias para highcharts
import * as Highcharts from 'highcharts';
import { DataGraficasService } from '../../services/data-graficas.service';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);


@Component({
	selector: 'app-graficas-historico',
	templateUrl: './graficas-historico.component.html',
	styleUrls: ['./graficas-historico.component.css']
})
export class GraficasHistoricoComponent implements OnInit {

	constructor( public data: DataHistoricoService, public graficas: DataGraficasService ) { }

	public x:number = 10;

	test() {
		//this.x = 35;
		//let opciones = this.graficas.asignarOpcionesTemperaturaMensual();
		//Highcharts.chart('container', opciones);
	}

	ngOnInit() {

		// Extraer valores por defecto
		let nombre = this.data.datosEstacion.nombre;
		let opciones = null;

		// Pinta la grafica segun el modo seleccionado (Boton pulsado)
		switch(this.data.modo) {
			case 1: opciones = this.graficas.asignarOpcionesGraficaMes(this.data.datosMES, nombre);
					break;

			case 2: opciones = this.graficas.asignarOpcionesGraficaDia(this.data.datosDIA, nombre);
					break;
		}
		
		Highcharts.chart('container', opciones);
	}

}

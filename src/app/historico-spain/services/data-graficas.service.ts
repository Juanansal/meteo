import { Injectable } from '@angular/core';


// Variable necesarias para highcharts
import * as Highcharts from 'highcharts';
import { DataHistoricoService } from './data-historico.service';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Injectable({
  	providedIn: 'root'
})
export class DataGraficasService {

	constructor( public data: DataHistoricoService) { }

	public asignarOpcionesTemperaturaMensual(min: Array<number>, med: Array<number>, max: Array<number>, nombre: string) {


		console.log(this.data.datosEstacion);


		let opciones: any = {
			chart: {
				type: 'line'
			},
			title: {
				text: 'Temperatura media mensual de '+nombre
			},
			subtitle: {
				text: 'Fuente: aemet.com'
			},
			xAxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
			},
			yAxis: {
				title: {
					text: 'Temperatura (°C)'
				}
			},
			plotOptions: {
				line: {
					dataLabels: {
						enabled: true
					},
					enableMouseTracking: false
				}
			},
			series: [{
				name: 'Min',
				data: min,
				color: 'blue'
			}, {
				name: 'Med',
				data: med,
				color: 'orange'
			}, {
				name: 'Max',
				data: max,
				color: 'red'
			}]
		}
		return opciones;
	}

}

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

/*
	public asignarOpcionesTemperaturaMensual(min?: Array<string>, med?: Array<string>, max?: Array<string>) {
		let opciones: any = {
			chart: {
				type: 'line'
			},
			title: {
				text: 'Temperatura media mensual'
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
				name: 'Tokyo',
				data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, this.x, 18.3, 13.9, this.x]
			}, {
				name: 'London',
				data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
			}]
		}
		return opciones;
	}
	*/

	test() {
		this.x = 35;
		let opciones = this.graficas.asignarOpcionesTemperaturaMensual();
		Highcharts.chart('container', opciones);
	}

	ngOnInit() {

		let min = this.data.datosParaGrafica;
		let med = [];
		let max = [];


		let opciones = this.graficas.asignarOpcionesTemperaturaMensual(min, med, max);
		Highcharts.chart('container', opciones);
	}

}

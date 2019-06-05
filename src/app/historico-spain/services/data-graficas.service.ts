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

	public asignarOpcionesGraficaMes(min: Array<number>, med: Array<number>, max: Array<number>, lluvia: Array<number>, nombre: string) {


		console.log(this.data.datosEstacion);


		let opciones: any = {
			chart: {
				zoomType: 'xy'
			},
			title: {
				text: 'DATOS'
			},
			subtitle: {
				text: 'Subtitulo'
			},
			xAxis: [{
				categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
					'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
				crosshair: true
			}],
			yAxis: [{ // Primary yAxis
				labels: {
					format: '{value}°C',
					style: {
						color: Highcharts.getOptions().colors[1]
					}
				},
				title: {
					text: 'Temperatura',
					style: {
						color: Highcharts.getOptions().colors[1]
					}
				}
			}, { // Secondary yAxis
				title: {
					text: 'Lluvia',
					style: {
						color: Highcharts.getOptions().colors[0]
					}
				},
				labels: {
					format: '{value} mm',
					style: {
						color: Highcharts.getOptions().colors[0]
					}
				},
				opposite: true
			}],
			tooltip: {
				shared: true
			},
			/*
			legend: {
				layout: 'vertical',
				align: 'left',
				x: 20,
				verticalAlign: 'top',
				y: 20,
				floating: true,
				backgroundColor: 'rgba(255,255,255,0.25)'
			
			},
			*/
			series: [{
				name: 'Lluvia',
				type: 'column',
				yAxis: 1,
				data: lluvia,
				tooltip: {
					valueSuffix: ' mm'
				}
			
			}, {
				name: 'Temperatura Maxima',
				type: 'spline',
				data: max,
				color: 'red',
				tooltip: {
					valueSuffix: '°C'
				}
			},
			{
				name: 'Temperatura Media',
				type: 'spline',
				data: med,
				color: 'orange',
				tooltip: {
					valueSuffix: '°C'
				}
			},
			{
				name: 'Temperatura Minima',
				type: 'spline',
				data: min,
				color: 'blue',
				tooltip: {
					valueSuffix: '°C'
				}
			}
		]
		}
		return opciones;
	}


	public asignarOpcionesGraficaDia(datos: any, nombre: string) {


		console.log(this.data.datosEstacion);


		let opciones: any = {
			chart: {
				zoomType: 'xy'
			},
			title: {
				text: 'DATOS'
			},
			subtitle: {
				text: 'Subtitulo'
			},
			xAxis: [{
				categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
					'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
				crosshair: true
			}],
			yAxis: [{ // Primary yAxis
				labels: {
					format: '{value}°C',
					style: {
						color: Highcharts.getOptions().colors[1]
					}
				},
				title: {
					text: 'Temperatura',
					style: {
						color: Highcharts.getOptions().colors[1]
					}
				}
			}, { // Secondary yAxis
				title: {
					text: 'Lluvia',
					style: {
						color: Highcharts.getOptions().colors[0]
					}
				},
				labels: {
					format: '{value} mm',
					style: {
						color: Highcharts.getOptions().colors[0]
					}
				},
				opposite: true
			}],
			tooltip: {
				shared: true
			},
			/*
			legend: {
				layout: 'vertical',
				align: 'left',
				x: 20,
				verticalAlign: 'top',
				y: 20,
				floating: true,
				backgroundColor: 'rgba(255,255,255,0.25)'
			
			},
			*/
			series: [{
				name: 'Lluvia',
				type: 'column',
				yAxis: 1,
				data: datos.prec,
				tooltip: {
					valueSuffix: ' mm'
				}
			
			}, {
				name: 'Temperatura Maxima',
				type: 'spline',
				data: datos.max,
				color: 'red',
				tooltip: {
					valueSuffix: '°C'
				}
			},
			{
				name: 'Temperatura Media',
				type: 'spline',
				data: datos.med,
				color: 'orange',
				tooltip: {
					valueSuffix: '°C'
				}
			},
			{
				name: 'Temperatura Minima',
				type: 'spline',
				data: datos.min,
				color: 'blue',
				tooltip: {
					valueSuffix: '°C'
				}
			}
		]
		}
		return opciones;
	}

}

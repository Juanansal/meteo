import { Injectable } from '@angular/core';


// Variable necesarias para highcharts
import * as Highcharts from 'highcharts';
import { DataHistoricoService, DatosGrafica } from './data-historico.service';

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

	public asignarOpcionesGraficaMes(datos: DatosGrafica, nombre: string) {


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
				data: datos.lluvia,
				tooltip: {
					valueSuffix: ' mm'
				}
			
			}, {
				name: 'Temperatura Maxima',
				type: 'spline',
				data: datos.tempMaxima,
				color: 'red',
				tooltip: {
					valueSuffix: '°C'
				}
			},
			{
				name: 'Temperatura Media',
				type: 'spline',
				data: datos.tempMedia,
				color: 'orange',
				tooltip: {
					valueSuffix: '°C'
				}
			},
			{
				name: 'Temperatura Minima',
				type: 'spline',
				data: datos.tempMinima,
				color: 'blue',
				tooltip: {
					valueSuffix: '°C'
				}
			}
		]
		}
		return opciones;
	}


	public asignarOpcionesGraficaDia(datos: DatosGrafica, nombre: string) {


		console.log(datos);


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
				categories: ['1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32'],
				crosshair: true
			}],
			yAxis: [{ // Primary yAxis
				labels: {
					format: '{value}°C',
					style: {
						color: Highcharts.getOptions().colors[1],
						min: 0
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
				data: datos.lluvia,
				tooltip: {
					valueSuffix: ' mm'
				}
			
			}, {
				name: 'Temperatura Maxima',
				type: 'spline',
				data: datos.tempMaxima,
				color: 'red',
				tooltip: {
					valueSuffix: '°C'
				}
			},
			{
				name: 'Temperatura Media',
				type: 'spline',
				data: datos.tempMedia,
				color: 'orange',
				tooltip: {
					valueSuffix: '°C'
				}
			},
			{
				name: 'Temperatura Minima',
				type: 'spline',
				data: datos.tempMinima,
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

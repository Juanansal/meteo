import { Injectable } from '@angular/core';

@Injectable({
  	providedIn: 'root'
})
export class DataHistoricoService {

	todasEstaciones: any = [];

	ciudad: string;
	estacionesCiudad: any = [];
	datosEstacion: any = null;

	// Datos especificos de una estacion seleccionada (Para grafica)
	modo: number = -1;
	datosParaGrafica: any = [];  // Datos extraidos con los datos especificos para la grafica
	tempMedia_MES: any = [];
	tempMaxima_MES: any = [];
	tempMinima_MES: any = [];
	lluvia_MES: any = [];

	 
	



	constructor() { }
	
	vaciar() {
		this.estacionesCiudad = [];
		this.datosEstacion = null;
		this.modo = -1;
		this.datosParaGrafica = [];
	}


	// Extrae los datos de las temperaturas por mes de los datos de la estacion
	asignarDatosPorMes(): void {
		let tempMin: Array<number> = [];
		let tempMed: Array<number> = [];
		let tempMax: Array<number> = [];
		let lluvia: Array<number> = [];

		console.log(this.datosEstacion);

		if(this.datosEstacion) {
			for(let i=0; i<12; i++)
			{
				let datoMin = Number.parseFloat(this.datosParaGrafica[i].tm_min);
				let datoMed = Number.parseFloat(this.datosParaGrafica[i].tm_mes);
				let datoMax = Number.parseFloat(this.datosParaGrafica[i].tm_max);
				let datoLluvia = Number.parseFloat(this.datosParaGrafica[i].p_mes);

				console.log(datoMin);
				tempMin.push(datoMin);
				tempMed.push(datoMed);
				tempMax.push(datoMax);
				lluvia.push(datoLluvia);
			}
		}

		

		this.tempMinima_MES = tempMin;
		this.tempMedia_MES = tempMed;
		this.tempMaxima_MES = tempMax;
		this.lluvia_MES = lluvia;
	}
}

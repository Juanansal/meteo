import { Injectable } from '@angular/core';

@Injectable({
  	providedIn: 'root'
})
export class DataHistoricoService {

	todasEstaciones: any = [];

	ciudad: string;
	estacionesCiudad: any = [];

	datosEstacion: any = null;



	// 1 Lineas
	modo: number = -1;
	datosParaGrafica: any = [];



  	constructor() { }
}

import { Component, OnInit } from '@angular/core';
import { DataHistoricoService } from '../../services/data-historico.service';
import { AemetApiService } from 'src/app/global/services/aemet-api.service';

@Component({
	selector: 'app-select-fechas',
	templateUrl: './select-fechas.component.html',
	styleUrls: ['./select-fechas.component.css']
})

export class SelectFechasComponent implements OnInit {

	public anyos: Array<number> = [];
	cargando: boolean = false;

    constructor( public data: DataHistoricoService, public apiAemet: AemetApiService) { }

    ngOnInit() {
		this.pintarAnyos();
    }

    pintarAnyos() {
		let anyoHoy: number = new Date().getFullYear();

		for(let i=1980; i<=anyoHoy; i++) {
			this.anyos.push(i);
		}
		
	}
	
	public async pedirDatosMes(anyo:string) {

		// Inicializacion
		this.cargando = true;
		this. data.datosParaGrafica = []

		// Recopilacion de los datos a enviar
		console.log(this.data.datosEstacion);
		let estacion = this.data.datosEstacion.indicativo;

		await this.apiAemet.dameDatosPorMes(estacion,anyo)
		.then(data => {
			//console.log(data);

			// Se insertan los datos encontrados en la biblioteca (Selecciona la temperatura ya que es el por defecto)
			this.data.modo = 1;
			this.data.datosParaGrafica = data;
			this.data.asignarTemperaturaPorMes();

		})
		.catch(error => console.log(error));

		this.cargando = false;
		console.log(this.data.datosParaGrafica);

		
		
	}

}

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
		this.cargando = true;

		// Recopilacion de los datos a enviar
		console.log(this.data.datosEstacion);
		let estacion = this.data.datosEstacion.indicativo;

		await this.apiAemet.dameDatosPorMes(estacion,anyo)
		.then(data => {
			console.log(data)
		})
		.catch(error => console.log(error));

		this.cargando = false;
		
	}

}

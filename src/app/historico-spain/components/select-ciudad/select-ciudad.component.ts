import { Component, OnInit, OnChanges } from '@angular/core';
import { AemetApiService } from 'src/app/global/services/aemet-api.service';
import { DataHistoricoService } from '../../services/data-historico.service';

@Component({
	selector: 'app-select-ciudad',
	templateUrl: './select-ciudad.component.html',
	styleUrls: ['./select-ciudad.component.css']
})
export class SelectCiudadComponent implements OnInit {

	constructor( public aemetApi:AemetApiService, public data: DataHistoricoService) { }

	ngOnInit() {}

	public filtrarEstaciones(ciudad: string) {
		console.log(this.data.todasEstaciones);

		let todo: Array<any> = this.data.todasEstaciones;
		let filtrado: Array<any> = [];

		// Se realiza el filtrado
		for(let i=0; i<todo.length; i++) {
			if(todo[i].provincia == ciudad) {
				filtrado.push(todo[i]);
			}
		}

		// Se insertan los nuevos datos en la biblioteca
		this.data.estacionesCiudad = filtrado;
	}


}

import { Component, OnInit, OnChanges } from '@angular/core';
import { AemetApiService } from 'src/app/global/services/aemet-api.service';

@Component({
	selector: 'app-select-ciudad',
	templateUrl: './select-ciudad.component.html',
	styleUrls: ['./select-ciudad.component.css']
})
export class SelectCiudadComponent implements OnInit {

	public cargando: boolean = true
	public estaciones: any;

	constructor( public aemetApi:AemetApiService) { }

	ngOnInit() {
		this.cargarEstaciones();
	}


	public async cargarEstaciones() {

		await this.aemetApi.test()
		.then( data => {
			this.estaciones = data;
			this.cargando = false;
		})
		.catch( error => console.log(error));
		
	}

	public filtrarEstaciones(ciudad: string) {
		console.log(this.estaciones);
	}


}

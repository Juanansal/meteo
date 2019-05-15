import { Component, OnInit } from '@angular/core';
import { AemetApiService } from 'src/app/global/services/aemet-api.service';
import { DataHistoricoService } from '../../services/data-historico.service';

@Component({
  selector: 'app-main-historico',
  templateUrl: './main-historico.component.html',
  styleUrls: ['./main-historico.component.css']
})
export class MainHistoricoComponent implements OnInit {

	public cargando: boolean = true;

	constructor( public aemetApi: AemetApiService, public data: DataHistoricoService ) { }

	ngOnInit() {
		this.cargarEstaciones();
	}

	public async cargarEstaciones() {

		await this.aemetApi.dameEstaciones()
		.then( data => {
			this.data.todasEstaciones = data;
			this.cargando = false;
		})
		.catch( error => console.log(error));	
	}

}

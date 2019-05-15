import { Component, OnInit } from '@angular/core';
import { DataHistoricoService } from '../../services/data-historico.service';

@Component({
    selector: 'app-select-estacion',
    templateUrl: './select-estacion.component.html',
    styleUrls: ['./select-estacion.component.css']
})
export class SelectEstacionComponent implements OnInit {

    constructor( public data: DataHistoricoService) { }

    ngOnInit() {
    }

    seleccionEstacion(id: string) {
        let estaciones = this.data.estacionesCiudad;

        // Se selecciona en la lista de estaciones por ciudad, la que correcponde con su id, y se almacena individualmente
        for(let i=0; i<estaciones.length; i++) {

            if(estaciones[i].indicativo == id) {
                this.data.datosEstacion = estaciones[i];
                break;
            }
        }
        // console.log(this.data.datosEstacion);
    }

}

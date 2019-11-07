import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-radar',
    templateUrl: './main-radar.component.html',
    styleUrls: ['./main-radar.component.css']
})
export class MainRadarComponent implements OnInit {
    
    anyo: number = 2019;
    mes: number = 10;
    dia: number = 28;
    hora: number = 7;
    minuto: number = 15;
    url: string = `https://juanansal.com/data/meteo/radar-espana/2019-10-28-7-15.gif`;





    constructor() { }

    ngOnInit() {
        this.cambiarImagen();
    }   

    public cambiarImagen() {

        let fecha: Date;

        setInterval(() => {
        

            // Sumar Fecha
            fecha = new Date(this.anyo, this.mes, this.dia, this.hora, this.minuto);
            console.log(fecha);

            fecha.setMinutes(fecha.getMinutes()+30);
            console.log(fecha);
            console.log('----------------');
            // Actualizar los valores
            this.anyo = fecha.getFullYear();
            this.mes = fecha.getMonth();
            this.dia = fecha.getDate();
            this.hora = fecha.getHours();
            this.minuto = fecha.getMinutes();
                
            // Actualizar URL
            this.url = `https://juanansal.com/data/meteo/radar-espana/${this.anyo}-${this.mes}-${this.dia}-${this.hora}-${this.minuto}.gif`

        },100)
    }
    
    public avanzarFoto() {

    }

}

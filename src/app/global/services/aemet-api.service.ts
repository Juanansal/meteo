import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
 	providedIn: 'root'
})
export class AemetApiService {

    private host = 'http://juanansal.herokuapp.com'
    token = '';

	constructor(public http: HttpClient) { }
	  
	public dameEstaciones() {

		let promesa = new Promise( (resolve, reject) => {

            this.http.get(`${this.host}/api/meteo/dameEstaciones`)
            .subscribe(data => { 
                resolve(data);
            }, error => {
                reject(error);
            })
        })
        return promesa;
    }

    public dameDatosPorMes(idEstacion: string, anyo: string) {

		let promesa = new Promise( (resolve, reject) => {

            this.http.get(`${this.host}/api/meteo/dameDatosDeEstacionPorMes?anyo=${anyo}&estacion=${idEstacion}`)
            .subscribe(data => { 
                resolve(data);
            }, error => {
                reject(error);
            })
        })
        return promesa;
    }
	
}
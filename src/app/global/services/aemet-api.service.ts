import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
 	providedIn: 'root'
})
export class AemetApiService {

    private host = 'http://juanansal.herokuapp.com'
    token = '';

	constructor(public http: HttpClient) { }
	  
	public test() {

		let promesa = new Promise( (resolve, reject) => {

			console.log('Pasa por aqui');

            this.http.get(`${this.host}/api/meteo/dameEstaciones`)
            .subscribe(data => { 
                resolve(data);
            }, error => {
                reject(error);
            })
        })
        return promesa;
    }
	
}

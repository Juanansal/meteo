import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-select-fechas',
	templateUrl: './select-fechas.component.html',
	styleUrls: ['./select-fechas.component.css']
})
export class SelectFechasComponent implements OnInit {

    public anyos: Array<number> = [];

    constructor() { }

    ngOnInit() {
		this.pintarAnyos();
    }

    pintarAnyos() {
		let anyoHoy: number = new Date().getFullYear();

		for(let i=1980; i<=anyoHoy; i++) {
			this.anyos.push(i);
		}
    }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage {
	constructor(private _router: Router) {}

	goToSearch() {
		this._router.navigate(['search-box']);
	}
}

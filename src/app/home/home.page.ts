import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
	public loginDetails: any = { phone_no: '+91 - ' };
	constructor() {}

	ngOnInit() {}

	onSubmit(f) {}
}

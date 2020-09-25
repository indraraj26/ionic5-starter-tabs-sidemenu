import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
	selector: 'app-search-garage',
	templateUrl: './search-garage.page.html',
	styleUrls: ['./search-garage.page.scss'],
})
export class SearchGaragePage implements OnInit {
	constructor(
		private _router: Router,
		private _route: ActivatedRoute,
		private _navController: NavController,
	) {}

	ngOnInit() {}
}

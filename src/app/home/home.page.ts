import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
	constructor(private _router: Router, private _route: ActivatedRoute) { }

	ngOnInit() { }

	onChildrenHandler(i) {
		this._router.navigate([i], { relativeTo: this._route })
	}
}

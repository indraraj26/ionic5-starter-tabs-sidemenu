import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	constructor(
		private _navController: NavController,
		private _router: Router,
	) {}

	goToOTP() {
		this._navController.setDirection('forward');
		this._navController.navigateForward('/auth/otp');
	}
}

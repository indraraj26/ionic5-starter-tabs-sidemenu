import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
	selector: 'app-otp',
	templateUrl: './otp.component.html',
	styleUrls: ['./otp.component.scss'],
})
export class OtpComponent {
	constructor(private _navController: NavController) {}

	goToHome() {
		this._navController.setDirection('forward');
		this._navController.navigateRoot('/home');
	}
}

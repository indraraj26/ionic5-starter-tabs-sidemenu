import { Component, HostListener, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserDetailService } from '../services/user-detail.service';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.page.html',
	styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
	@HostListener('keydown', ['$event']) onKeyup(event: any) {
		console.log(event, 'hostlistern');
		console.log(event.which, 'hostlistern');
	}
	constructor(
		private _navController: NavController,
		private userDetailService: UserDetailService,
	) {}

	ngOnInit() {}

	onLogin() {
		this.userDetailService.setUserData();
		this._navController.navigateRoot('/tabs/dashboard');
	}

	onKeyUp(e) {
		console.log(e);
	}
	onKeyDown(e) {
		console.log(e);
	}
	onKeyPress(e) {
		console.log(e);
	}
	onHtmlTextArea(e) {
		console.log(e, 'htmltext');
	}
}

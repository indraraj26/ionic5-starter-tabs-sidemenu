import { Component, ViewChild } from '@angular/core';

import { Platform, NavController, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserDetailService } from './services/user-detail.service';
import { AppMinimize } from '@ionic-native/app-minimize/ngx';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent {
	@ViewChild(IonRouterOutlet, { static: true }) _ionRouterOutlet: IonRouterOutlet;
	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		private _navController: NavController,
		private _userDetailService: UserDetailService,
		private _app: AppMinimize,
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
			this.platform.backButton.subscribeWithPriority(-1, async (_) => {
				console.log(
					this._ionRouterOutlet.component,
				);
				if (!this._ionRouterOutlet.canGoBack()) {
					await this._app.minimize();
				}
			});
		});
	}

	onLogout(): void {
		this._userDetailService.clearUserData();
		this._navController.navigateRoot('/auth');
	}
}

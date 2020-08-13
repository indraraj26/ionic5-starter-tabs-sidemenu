import { SharedService } from './../shared.service';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage {
	constructor(
		private _platform: Platform,
		private _sharedService: SharedService,
	) {}

	ngOnInit() {
		this._platform
			.ready()
			.then(async (r) => {
				const permission = await this._sharedService.getPermissionMicrophone();
				console.log(permission, 'microphone permission');
				// const test = await this._sharedService.getRequestRunTimePermission();
				// console.log(test, 'for runtimepermission');
			})
			.catch((e) => console.log(e));
	}
}

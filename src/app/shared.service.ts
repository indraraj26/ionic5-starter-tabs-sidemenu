import { Injectable } from '@angular/core';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';

declare const cordova: any;

@Injectable({
	providedIn: 'root',
})
export class SharedService {
	constructor(private _diagnostic: Diagnostic) {}

	async getPermissionMicrophone() {
		try {
			const microPhoneAuthorized = await this._diagnostic.isMicrophoneAuthorized();
			console.log(microPhoneAuthorized, 'authorized');
			if (!microPhoneAuthorized) {
				// It is not requesting to get Microphone request authorization
				const requestMicroPhonePermission = await this._diagnostic.requestMicrophoneAuthorization();
				console.log(requestMicroPhonePermission);
				// here i always get DENIED_ALWAYs
				return requestMicroPhonePermission;
			}
		} catch (e) {
			console.log(e, 'error in get permission microphone');
		}
	}
	async getRequestRunTimePermission() {
		try {
			const request = await this._diagnostic.requestRuntimePermission(
				cordova.plugins.diagnostic.permission.RECORD_AUDIO,
			);
			console.log(request);
		} catch (e) {
			console.log(e, 'error in get runtime permssion');
		}
	}
}

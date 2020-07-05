import { Component } from '@angular/core';
import { IonCameraService, IConfig } from '@indraraj26/ion-camera';
import { Camera } from '@ionic-native/camera/ngx';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage {
	public showImage: string;
	config: IConfig = {
		quality: 50,
		destinationType: this._camera.DestinationType.FILE_URI,
		encodingType: this._camera.EncodingType.JPEG,
		mediaType: this._camera.MediaType.PICTURE,
		sourceType: this._camera.PictureSourceType.CAMERA,
	};

	constructor(
		private _ionCameraService: IonCameraService,
		private _camera: Camera,
	) {}

	async openCameraThroughService() {
		const result = await this._ionCameraService.cameraAction(this.config);
		console.log(result, 'blob or base64');
		this.showImage = result.filePath;
	}

	onCameraResult(event: any) {
		console.log(event, 'blob or base64');
		this.showImage = event.filePath;
	}
}

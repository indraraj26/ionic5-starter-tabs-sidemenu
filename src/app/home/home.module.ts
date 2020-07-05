import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { IonCameraModule } from '@indraraj26/ion-camera';
import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		HomePageRoutingModule,
		IonCameraModule,
	],
	declarations: [HomePage],
	providers: [Camera],
})
export class HomePageModule {}

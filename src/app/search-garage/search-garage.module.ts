import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchGaragePageRoutingModule } from './search-garage-routing.module';

import { SearchGaragePage } from './search-garage.page';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		FormsModule,
		IonicModule,
		SearchGaragePageRoutingModule,
		CommonModule,
	],
	declarations: [SearchGaragePage],
})
export class SearchBoxPageModule {}

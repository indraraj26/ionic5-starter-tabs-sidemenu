import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { BlankComponent } from './components/blank/blank.component';
import { ChildrenComponent } from './components/children/children.component';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
	declarations: [HomePage, BlankComponent, ChildrenComponent],
})
export class HomePageModule {}

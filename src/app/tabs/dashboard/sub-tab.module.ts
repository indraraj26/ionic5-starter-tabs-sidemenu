import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { SubTabRoutingModule } from './sub-tab-routing.module';
import * as Components from './components';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DashboardPage } from './dashboard.page';

@NgModule({
    declarations: 
    [DashboardPage, Components.TabFourComponent, Components.TabOneComponent, Components.TabTwoComponent, Components.TabThreeComponent],
    imports: [CommonModule, 		FormsModule,
		IonicModule, SubTabRoutingModule],
    exports: [SubTabRoutingModule]
})
export class SubTabModule {}

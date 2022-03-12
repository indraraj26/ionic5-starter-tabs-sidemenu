import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import * as Components from './components';
import { DashboardPage } from './dashboard.page';

const routes: Routes = [
   {
       path: '',
       component: DashboardPage,
       children: [
           {
           path: 'tab-one',
           component: Components.TabOneComponent
         },
           {
           path: 'tab-two',
           component: Components.TabOneComponent
         },
           {
           path: 'tab-three',
           component: Components.TabOneComponent
         },
           {
           path: 'tab-four',
           component: Components.TabOneComponent
         }, {
             path: '**',
             redirectTo: 'tab-one'
         }
    ]
   }, {
       path: '**',
       redirectTo: '/tabs/dashboard/tab-one'
   }
]  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubTabRoutingModule {}
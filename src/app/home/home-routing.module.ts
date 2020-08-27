import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ChildrenComponent } from './components/children/children.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomePage
      },
      {
        path: ':id',
        component: ChildrenComponent
      }, {
        path: '**',
        redirectTo: ''
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchGaragePage } from './search-garage.page';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				component: SearchGaragePage,
			},
			{
				path: '**',
				redirectTo: '',
			},
		],
	},
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SearchGaragePageRoutingModule {}

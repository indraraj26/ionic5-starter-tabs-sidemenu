import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{
		path: 'dashboard',
		loadChildren: () =>
			import('./dashboard/dashboard.module').then(
				(m) => m.DashboardPageModule,
			),
	},
	{
		path: 'home',
		loadChildren: () =>
			import('./home/home.module').then((m) => m.HomePageModule),
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			preloadingStrategy: PreloadAllModules,
			enableTracing: true,
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}

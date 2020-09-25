import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'auth',
		pathMatch: 'full',
	},
	{
		path: 'auth',
		loadChildren: () =>
			import('./@auth/auth.module').then((m) => m.authModule),
	},
	{
		path: 'home',
		loadChildren: () =>
			import('./home/home.module').then((m) => m.HomePageModule),
	},
	{
		path: 'search-box',
		loadChildren: () =>
			import('./search-garage/search-garage.module').then(
				(m) => m.SearchBoxPageModule,
			),
	},
	{ path: '**', redirectTo: '/auth/404' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			preloadingStrategy: PreloadAllModules,
			// enableTracing: true,
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}

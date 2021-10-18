import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/tabs'
	},
	{
		path: 'tabs',
		loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
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

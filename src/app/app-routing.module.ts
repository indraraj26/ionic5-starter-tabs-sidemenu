import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './services/authguard.guard';

const routes: Routes = [
	{ path: '', redirectTo: '/auth', pathMatch: 'full' },
	{ path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
	{
		path: 'tabs',
		loadChildren: './tabs/tabs.module#TabsPageModule',
		canActivate: [AuthguardGuard],
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

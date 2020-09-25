import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OtpComponent } from './components/otp/otp.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'login',
			},
			{
				path: 'login',
				component: LoginComponent,
			},
			{
				path: 'otp',
				component: OtpComponent,
			},
			{
				path: '404',
				component: NotFoundComponent,
			},
			{
				path: '**',
				redirectTo: 'login',
			},
		],
	},
	{
		path: '**',
		redirectTo: 'login',
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthRoutingModule {}

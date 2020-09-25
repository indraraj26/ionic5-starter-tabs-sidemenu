import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthRoutingModule } from './auth-routing.module';
import { OtpComponent } from './components/otp/otp.component';

@NgModule({
	declarations: [LoginComponent, NotFoundComponent, OtpComponent],
	imports: [CommonModule, IonicModule, FormsModule, AuthRoutingModule],
})
export class authModule {}

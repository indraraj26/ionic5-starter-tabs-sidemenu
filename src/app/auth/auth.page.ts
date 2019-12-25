import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserDetailService } from '../services/user-detail.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  constructor(
    private _navController: NavController,
    private userDetailService: UserDetailService,
  ) {}

  ngOnInit() {}

  onLogin() {
    this.userDetailService.setUserData();
    this._navController.navigateRoot('/tabs/dashboard');
  }
}

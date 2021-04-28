import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {UserToken} from '../../shared/user-token';
import {UserStatus} from '../user-list/user-list.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-status-menu',
  templateUrl: './status-menu.component.html',
  styleUrls: ['./status-menu.component.scss']
})
export class StatusMenuComponent implements OnInit {
  idToken: UserToken;

  constructor(private readonly authService: AuthService, private readonly jwtHelper: JwtHelperService, private readonly router: Router) { }

  ngOnInit(): void {
    this.idToken = this.jwtHelper.decodeToken(sessionStorage.getItem('id_token'));
  }

  onCheckInClick() {
    this.router.navigate(["dashboard", "logtime"]);
  }

  onCheckOutClick() {
    this.router.navigate(['dashboard', 'log-exercise']);
  }

  get userStatus() {
    return UserStatus;
  }
}

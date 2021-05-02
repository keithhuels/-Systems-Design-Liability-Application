/* tslint:disable:no-string-literal */
import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Route, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private readonly authService: AuthService, private readonly router: Router, private readonly matSnackBar: MatSnackBar) {
  }

  canActivate(snapshot: ActivatedRouteSnapshot): boolean {
    let hasRole = true;
    if (snapshot.data && snapshot.data['role']) {
      const roleToCheck = snapshot.data['role'];
      hasRole = this.authService.hasRole(roleToCheck);
      if (!hasRole) {
        this.router.navigate(["dashboard", "signin"]);
        this.matSnackBar.open('Unauthorized Access. Please sign in as an admin.', 'Ok', {
          duration: 3000
        });
      }
    }
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(["dashboard", "signin"]);
      return false;
    }
    return hasRole && this.authService.isAuthenticated();
  }
}

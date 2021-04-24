import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../components/dashboard/user-list/user-list.component';
import {shareReplay, tap} from 'rxjs/operators';
import * as moment from 'moment';
import {JwtHelperService} from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient, private readonly jwtHelper: JwtHelperService) {
  }

  isAuthenticated(): boolean {
    const token = sessionStorage.getItem('id_token');

    return !this.jwtHelper.isTokenExpired(token);
  }

  login(username: string, password: string) {
    return this.http.post<User>('auth/login', {username, password})
      .pipe(
        tap(res => this.setSession(res)),
        shareReplay());

  }

  private setSession(authResult) {
    sessionStorage.setItem('id_token', authResult.access_token);
    console.log(authResult);
  }

  logout() {
    sessionStorage.removeItem('id_token');
  }
}

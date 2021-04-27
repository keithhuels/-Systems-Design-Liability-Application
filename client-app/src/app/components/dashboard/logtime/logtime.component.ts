import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../services/auth/auth.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../user-list/user-list.component';
import {UsersService} from '../../shared/users.service';

@Component({
  selector: 'app-logtime',
  templateUrl: './logtime.component.html',
  styleUrls: ['./logtime.component.scss'],
})
export class LogtimeComponent implements OnInit {
  form: FormGroup;

  constructor(private readonly router: Router, private readonly authService: AuthService, private readonly http: HttpClient, private readonly usersService: UsersService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      hours: new FormControl(0),
      minutes: new FormControl(0)
    });
  }

  onSubmitTimeClick() {
    const currentUser = this.authService.getCurrentUserName();
    this.http.post<User>('users/checkin', {...this.form.value, username: currentUser}).subscribe(() => {
      this.authService.logout();
      this.usersService.getUsers();
      this.router.navigate(['dashboard']);
    });
  }

  onBackClick() {
    this.router.navigate(['dashboard', 'signin']);
  }
}

import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export enum UserStatus {
  LoggedIn,
  LoggedOut
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  _id: string;
  status: UserStatus;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private readonly http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<User[]>('users').subscribe((res) => this.users = res);
  }

  getUserStatus(user: User) {
    let status: string;
    switch (user.status) {
      case UserStatus.LoggedIn:
        status = 'Logged In';
        break;
      case UserStatus.LoggedOut:
        status = 'Logged Out';
        break;
    }
    return status;
  }

  getStatusClasses(user: User) {
    let classes: string[] = [];
    if (user.status === UserStatus.LoggedIn) {
      classes.push('active');
    }
    return classes.join(' ');
  }

  getUserName(user: User) {
    return `${user.firstName} ${user.lastName}`;
  }

  onUserClicked(user: User) {
    console.log(user._id);
    this.http.get<User>(`users/${user._id}`).subscribe((res) => console.log(res));
  }
}

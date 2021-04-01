import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export enum UserStatus {
  LoggedIn,
  LoggedOut
}

interface User {
  firstName: string;
  lastName: string;
  id: number;
  status: UserStatus
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[];
  constructor(private readonly http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<User[]>("http://localhost:3000/users").subscribe((res) => this.users = res);
  }

  getUserStatus(user: User) {
    let status: string;
    switch (user.status) {
      case UserStatus.LoggedIn: status = 'Logged In';
      break;
      case UserStatus.LoggedOut: status = 'Logged Out';
      break;
    }
    return status;
  }

  getStatusClasses(user: User) {
    let classes: string[] = [];
    if(user.status === UserStatus.LoggedIn) {
      classes.push('active');
    }
    return classes.join(' ')
  }

  getUserName(user: User) {
    return `${user.firstName} ${user.lastName}`;
  }
}

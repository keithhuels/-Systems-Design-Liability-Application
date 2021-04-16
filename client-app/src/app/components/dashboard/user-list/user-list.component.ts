import { Component, OnInit } from "@angular/core";
import {HttpClient} from '@angular/common/http';

export enum UserStatus {
  LoggedIn,
  LoggedOut,
}

export interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  status: UserStatus;
}

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<User[]>('users').subscribe((res) => this.users = res);
  }

  getUserStatus(user: User) {
    let status: string;
    switch (user.status) {
      case UserStatus.LoggedIn:
        status = "Logged In";
        break;
      case UserStatus.LoggedOut:
        status = "Logged Out";
        break;
    }
    return status;
  }

  checkedLoggedIn(user: User) {
    return user.status === UserStatus.LoggedIn;
  }

  getSingleUser(id: string) {
    this.http.get<User>(`users/${id}`).subscribe((res) => console.log());
  }

  getStatusClasses(user: User) {
    let classes: string[] = [];
    if (user.status === UserStatus.LoggedIn) {
      classes.push("active");
    }
    {
      if (user.status === UserStatus.LoggedOut) {
        classes.push("inactive");
      }
    }
    return classes.join(" ");
  }
}

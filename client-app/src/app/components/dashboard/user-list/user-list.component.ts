import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { UsersService } from "./../../shared/users.service";
import {map} from 'rxjs/operators';

export enum UserStatus {
  CheckedIn,
  CheckedOut,
}

export interface User {
  roles: string[];
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  status: UserStatus;
  dailyTimeOut: Date;
}

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit {
  constructor(private http: HttpClient, private usersService: UsersService) {}

  ngOnInit(): void {}

  get users() {
    return this.usersService.user$.value.filter(u => !u.roles.includes('admin'));
  }

  getUserStatus(user: User) {
    let status: string;
    switch (user.status) {
      case UserStatus.CheckedIn:
        status = "Checked In";
        break;
      case UserStatus.CheckedOut:
        status = "Checked Out";
        break;
    }
    return status;
  }

  checkedLoggedIn(user: User) {
    return user.status === UserStatus.CheckedIn;
  }

  getSingleUser(id: string) {
    this.http.get<User>(`users/${id}`).subscribe((res) => console.log());
  }

  getStatusClasses(user: User) {
    let classes: string[] = [];
    if (user.status === UserStatus.CheckedIn) {
      classes.push("active");
    }
    {
      if (user.status === UserStatus.CheckedOut) {
        classes.push("inactive");
      }
    }
    return classes.join(" ");
  }
}

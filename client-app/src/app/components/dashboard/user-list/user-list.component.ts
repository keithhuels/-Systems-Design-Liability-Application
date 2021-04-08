import { Component, OnInit } from "@angular/core";

export enum UserStatus {
  LoggedIn,
  LoggedOut,
}

interface User {
  name: string;
  id: number;
  status: UserStatus;
}

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit {
  users: User[] = [
    {
      id: 0,
      name: "John",
      status: UserStatus.LoggedIn,
    },
    {
      id: 1,
      name: "Bob",
      status: UserStatus.LoggedOut,
    },
    {
      id: 2,
      name: "Alice",
      status: UserStatus.LoggedOut,
    },
    {
      id: 3,
      name: "Jane",
      status: UserStatus.LoggedOut,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

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

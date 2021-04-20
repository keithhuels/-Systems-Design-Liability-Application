import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "../dashboard/user-list/user-list.component";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  public user$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  constructor(private readonly http: HttpClient) {
    this.getUsers();
  }
  addUser(user: User) {
    this.user$.next([...this.user$.value, user]);
  }

  getUsers() {
    this.http.get<User[]>("users").subscribe((res) => this.user$.next(res));
  }
}

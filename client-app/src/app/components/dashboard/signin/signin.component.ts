import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  onBackClick() {
    this.router.navigate(["dashboard"]);
  }

  onSignInClick() {
    //authenticate user, if user is authenticated, send to log time page
    this.router.navigate(["dashboard", "logtime"]);
  }
   // onNeedHelpClick() {
  //   this.router.navigate()
  // }
}

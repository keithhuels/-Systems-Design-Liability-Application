import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-default-dashboard",
  templateUrl: "./default-dashboard.component.html",
  styleUrls: ["./default-dashboard.component.scss"],
})
export class DefaultDashboardComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  onCheckInClick() {
    this.router.navigate(["dashboard", "checkin"]);
  }

  onCheckOutClick() {
    this.router.navigate(["dashboard", "checkout"]);
  }
  onGuestAccessClick() {
    this.router.navigate(["dashboard", "form"]);
  }

  onSignUpClick() {
    this.router.navigate(["dashboard", "signup"]);
  }
  // onNeedHelpClick() {
  //   this.router.navigate()
  // }
}

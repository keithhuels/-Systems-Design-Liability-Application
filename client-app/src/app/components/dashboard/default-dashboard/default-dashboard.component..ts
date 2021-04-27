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

  onSignUpClick() {
    this.router.navigate(["dashboard", "signup"]);
  }

  onSignInClick() {
    this.router.navigate(["dashboard", "signin"]);

  }
}

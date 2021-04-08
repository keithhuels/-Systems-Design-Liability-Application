import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-default-user-detail",
  templateUrl: "./default-user-detail.component.html",
  styleUrls: ["./default-user-detail.component.scss"],
})
export class DefaultUserDetailComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  onSignUpClick() {
    this.router.navigate(["dashboard", "signup"]);
  }
}

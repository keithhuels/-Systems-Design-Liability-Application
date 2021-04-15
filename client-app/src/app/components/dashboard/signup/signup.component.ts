import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}
  onBackClick() {
    this.router.navigate(["dashboard"]);
  }
  onLiabilityClick() {
    this.router.navigate(["dashboard", "form"]);
  }

  //do not allow unless waiver is accepted
  onCreateClick() {
    this.router.navigate(["dashboard"]);
  }
   // onNeedHelpClick() {
  //   this.router.navigate()
  // }
}

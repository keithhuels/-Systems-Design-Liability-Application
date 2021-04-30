import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  onPageCoverClicked() {
    this.router.navigate(["dashboard"]);
  }

  onAdminClick() {
    this.router.navigate(["dashboard", "adminlogin"]);
  }

  // onNeedHelpClick() {
  //   this.router.navigate()
  // }
}

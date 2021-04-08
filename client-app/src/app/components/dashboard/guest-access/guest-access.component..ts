import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-guest-access",
  templateUrl: "./guest-access.component.html",
  styleUrls: ["./guest-access.component.scss"],
})
export class GuestAccessComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}
  onBackClick() {
    this.router.navigate(["dashboard"]);
  }
}

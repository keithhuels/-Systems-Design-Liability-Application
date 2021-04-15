import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-logtime",
  templateUrl: "./logtime.component.html",
  styleUrls: ["./logtime.component.scss"],
})
export class LogtimeComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}
  onSubmitTimeClick() {
    //start time tracking
    //set user to logged in and display end time
    this.router.navigate(["dashboard"]);
  }
  onBackClick() {
    this.router.navigate(["dashboard", "signin"]);
  }
}

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-adminlogin",
  templateUrl: "./adminlogin.component.html",
  styleUrls: ["./adminlogin.component.scss"],
})
export class AdminloginComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  onBackClick() {
    this.router.navigate([""]);
  }

  onLogInClick() {
    this.router.navigate(["dashboard", "adminlookup"]);
  }

  onHelpClick() {
    //contextualhelplink
  }
  // onNeedHelpClick() {
  //   this.router.navigate()
  // }
}

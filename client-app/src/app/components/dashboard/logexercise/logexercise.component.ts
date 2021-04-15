import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-logexercise",
  templateUrl: "./logexercise.component.html",
  styleUrls: ["./logexercise.component.scss"],
})
export class LogexerciseComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void { }
  
  onBackClick() {
    this.router.navigate(["dashboard"]);
  }
   // onNeedHelpClick() {
  //   this.router.navigate()
  // }
}

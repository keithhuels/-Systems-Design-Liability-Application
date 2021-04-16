import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"],
})
export class SliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + "min";
    }

    return value;
  }
}

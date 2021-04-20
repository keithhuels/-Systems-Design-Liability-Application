import {Component, Input, OnInit, Output} from '@angular/core';
import {Form, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"],
})
export class SliderComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() controlName: string;
  @Input() tickLabel: string;
  @Input() min: number;
  @Input() max: number;

  constructor() {}

  ngOnInit(): void {}
  formatLabel(value: number) {
    if (value >= 1) {
      return Math.round(value / 1);
    }

    return value;
  }


}

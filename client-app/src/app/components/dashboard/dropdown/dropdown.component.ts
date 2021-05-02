import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

interface Machine {
  name: string;
  value: string;
}

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"],
})
export class DropdownComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() controlName: string;

  constructor() {}

  ngOnInit(): void {}
  machines: Machine[] = [
    {
      name: "Bike",
      value: "bike",
    },
    {
      name: "Treadmill",
      value: "treadmill",
    },
    { name: "Weights", value: "weights" },
    { name: "Rower", value: "rower" },
    { name: "Punching Bag", value: "punching-bag" },
    { name: "Jump Rope", value: "jump-rope" },
  ];
}

import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

interface Machine {
  name: string;
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
  animalControl = new FormControl("", Validators.required);
  selectFormControl = new FormControl("", Validators.required);
  machines: Machine[] = [
    { name: "Bike" },
    { name: "Treadmill" },
    { name: "Weights" },
    { name: "Rower" },
  ];
}

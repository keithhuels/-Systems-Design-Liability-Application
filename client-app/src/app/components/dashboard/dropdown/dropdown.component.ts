import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import {HttpClient} from '@angular/common/http';

export interface Machine {
  name: string;
  _id: string;
}

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"],
})
export class DropdownComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() controlName: string;
  @Input() machines: Machine[];

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Machine[]>('workout-equipment').subscribe(res => {
      this.machines = res;
    });
  }

}

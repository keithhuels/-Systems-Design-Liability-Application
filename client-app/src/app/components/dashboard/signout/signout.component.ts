import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ModalService } from "../modal/modal.service";

export interface WorkoutLog {
  equipmentName: string;
  duration: number;
  weight?: number;
  sets?: number;
  reps?: number;
}

export interface Exercise {
  username: string;
  routine: WorkoutLog[];
}

@Component({
  selector: "app-signout",
  templateUrl: "./signout.component.html",
  styleUrls: ["./signout.component.scss"],
})
// const slider = new MDCSlider(document.querySelector('.mdc-slider'));
export class SignoutComponent implements OnInit {
  form: FormGroup;

  loggedExercises: WorkoutLog[] = [];

  constructor(
    private readonly router: Router,
    private modalService: ModalService,
    private readonly http: HttpClient
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      equipmentName: new FormControl("", [Validators.required]),
      duration: new FormControl("", [Validators.required]),
      weight: new FormControl(),
      sets: new FormControl(),
      reps: new FormControl(),
    });
  }

  formatLabel(value: number) {
    if (value >= 1) {
      return Math.round(value / 1) + "min";
    }

    return value;
  }

  onBackClick() {
    this.router.navigate(["dashboard"]);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  addExercise() {
    this.loggedExercises.push(this.form.value);
    this.form.reset();
  }

  //log exercise info in database, close modal and sign out in user list
  logAndCloseModal(id: string) {
    const request: Exercise = {
      username: "keithh",
      routine: this.loggedExercises,
    };
    this.http.post<Exercise>(`users/log-exercise`, request).subscribe(
      (response) => console.log(response),
      (err) => {
        console.log(err);
      }
    );

    this.modalService.close(id);
    this.router.navigate(["dashboard"]);
  }

  // onNeedHelpClick() {
  //   this.router.navigate()
  // }
}

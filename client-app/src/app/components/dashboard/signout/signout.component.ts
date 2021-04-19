import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ModalService } from "../modal/modal.service";

export interface WorkoutEquipment {
  name: string;
}

export interface Exercise {
  username: string;
  date: Date;
  time: number;
  routine: {
    log: {
      equipmentName: string;
      duration: number;
      weight?: number;
      sets?: number;
      reps?: number;
    };
  };
}

@Component({
  selector: "app-signout",
  templateUrl: "./signout.component.html",
  styleUrls: ["./signout.component.scss"],
})
// const slider = new MDCSlider(document.querySelector('.mdc-slider'));
export class SignoutComponent implements OnInit {
  form: FormGroup;

  workoutEquipment: WorkoutEquipment[] = [
    {
      name: "bike",
    },
  ];

  loggedExercises = [];

  constructor(
    private readonly router: Router,
    private modalService: ModalService,
    private readonly http: HttpClient
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      equipmentName: new FormControl(""),
      duration: new FormControl(0),
      weight: new FormControl(0),
      sets: new FormControl(0),
      reps: new FormControl(0),
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
    this.loggedExercises.push(
      this.loggedExercises.length + JSON.stringify(this.form.value)
    );
    console.log(this.loggedExercises);
    this.form.reset();
  }

  //log exercise info in database, close modal and sign out in user list
  logAndCloseModal(id: string) {

    // this.http.post<Exercise>('users', this.loggedExercises).subscribe((response) => console.log(response), (err) => {
    //   console.log(err);
    // });
    
    this.modalService.close(id);
    this.router.navigate(["dashboard"]);
  }

  // onNeedHelpClick() {
  //   this.router.navigate()
  // }
}

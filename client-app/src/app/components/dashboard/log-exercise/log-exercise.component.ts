import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ModalService} from '../modal/modal.service';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../../services/auth/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UsersService} from '../../shared/users.service';

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
  selector: 'app-log-exercise',
  templateUrl: './log-exercise.component.html',
  styleUrls: ['./log-exercise.component.scss']
})
export class LogExerciseComponent implements OnInit {

  form: FormGroup;

  loggedExercises: WorkoutLog[] = [];

  constructor(
    private readonly router: Router,
    private modalService: ModalService,
    private readonly http: HttpClient,
    private readonly authService: AuthService,
    private readonly matSnackbar: MatSnackBar,
    private readonly usersService: UsersService
  ) {
  }

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
      return Math.round(value / 1) + 'min';
    }

    return value;
  }

  onBackClick() {
    this.router.navigate(['dashboard']);
  }

  openModal(id: string) {
    if (!this.authService.isAuthenticated()) {
      console.log('Sorry This user is not authed');
      return;
    }
    this.modalService.open(id);
  }

  addExercise() {
    this.loggedExercises.push(this.form.value);
    console.log(this.loggedExercises);
    this.form.reset();
  }

  //log exercise info in database, close modal and sign out in user list
  logAndCloseModal(id: string) {
    const request: Exercise = {
      username: this.authService.getCurrentUserName(),
      routine: this.loggedExercises,
    };
    this.http.post<Exercise>(`users/checkout`, request).subscribe(
      (response) => {
        this.authService.logout();
        this.usersService.getUsers();
        this.matSnackbar.open(`Saved workout for ${request.username}`, 'Ok', {
          duration: 3000,
        });
        this.matSnackbar.open(`${request.username} checked out`, 'Ok', {
          duration: 3000,
        });
      },
      (err) => {
        console.log(err);
      }
    );

    this.modalService.close(id);
    this.router.navigate(['dashboard']);
  }

  justCheckOut() {
    const request: Exercise = {
      username: this.authService.getCurrentUserName(),
      routine: [],
    };
    this.http.post<Exercise>(`users/checkout`, request).subscribe(
      (response) => {
        this.authService.logout();
        this.usersService.getUsers();
        this.router.navigate(['dashboard']);
        this.matSnackbar.open(`${request.username} checked out`, 'Ok', {
          duration: 3000,
        });
      },
      (err) => {
        this.matSnackbar.open(`Error found: ${JSON.stringify(err?.message)}`,'Ok', {
          duration: 3000,
        });
      }
    );
  }

  // onNeedHelpClick() {
  //   this.router.navigate()
  // }
}

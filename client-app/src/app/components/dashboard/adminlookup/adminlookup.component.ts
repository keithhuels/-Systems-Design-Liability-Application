import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {DialogComponent} from '../dialog/dialog.component';
import {ModalService} from '../modal/modal.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UserLookupResponse} from './user-lookup-response';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-adminlookup',
  templateUrl: './adminlookup.component.html',
  styleUrls: ['./adminlookup.component.scss'],
})
export class AdminlookupComponent implements OnInit {
  usersWorkoutForm: FormGroup;
  equipmentForm: FormGroup;
  workoutResponse: UserLookupResponse;

  constructor(
    private readonly router: Router,
    private modalService: ModalService,
    private dialog: MatDialog,
    private http: HttpClient,
    private matSnackbar: MatSnackBar,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.equipmentForm = new FormGroup({
      addEquipment: new FormControl('', Validators.required),
    });
    this.usersWorkoutForm = new FormGroup({
      username: new FormControl('', Validators.required),
      fromDate: new FormControl(''),
      toDate: new FormControl('')
    });
  }

  onBackClick() {
    this.router.navigate(['dashboard']);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  onSignOutClick() {
    this.authService.logout();
    this.router.navigate(['dashboard']);
  }

  onDeleteClick(username: string) {
    this.dialog.open(DialogComponent, {
      data: {
        username
      }
    });
  }

  onAddAdminClick() {
    this.router.navigate(['dashboard', 'addadmin']);
  }

  addExercise() {

  }

  onAddEquipmentClick(id: string) {
    this.modalService.open(id);
  }

  // onNeedHelpClick() {
  //   this.router.navigate()
  // }
  getErrorMessage() {
    return 'Username is required';
  }

  submitUserWorkoutForm() {
    let params = new HttpParams()
      .set('username', this.usersWorkoutForm.controls.username.value);
    if (this.usersWorkoutForm.controls.fromDate.value) {
      const fromDate  = this.usersWorkoutForm.controls.fromDate.value as Date;
      params = params.set('fromDate', fromDate.toISOString());
    }
    if (this.usersWorkoutForm.controls.toDate.value) {
      const toDate  = this.usersWorkoutForm.controls.toDate.value as Date;
      params = params.set('toDate', toDate.toISOString());
    }

    this.http.get<UserLookupResponse>('admin/search-workouts', {params}).subscribe(res => {
        this.workoutResponse = res;
        this.modalService.open('user-info');
      },
      err => {
        console.log(err);
        if (err.status === 404) {
          this.matSnackbar.open(`User not found`, 'Ok', {
            duration: 3000,
          });
        } else {
          this.matSnackbar.open(`error`, 'Ok', {
            duration: 3000,
          });
        }
      });
  }
}

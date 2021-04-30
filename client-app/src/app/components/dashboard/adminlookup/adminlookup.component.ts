import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {DialogComponent} from '../dialog/dialog.component';
import {ModalService} from '../modal/modal.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-adminlookup',
  templateUrl: './adminlookup.component.html',
  styleUrls: ['./adminlookup.component.scss'],
})
export class AdminlookupComponent implements OnInit {
  usersWorkoutForm: FormGroup;
  equipmentForm: FormGroup;

  constructor(
    private readonly router: Router,
    private modalService: ModalService,
    private dialog: MatDialog,
    private http: HttpClient,
    private matSnackbar: MatSnackBar
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

  //record form has been accepted, close modal, and either log guest in in user list or allow create user button to be clicked
  acceptAndCloseModal(id: string) {
    this.modalService.close(id);
    this.router.navigate(['dashboard', 'adminlookup']);
  }

  onSignOutClick() {
    this.router.navigate(['']);
  }

  onDeleteClick() {
    this.dialog.open(DialogComponent);
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
    const params = new HttpParams()
      .set('username', this.usersWorkoutForm.controls.username.value);
    if (this.usersWorkoutForm.controls.fromDate.value) {
      params.set('fromDate', this.usersWorkoutForm.controls.fromDate.value);
    }
    if (this.usersWorkoutForm.controls.toDate.value) {
      params.set('toDate', this.usersWorkoutForm.controls.toDate.value);
    }

    this.http.get('admin/search-workouts', {params}).subscribe(res => {
        console.log(res);
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

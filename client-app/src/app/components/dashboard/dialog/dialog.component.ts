import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {ModalService} from '../modal/modal.service';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UsersService} from '../../shared/users.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogComponent>,
    private readonly modalService: ModalService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly http: HttpClient,
    private readonly matSnackBar: MatSnackBar,
    private readonly usersService: UsersService
  ) {
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

  onCancelClick() {
    this.dialogRef.close(DialogComponent);
  }

  onDeleteUserClick(username: string, modalId: string) {
    this.http.delete(`users/${username}`).subscribe(res => {
        this.dialogRef.close(DialogComponent);
        this.modalService.close(modalId);
        this.usersService.getUsers();
        this.matSnackBar.open(`Deleted user: ${username}`, 'Ok', {
          duration: 3000,
        });
      },
      (err) => {
        if (err.error.statusCode === 400) {
          this.matSnackBar.open(`Bad Request: ${err.error.error}`, 'Ok', {
            duration: 3000,
          });
        } else {
          this.matSnackBar.open(`Error Deleting User`, 'Ok', {
            duration: 3000,
          });
        }
      });
  }
}

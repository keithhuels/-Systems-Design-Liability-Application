import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ModalService } from "../modal/modal.service";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"],
})
export class DialogComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogComponent>,
    private readonly modalService: ModalService
  ) {}

  ngOnInit(): void {}
  openDialog() {
    this.dialog.open(DialogComponent);
  }
  onCancelClick() {
    this.dialogRef.close(DialogComponent);
  }

  onDeleteUserClick(id: string) {
    //delete user from database/userlist/EVERYWHERE!!!
    this.dialogRef.close(DialogComponent);
    this.modalService.close(id);
  }
}

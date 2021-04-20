import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { DialogComponent } from "../dialog/dialog.component";
import { ModalService } from "../modal/modal.service";

@Component({
  selector: "app-adminlookup",
  templateUrl: "./adminlookup.component.html",
  styleUrls: ["./adminlookup.component.scss"],
})
export class AdminlookupComponent implements OnInit {
  form: FormGroup;

  constructor(
    private readonly router: Router,
    private modalService: ModalService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      addEquipment: new FormControl("", Validators.required),
    });
  }

  onBackClick() {
    this.router.navigate(["dashboard", "adminlogin"]);
  }
  openModal(id: string) {
    this.modalService.open(id);
  }

  //record form has been accepted, close modal, and either log guest in in user list or allow create user button to be clicked
  acceptAndCloseModal(id: string) {
    this.modalService.close(id);
    this.router.navigate(["dashboard", "adminlookup"]);
  }

  onSignOutClick() {
    this.router.navigate([""]);
  }

  onDeleteClick() {
    this.dialog.open(DialogComponent);
  }

  onAddAdminClick() {
    this.router.navigate(["dashboard", "addadmin"]);
  }

  addExercise() {
   
  }

  onAddEquipmentClick(id: string) {
    this.modalService.open(id);
  }
  // onNeedHelpClick() {
  //   this.router.navigate()
  // }
}

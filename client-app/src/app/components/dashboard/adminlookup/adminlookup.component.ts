import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalService } from "../modal/modal.service";

@Component({
  selector: "app-adminlookup",
  templateUrl: "./adminlookup.component.html",
  styleUrls: ["./adminlookup.component.scss"],
})
export class AdminlookupComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {}

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
  //onLookUpClick(){

  //}

  // onNeedHelpClick() {
  //   this.router.navigate()
  // }
}

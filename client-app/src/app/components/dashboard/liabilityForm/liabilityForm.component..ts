import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalService } from "./../_modal/modal.service";

@Component({
  selector: "app-liabilityForm",
  templateUrl: "./liabilityForm.component.html",
  styleUrls: ["./liabilityForm.component.scss"],
})
export class LiabilityFormComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {}
  onBackClick() {
    this.router.navigate(["dashboard"]);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  //record form has been accepted, close modal, and either log guest in in user list or allow create user button to be clicked
  acceptAndCloseModal(id: string) {
    this.modalService.close(id);
    this.router.navigate(["dashboard"]);
  }
}

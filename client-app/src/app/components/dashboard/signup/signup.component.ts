import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { ModalService } from "../modal/modal.service";
import { User } from "../user-list/user-list.component";
import { PasswordValidationService } from "./../../../../password-validation.service";
import { UsersService } from "./../../shared/users.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly modalService: ModalService,
    private readonly http: HttpClient,
    private readonly usersService: UsersService,
    private readonly passwordValidator: PasswordValidationService,
    private formBuilder: FormBuilder
  ) {}

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: new FormControl("", [Validators.required]),
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required]),
        confirmPassword: new FormControl("", [Validators.required]),
        firstName: new FormControl("", [Validators.required]),
        lastName: new FormControl("", [Validators.required]),
        organization: new FormControl("", [Validators.required]),
        waiverAccepted: new FormControl(false, [
          Validators.required,
          Validators.requiredTrue,
        ]),
      },
      {
        validator: this.passwordValidator.passwordMatchValidator(
          "password",
          "confirmPassword"
        ),
      }
    );
  }

  onBackClick() {
    this.router.navigate(["dashboard"]);
  }

  onLiabilityClick() {
    this.modalService.open("custom-modal-2");
  }

  onCreateAccountClicked() {
    this.http.post<User>("users", this.form.value).subscribe(
      (response) => {
        this.usersService.getUsers();
        this.router.navigate(["dashboard"]);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // onNeedHelpClick() {
  //   this.router.navigate()
  // }
  acceptAndCloseModal(id: string) {
    this.modalService.close(id);
  }

  getErrorMessage() {
    return "This field must be filled out.";
  }
}

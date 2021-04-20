import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-admin",
  templateUrl: "./add-admin.component.html",
  styleUrls: ["./add-admin.component.scss"],
})
export class AddAdminComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly http: HttpClient
  ) {}

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      title: new FormControl("", [Validators.required]),
    });
  }

  onBackClick() {
    this.router.navigate(["dashboard", "adminlookup"]);
  }

  onCreateAccountClicked() {
    // this.http.post<User>('users', this.form.value).subscribe((response) => console.log(response), (err) => {
    //   console.log(err);
    // });
  }

  // onNeedHelpClick() {
  //   this.router.navigate()
  // }

  getErrorMessage() {
    return "This field must be filled out.";
  }
}

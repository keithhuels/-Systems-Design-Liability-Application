import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSliderModule } from "@angular/material/slider";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddAdminComponent } from "./components/dashboard/add-admin/add-admin.component";
import { AdminloginComponent } from "./components/dashboard/adminlogin/adminlogin.component";
import { AdminlookupComponent } from "./components/dashboard/adminlookup/adminlookup.component";
import { DashboardHeaderComponent } from "./components/dashboard/dashboard-header/dashboard-header.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DefaultDashboardComponent } from "./components/dashboard/default-dashboard/default-dashboard.component.";
import { DialogComponent } from "./components/dashboard/dialog/dialog.component";
import { DropdownComponent } from "./components/dashboard/dropdown/dropdown.component";
import { ModalComponent } from "./components/dashboard/modal/modal.component";
import { SigninComponent } from "./components/dashboard/signin/signin.component";
import { SignoutComponent } from "./components/dashboard/signout/signout.component";
import { SignupComponent } from "./components/dashboard/signup/signup.component";
import { SliderComponent } from "./components/dashboard/slider/slider.component";
import { UserListComponent } from "./components/dashboard/user-list/user-list.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { ApiInterceptor } from "./interceptors/api.interceptor";
import {JwtModule} from '@auth0/angular-jwt';

export function tokenGetter() {
  return sessionStorage.getItem("id_token");
}

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DashboardComponent,
    UserListComponent,
    DashboardHeaderComponent,
    DefaultDashboardComponent,
    SignupComponent,
    SigninComponent,
    AdminloginComponent,
    SignoutComponent,
    AdminlookupComponent,
    ModalComponent,
    SliderComponent,
    DropdownComponent,
    DialogComponent,
    AddAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSliderModule,
    MatSelectModule,
    MatDialogModule,
    MatDatepickerModule,
    MatMomentDateModule,
    JwtModule.forRoot({
      config: {tokenGetter}
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

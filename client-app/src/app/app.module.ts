import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AdminloginComponent } from "./components/dashboard/adminlogin/adminlogin.component";
import { AdminlogoutComponent } from "./components/dashboard/adminlogout/adminlogout.component";
import { AdminlookupComponent } from "./components/dashboard/adminlookup/adminlookup.component";
import { DashboardHeaderComponent } from "./components/dashboard/dashboard-header/dashboard-header.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DefaultDashboardComponent } from "./components/dashboard/default-dashboard/default-dashboard.component.";
import { LiabilityFormComponent } from "./components/dashboard/liabilityForm/liabilityForm.component.";
import { LogexerciseComponent } from "./components/dashboard/logexercise/logexercise.component";
import { SigninComponent } from "./components/dashboard/signin/signin.component";
import { SignoutComponent } from "./components/dashboard/signout/signout.component";
import { SignupComponent } from "./components/dashboard/signup/signup.component";
import { UserListComponent } from "./components/dashboard/user-list/user-list.component";
import { ModalComponent } from "./components/dashboard/_modal/modal.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DashboardComponent,
    UserListComponent,
    LiabilityFormComponent,
    DashboardHeaderComponent,
    DefaultDashboardComponent,
    SignupComponent,
    SigninComponent,
    AdminloginComponent,
    LogexerciseComponent,
    SignoutComponent,
    AdminlookupComponent,
    AdminlogoutComponent,
    ModalComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

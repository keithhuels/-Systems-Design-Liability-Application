import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminloginComponent } from "./components/dashboard/adminlogin/adminlogin.component";
import { AdminlogoutComponent } from "./components/dashboard/adminlogout/adminlogout.component";
import { AdminlookupComponent } from "./components/dashboard/adminlookup/adminlookup.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DefaultDashboardComponent } from "./components/dashboard/default-dashboard/default-dashboard.component.";
import { LiabilityFormComponent } from "./components/dashboard/liabilityForm/liabilityForm.component.";
import { LogexerciseComponent } from "./components/dashboard/logexercise/logexercise.component";
import { LogtimeComponent } from "./components/dashboard/logtime/logtime.component";
import { SigninComponent } from "./components/dashboard/signin/signin.component";
import { SignoutComponent } from "./components/dashboard/signout/signout.component";
import { SignupComponent } from "./components/dashboard/signup/signup.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent,
  },

  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "",
        component: DefaultDashboardComponent,
      },
      {
        path: "signin",
        component: SigninComponent,
      },
      {
        path: "form",
        component: LiabilityFormComponent,
      },
      {
        path: "logtime",
        component: LogtimeComponent,
      },
      {
        path: "signup",
        component: SignupComponent,
      },
      {
        path: "signout",
        component: SignoutComponent,
      },
      {
        path: "logexercise",
        component: LogexerciseComponent,
      },
      {
        path: "adminlogin",
        component: AdminloginComponent,
      },
      {
        path: "adminlookup",
        component: AdminlookupComponent,
      },
      {
        path: "adminlogout",
        component: AdminlogoutComponent,
      },
    ],
  },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

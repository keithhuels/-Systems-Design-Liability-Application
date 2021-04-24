import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddAdminComponent } from "./components/dashboard/add-admin/add-admin.component";
import { AdminloginComponent } from "./components/dashboard/adminlogin/adminlogin.component";
import { AdminlookupComponent } from "./components/dashboard/adminlookup/adminlookup.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DefaultDashboardComponent } from "./components/dashboard/default-dashboard/default-dashboard.component.";
import { LogtimeComponent } from "./components/dashboard/logtime/logtime.component";
import { SigninComponent } from "./components/dashboard/signin/signin.component";
import { SignoutComponent } from "./components/dashboard/signout/signout.component";
import { SignupComponent } from "./components/dashboard/signup/signup.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import {AuthGuardService} from './services/auth/auth-guard.service';

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
        path: "logtime",
        component: LogtimeComponent,
        canActivate: [AuthGuardService],
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
        path: "adminlogin",
        component: AdminloginComponent,
      },
      {
        path: "adminlookup",
        component: AdminlookupComponent,
        canActivate: [AuthGuardService],
        data: {
          role: 'admin'
        }
      },
      {
        path: "addadmin",
        component: AddAdminComponent,
        canActivate: [AuthGuardService],
        data: {
          role: 'admin'
        }
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

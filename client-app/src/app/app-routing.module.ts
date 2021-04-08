import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DefaultDashboardComponent } from "./components/dashboard/default-dashboard/default-dashboard.component.";
import { GuestAccessComponent } from "./components/dashboard/guest-access/guest-access.component.";
import { SigninComponent } from "./components/dashboard/signin/signin.component";
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
        path: "guest",
        component: GuestAccessComponent,
      },
      {
        path: "signup",
        component: SignupComponent,
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

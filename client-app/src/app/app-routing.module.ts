import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DefaultUserDetailComponent } from "./components/dashboard/default-user-detail/default-user-detail.component";
import { SignupComponent } from "./components/dashboard/signup/signup.component";
import { UserDetailComponent } from "./components/dashboard/user-detail/user-detail.component";
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
        component: DefaultUserDetailComponent,
      },
      {
        path: "user/:id",
        component: UserDetailComponent,
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

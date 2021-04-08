import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserListComponent } from './components/dashboard/user-list/user-list.component';
import { GuestAccessComponent } from './components/dashboard/guest-access/guest-access.component.';
import { DashboardHeaderComponent } from './components/dashboard/dashboard-header/dashboard-header.component';
import { DefaultDashboardComponent } from './components/dashboard/default-dashboard/default-dashboard.component.';
import { SignupComponent } from './components/dashboard/signup/signup.component';
import { SigninComponent } from './components/dashboard/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DashboardComponent,
    UserListComponent,
    GuestAccessComponent,
    DashboardHeaderComponent,
    DefaultDashboardComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

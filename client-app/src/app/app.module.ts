import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdminloginComponent} from './components/dashboard/adminlogin/adminlogin.component';
import {AdminlogoutComponent} from './components/dashboard/adminlogout/adminlogout.component';
import {AdminlookupComponent} from './components/dashboard/adminlookup/adminlookup.component';
import {DashboardHeaderComponent} from './components/dashboard/dashboard-header/dashboard-header.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {DefaultDashboardComponent} from './components/dashboard/default-dashboard/default-dashboard.component.';
import {ModalComponent} from './components/dashboard/modal/modal.component';
import {SigninComponent} from './components/dashboard/signin/signin.component';
import {SignoutComponent} from './components/dashboard/signout/signout.component';
import {SignupComponent} from './components/dashboard/signup/signup.component';
import {UserListComponent} from './components/dashboard/user-list/user-list.component';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiInterceptor} from './interceptors/api.interceptor';
import {ReactiveFormsModule} from '@angular/forms';

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
    AdminlogoutComponent,
    ModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, ReactiveFormsModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {
}

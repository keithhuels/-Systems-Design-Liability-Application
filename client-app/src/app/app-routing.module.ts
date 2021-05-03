import { HelpdocumentComponent } from './components/helpdocument/helpdocument.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminlookupComponent} from './components/dashboard/adminlookup/adminlookup.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {DefaultDashboardComponent} from './components/dashboard/default-dashboard/default-dashboard.component.';
import {LogtimeComponent} from './components/dashboard/logtime/logtime.component';
import {SigninComponent} from './components/dashboard/checkin/signin.component';
import {CheckoutComponent} from './components/dashboard/checkout/checkout.component';
import {SignupComponent} from './components/dashboard/signup/signup.component';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {AuthGuardService} from './services/auth/auth-guard.service';
import {LogExerciseComponent} from './components/dashboard/log-exercise/log-exercise.component';
import {StatusMenuComponent} from './components/dashboard/status-menu/status-menu.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },

  {
    path: 'help',
    component: HelpdocumentComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DefaultDashboardComponent,
      },
      {
        path: 'signin',
        component: SigninComponent,
      },
      {
        path: 'logtime',
        component: LogtimeComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
      },
      {
        path: 'status-menu',
        component: StatusMenuComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'log-exercise',
        component: LogExerciseComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'adminlookup',
        component: AdminlookupComponent,
        canActivate: [AuthGuardService],
        data: {
          role: 'admin'
        }
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

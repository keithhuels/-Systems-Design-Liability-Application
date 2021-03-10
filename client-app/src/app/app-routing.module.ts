import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {UserDetailComponent} from './components/dashboard/user-detail/user-detail.component';
import {DefaultUserDetailComponent} from './components/dashboard/default-user-detail/default-user-detail.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DefaultUserDetailComponent
      },
      {
        path: 'user/:id',
        component: UserDetailComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

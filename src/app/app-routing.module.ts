import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
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

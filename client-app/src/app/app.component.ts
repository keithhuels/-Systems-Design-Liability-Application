import {Component} from '@angular/core';
import {trigger} from '@angular/animations';
import {RouteFade} from './components/shared/route-fade-animation';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [trigger('routeFade', RouteFade)]
})
export class AppComponent {
  prepareOutlet(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}

import { Component } from '@angular/core';

import { faCoffee, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // dummy property to pass the CI ng test
  dummyTitle = 'angular-components'
  infoIcon = faInfoCircle;
}

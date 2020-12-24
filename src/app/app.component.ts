// angular imports
import { Component, OnInit } from '@angular/core';

// km project imports

// 3rd party imports

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // dummy property to pass the CI ng test
  dummyTitle = 'angular-components'
  currentYear: number = (new Date()).getFullYear();




}

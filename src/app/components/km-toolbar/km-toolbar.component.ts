// angular imports
import { Component, Input, OnInit, ViewChild } from '@angular/core';

// km project imports

// 3rd party imports
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'km-toolbar',
  templateUrl: './km-toolbar.component.html',
  styleUrls: ['./km-toolbar.component.scss']
})
export class KmToolbarComponent implements OnInit {

  // inputs
  @Input() title: string;
  @Input() currentYear: number;

  // viewchild
  @ViewChild(MatSidenav) sidenav: MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

}

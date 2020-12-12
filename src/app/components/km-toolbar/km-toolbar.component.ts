import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'km-toolbar',
  templateUrl: './km-toolbar.component.html',
  styleUrls: ['./km-toolbar.component.scss']
})
export class KmToolbarComponent implements OnInit {

  // inputs
  @Input() title = '';

  constructor() { }

  ngOnInit(): void {
  }

}

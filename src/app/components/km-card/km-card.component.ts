import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'km-card',
  templateUrl: './km-card.component.html',
  styleUrls: ['./km-card.component.scss']
})
export class KmCardComponent implements OnInit {

  @Input() public cardTitle: string = '';
  @Input() public cardSubTitle: string = '';
  @Input() public cardIconClasses;

  constructor() { }

  ngOnInit(): void {
  }

}

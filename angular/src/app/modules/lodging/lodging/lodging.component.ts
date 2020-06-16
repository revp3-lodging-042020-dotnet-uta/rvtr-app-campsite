import { Component, OnInit } from '@angular/core';
import { Lodging } from 'src/app/data/lodging.model';

@Component({
  selector: 'uic-lodging',
  templateUrl: './lodging.component.html',
})
export class LodgingComponent implements OnInit {

  constructor() {}

  Paginate(change: number): void {}

  ngOnInit(): void {}
}

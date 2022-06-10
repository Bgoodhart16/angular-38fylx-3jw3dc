import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product | undefined;
  @Output() notify = new EventEmitter();    //property of notify, with output decorator,  
  constructor() {}                          //and an instance of EventEmitter. 

/*Configuring ProductAlertsComponent with an @Output() allows the ProductAlertsComponent to emit an event when the value of the notify property changes.*/

  ngOnInit(): void {}
}

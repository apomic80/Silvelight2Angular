import { Component, OnInit } from '@angular/core';
import { BasecontrolComponent } from '../basecontrol/basecontrol.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent extends BasecontrolComponent implements OnInit {

  public currentValue: boolean;

  constructor() { super(); }

  ngOnInit() {
  }

  public update() {

  }

}

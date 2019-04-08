import { Component, OnInit } from '@angular/core';
import { BasecontrolComponent } from '../basecontrol/basecontrol.component';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent extends BasecontrolComponent implements OnInit {

  public currentValue: string;

  constructor() { super(); }

  ngOnInit() {
  }

  public update() {

  }

}

import { Component, OnInit } from '@angular/core';
import { BasecontrolComponent } from '../basecontrol/basecontrol.component';

@Component({
  selector: 'app-stackpanel',
  templateUrl: './stackpanel.component.html',
  styleUrls: ['./stackpanel.component.css']
})
export class StackpanelComponent extends BasecontrolComponent implements OnInit {

  public controls = [];

  constructor() {
    super();
  }

  ngOnInit() {
    this.loadControls();
  }

  loadControls() {
    if (Array.isArray(this.schema)) {
        this.schema.forEach(element => {
            element.controlName = 'StackPanel';
            this.controls.push(element);
        });
    } else {
        for (const key in this.schema) {
          if (this.schema.hasOwnProperty(key) && !key.startsWith('@')
            && key.indexOf('.') === -1 && key !== 'controlName') {
            const element = this.schema[key];
            element.controlName = key;
            this.controls.push(element);
          }
        }
    }
  }
}

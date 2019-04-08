import { Component, OnInit } from '@angular/core';
import { BasecontrolComponent } from '../basecontrol/basecontrol.component';
import { BindingProperties } from '../controls.model';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent extends BasecontrolComponent implements OnInit {

  public currentValue: string;
  protected binding: BindingProperties;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  protected loadData() {
    this.binding = this.getBindingProperties(this.schema['@Text']);
    if (this.binding.elementNamePath) {
      this.currentValue = this.data[this.binding.elementNamePath];
    }
  }

  public update() {
    if (this.binding.elementNamePath) {
      this.data[this.binding.elementNamePath] = this.currentValue;
    }
  }

}

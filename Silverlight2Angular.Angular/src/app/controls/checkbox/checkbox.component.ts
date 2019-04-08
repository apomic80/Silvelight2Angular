import { Component, OnInit } from '@angular/core';
import { BasecontrolComponent } from '../basecontrol/basecontrol.component';
import { PropertyChangedService } from '../controls.service';
import { BindingProperties } from '../controls.model';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent extends BasecontrolComponent implements OnInit {

  public currentValue: boolean;
  private binding: BindingProperties;

  constructor(propertyChangedService: PropertyChangedService) {
    super(propertyChangedService);
  }

  ngOnInit() {
  }

  protected loadData() {
    this.binding = this.getBindingProperties(this.schema['@IsChecked']);
    if (this.binding.elementNamePath) {
      this.currentValue = this.data[this.binding.elementNamePath];
    } else {
      this.currentValue = this.schema['@IsChecked'] === 'True';
    }
    this.propertyChangedService
      .notifyPropertyChanged(this.schema['@x:Name'], 'IsChecked', this.currentValue);
  }

  public update() {
    if (this.binding.elementNamePath) {
      this.data[this.binding.elementNamePath] = this.currentValue;
    }
    this.propertyChangedService
      .notifyPropertyChanged(this.schema['@x:Name'], 'IsChecked', this.currentValue);
  }

}

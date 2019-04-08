import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basecontrol',
  template: ``
})
export class BasecontrolComponent {

  public visible: boolean;

  @Input() public schema: any;
  @Input() public data: any;

  constructor() {
    this.visible = true;
  }

}

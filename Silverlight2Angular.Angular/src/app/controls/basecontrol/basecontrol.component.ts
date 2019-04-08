import { Component, Input } from '@angular/core';
import { BindingProperties } from '../controls.model';

@Component({
  selector: 'app-basecontrol',
  template: ``
})
export class BasecontrolComponent {

  public visible: boolean;
  private dataValue: any;

  @Input() public schema: any;

  @Input()
  get data(): any {
    return this.dataValue;
  }
  set data(data: any) {
    this.dataValue = data;
    if (this.schema && this.dataValue) {
      this.loadData();
    }
  }

  constructor() {
    this.visible = true;
  }

  protected loadData() { }

  // {Binding IsChecked, ElementName=chkMostraNote, Converter={StaticResource BooleanToVisibility}}
  // {Binding Path=Nome, Mode=TwoWay}
  protected getBindingProperties(bindingText: string): BindingProperties {
    let elementName: string;
    let elementNamePath: string;

    if (bindingText.indexOf('Binding') > 0) {

      const indexOfComma = bindingText.indexOf(',');
      const bindingTextProperty = bindingText
        .substring(
          bindingText.indexOf('Binding') + 7,
          indexOfComma > -1 ? indexOfComma : bindingText.length - 1
        ).trim();

      const pathIndex = bindingText.indexOf('Path=');
      if (pathIndex > -1) {
        elementNamePath = bindingText.substr(pathIndex);
        let indexOfEndOfPath = elementNamePath.indexOf(',');
        if (indexOfEndOfPath < 0) {
          indexOfEndOfPath = elementNamePath.indexOf('}');
        }
        elementNamePath = elementNamePath
          .substring(5, indexOfEndOfPath)
          .trim();
      } else {
        elementNamePath = bindingTextProperty.replace('Path=', '');
      }

      const elementNameIndex = bindingText.indexOf('ElementName=');
      if (elementNameIndex > -1) {
        elementName = bindingText.substr(elementNameIndex);
        let indexOfEndOfElementName = elementName.indexOf(',');
        if (indexOfEndOfElementName < 0) {
          indexOfEndOfElementName = elementName.indexOf('}');
        }
        elementName = elementName
          .substring(12, indexOfEndOfElementName)
          .trim();
      }
    }

    return new BindingProperties(
      elementName,
      elementNamePath
    );
  }
}

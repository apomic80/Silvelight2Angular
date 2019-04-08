import { Component, Input } from '@angular/core';
import { BindingProperties } from '../controls.model';
import { PropertyChangedService } from '../controls.service';

@Component({
  selector: 'app-basecontrol',
  template: ``
})
export class BasecontrolComponent {

  public visible: boolean;
  private dataValue: any;
  private schemaValue: any;
  private converters: BindingProperties[] = [];

  @Input()
  get schema(): any {
    return this.schemaValue;
  }
  set schema(schema: any) {
    this.schemaValue = schema;
    if (this.schema) {
      this.loadConverters();
    }
  }

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

  constructor(protected propertyChangedService: PropertyChangedService) {
    this.visible = true;
  }

  protected loadData() { }

  private loadConverters() {
    if (this.schema['@Visibility'] && this.schema['@Visibility'].indexOf('Binding') > -1) {
      let converterBinding: BindingProperties;
      converterBinding = this.getBindingProperties(this.schema['@Visibility']);

      this.propertyChangedService.onPropertyChanged(
        property => {
          this.visible = property.propertyValue;
        },
        converterBinding
      );

      this.converters.push(converterBinding);
    }
  }

  // {Binding IsChecked, ElementName=chkMostraNote, Converter={StaticResource BooleanToVisibility}}
  // {Binding Path=Nome, Mode=TwoWay}
  protected getBindingProperties(bindingText: string): BindingProperties {
    let converterName: string;
    let converterParam: string;
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

      const converterIndex = bindingText.indexOf('Converter={StaticResource');
      if (converterIndex > -1) {
        converterName = bindingText.substr(converterIndex);
        converterName = converterName
          .substring(25, converterName.indexOf('}'))
          .trim();
        const converterParamIndex = bindingText.indexOf('ConverterParameter=');
        if (converterParamIndex > -1) {
          converterParam = bindingText.substr(converterParamIndex);
          converterParam = converterParam
            .substring(19, converterParam.indexOf('}'))
            .trim();
        }
      }
    }

    return new BindingProperties(
      converterName,
      converterParam,
      elementName,
      elementNamePath
    );
  }
}

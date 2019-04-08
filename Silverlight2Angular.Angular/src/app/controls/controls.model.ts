export class BindingProperties {
  elementName: string;
  elementNamePath: string;
  converterName: string;
  converterParam: string;

  constructor(
    converterName: string = '',
    converterParam: string = '',
    elementName = '',
    elementNamePath = '') {

    this.converterName = converterName;
    this.converterParam = converterParam;
    this.elementName = elementName;
    this.elementNamePath = elementNamePath;
  }

  public checkProperty(bindingProperties: BindingProperties): boolean {
    return this.elementName === bindingProperties.elementName &&
      this.elementNamePath === bindingProperties.elementNamePath;
  }
}

export interface IConverter {
  convert(value: any, parameter: any): any;
  convertBack(value: any, parameter: any): any;
}

export class VisibilityConverter implements IConverter {

  convert(value: boolean, parameter: any): boolean {
    return value;
  }

  convertBack(value: boolean, parameter: any): boolean {
    return value;
  }
}

export const Converters: { [id: string]: IConverter; } = {
  BooleanToVisibility: new VisibilityConverter()
};

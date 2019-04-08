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

export class BindingProperties {
  elementName: string;
  elementNamePath: string;

  constructor(
    elementName = '',
    elementNamePath = '') {
    this.elementName = elementName;
    this.elementNamePath = elementNamePath;
  }

  public checkProperty(bindingProperties: BindingProperties): boolean {
    return this.elementName === bindingProperties.elementName &&
      this.elementNamePath === bindingProperties.elementNamePath;
  }
}

import { Subject, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { BindingProperties } from './controls.model';

export class PropertyChangedService {

  private propertyChanged$: Subject<any>;

  constructor() {
    this.propertyChanged$ = new Subject();
  }

  notifyPropertyChanged(name: string, path: string, value: any) {
    this.propertyChanged$.next({ elementName: name, elementNamePath: path, propertyValue: value });
  }

  onPropertyChanged(callback: any, bindingProperties: BindingProperties): Subscription {
      return this.propertyChanged$.pipe(
          filter(params => bindingProperties.checkProperty(params)))
          .subscribe(callback);
  }
}

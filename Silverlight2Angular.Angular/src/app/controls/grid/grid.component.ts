import { Component, OnInit } from '@angular/core';
import { BasecontrolComponent } from '../basecontrol/basecontrol.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent extends BasecontrolComponent implements OnInit {

  public rowDefinitions = [];
  public columnDefinitions = [];
  public controls = [];
  public colSize = 12;

  constructor() {
    super();
  }

  ngOnInit() {
    this.loadRowDefinitions();
    this.loadColDefinitions();
    this.loadControls();
  }

  public getControl(row: number, column: number) {
    const rowValue = row.toString();
    const columnValue = column.toString();
    return this.controls.find(c => c['@Grid.Row'] === rowValue && c['@Grid.Column'] === columnValue);
  }

  public loadRowDefinitions() {
    const rows = this.schema['Grid.RowDefinitions'] ? this.schema['Grid.RowDefinitions'].RowDefinition : null;
    if (rows) {
      if (Array.isArray(rows)) {
        rows.forEach(row => {
          this.rowDefinitions.push(row);
        });
      } else {
        this.rowDefinitions.push(rows);
      }
    }
  }

  public loadColDefinitions() {
    const cols = this.schema['Grid.ColumnDefinitions'] ? this.schema['Grid.ColumnDefinitions'].ColumnDefinition : null;
    if (cols) {
      if (Array.isArray(cols)) {
        cols.forEach(col => {
          this.columnDefinitions.push(col);
        });
      } else {
        this.columnDefinitions.push(cols);
      }
      this.colSize = this.columnDefinitions.length > 0 ? Math.round(12 / this.columnDefinitions.length) : 12;
    }
  }

  loadControls() {
    for (const key in this.schema) {
      if (this.schema.hasOwnProperty(key) && !key.startsWith('@')
        && key.indexOf('.') === -1 && key !== 'controlName') {
        const element = this.schema[key];

        if (Array.isArray(element)) {
          element.forEach(arrayElement => {
            arrayElement.controlName = key;
            this.controls.push(arrayElement);
          });
        } else {
          element.controlName = key;
          this.controls.push(element);
        }
      }
    }
  }

}

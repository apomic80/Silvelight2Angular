import { Component, OnInit } from '@angular/core';
import { BasecontrolComponent } from '../basecontrol/basecontrol.component';
import { PropertyChangedService } from '../controls.service';

@Component({
  selector: 'app-textblock',
  templateUrl: './textblock.component.html',
  styleUrls: ['./textblock.component.css']
})
export class TextblockComponent extends BasecontrolComponent implements OnInit {

  constructor(propertyChangedService: PropertyChangedService) {
    super(propertyChangedService);
  }

  ngOnInit() {
  }

}

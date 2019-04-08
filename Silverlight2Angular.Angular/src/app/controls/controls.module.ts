import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackpanelComponent } from './stackpanel/stackpanel.component';
import { TextboxComponent } from './textbox/textbox.component';
import { TextblockComponent } from './textblock/textblock.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { GridComponent } from './grid/grid.component';
import { BasecontrolComponent } from './basecontrol/basecontrol.component';
import { FormsModule } from '@angular/forms';
import { PropertyChangedService } from './controls.service';

@NgModule({
  declarations: [StackpanelComponent, TextboxComponent, TextblockComponent, CheckboxComponent, GridComponent, BasecontrolComponent],
  exports: [StackpanelComponent],
  imports: [
    CommonModule, FormsModule
  ],
  providers: [PropertyChangedService]
})
export class ControlsModule { }

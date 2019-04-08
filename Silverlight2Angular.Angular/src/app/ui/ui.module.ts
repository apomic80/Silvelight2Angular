import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsModule } from '../controls/controls.module';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DetailsComponent],
  exports: [DetailsComponent],
  imports: [
    CommonModule, ControlsModule, HttpClientModule
  ]
})
export class UiModule { }

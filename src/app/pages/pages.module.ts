import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1/page1.component';


@NgModule({
  declarations: [Page1Component],
  imports: [
    CommonModule
  ],
  exports : [Page1Component]
})
export class PagesModule { }

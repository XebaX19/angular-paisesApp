import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }  from '@angular/router';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoadingSpinnerComponent,
    SidebarComponent
  ]
})
export class SharedModule { }

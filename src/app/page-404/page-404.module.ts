import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page404RoutingModule } from './page-404-routing.module';
import { PageErrorComponent } from './pages/page-error/page-error.component';


@NgModule({
  declarations: [
    PageErrorComponent
  ],
  imports: [
    CommonModule,
    Page404RoutingModule
  ]
})
export class Page404Module { }

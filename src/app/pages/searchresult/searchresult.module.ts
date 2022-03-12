import { ComponenteModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchresultRoutingModule } from './searchresult-routing.module';
import { SearchresultComponent } from './searchresult.component';


@NgModule({
  declarations: [
    SearchresultComponent
  ],
  imports: [
    CommonModule,
    SearchresultRoutingModule,
    ComponenteModule
  ]
})
export class SearchresultModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchresultComponent } from './searchresult.component';

const routes: Routes = [{ path: '', component: SearchresultComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchresultRoutingModule { }

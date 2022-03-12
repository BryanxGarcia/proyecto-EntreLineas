import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import{AppRoutingModule} from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponenteModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    ComponenteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

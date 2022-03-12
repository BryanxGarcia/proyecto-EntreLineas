import { HeaderusuarioComponent } from './headerusuario/headerusuario.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderusuarioComponent
  ],
  exports:[
    HeaderComponent,
    HeaderusuarioComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ComponenteModule { }
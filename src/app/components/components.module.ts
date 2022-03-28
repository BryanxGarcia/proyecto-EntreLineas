import { HeaderusuarioComponent } from './headerusuario/headerusuario.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderclaroComponent } from './headerclaro/headerclaro.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderusuarioComponent,
    HeaderclaroComponent
  ],
  exports:[
    HeaderComponent,
    HeaderusuarioComponent,
    HeaderclaroComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ComponenteModule { }
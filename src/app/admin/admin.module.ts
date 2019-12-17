import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorialComponent } from './editorial/editorial.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [EditorialComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRouting } from './login.routing';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, LoginRouting],
  providers: [],
  declarations: [LoginComponent],
})
export class LoginModule {}

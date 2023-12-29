import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthLayoutComponent } from './auth-layout.component';
import { RouterModule } from '@angular/router';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [CommonModule, RouterModule.forChild(AuthLayoutRoutes), FormsModule, CommonModule],
})
export class AuthLayoutModule {}
